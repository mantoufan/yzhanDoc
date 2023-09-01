const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')
const path = require('path')
const fs = require('fs')
const fsExtra = require('fs-extra')

// Basic Config
const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

// Entry File
const entryFile = path.resolve(__dirname, './entry.ts')

// 组件目录
const componentsDir = path.resolve(__dirname, '../src')

// Output directory
const outputDir = path.resolve(__dirname, '../build')

// Rollup 配置
const rollupOptions = {
  // 外置
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    },
    inlineDynamicImports: false,
    manualChunks(name) {
      if (name.includes('package.json')) return 'package.json'
    },
  }
}

// 生成 package.json
const createPackageJson = (name) => {
  const fileStr = `{
    "name": "${name || 'yzhanui'}",
    "version": "1.0.2",
    "main": "${name ? 'index.umd.cjs' : 'yzhanui.umd.cjs'}",
    "module": "${name ? 'index.cjs' : 'yzhanui.cjs'}",
    "author": "Shon Wu",
    "github": "https://github.com/mantoufan/yzhanUI",
    "description": "A UI Components Library for Vue.js.",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/mantoufan/yzhanUI.git"
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "MIT",
    "bugs": {
      "url": "https://github.com/mantoufan/yzhanUI/issues"
    }
  }`

  if (name) {
    fsExtra.outputFile(path.resolve(outputDir, `${name}/package.json`), fileStr, 'utf-8')
  } else {
    fsExtra.outputFile(path.resolve(outputDir, 'package.json'), fileStr, 'utf-8')
  }
}
// 单独构建

const buildSingle = async name => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: path.resolve(componentsDir, name),
          name: 'index',
          fileName: 'index',
          formats: ['es', 'umd']
        },
        outDir: path.resolve(outputDir, name)
      }
    })
  ) 
  createPackageJson(name)
}
// 全量构建
const buildAll = async() => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'yzhanui',
          fileName: 'yzhanui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
  createPackageJson()
}

const buildLib = async () => {
  await buildAll()
  // 按需打包
  fs.readdirSync(componentsDir).filter(name => {
    const componentDir = path.resolve(componentsDir, name)
    const isDir = fs.lstatSync(componentDir).isDirectory()
    return isDir && fs.readdirSync(componentDir).includes('index.ts')
  }).forEach(async name => {
    await buildSingle(name)
  })
}

buildLib()  