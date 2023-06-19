import { ensureDirSync, writeFileSync } from 'fs-extra'
import { resolve } from 'path'
import { lightBlue, lightGreen } from 'kolorist'
import genCoreTemplate from '../template/core'
import genTypesTemplate from '../template/types'
import { genStyleTemplate } from '../template/style'
import genTestTemplate from '../template/test'
import gentIndexTemplate from '../template'

export interface ComponentMeta {
  name: string
  title: string
  category: string
}

export default function createComponent(meta: ComponentMeta) {
  const { name } = meta
  // 拼接组件目录
  const componentDir = resolve(__dirname, '../../../src', name)

  // 其它核心文件：目录源文件、类型、样式、测试
  const srcDir = resolve(componentDir, 'src')
  const styleDir = resolve(componentDir, 'style')
  const testDir = resolve(componentDir, 'test')

  ensureDirSync(srcDir)
  ensureDirSync(styleDir)
  ensureDirSync(testDir)

  // 文件和内容创建
  // 核心文件：组件文件
  const coreFilePath = resolve(srcDir, name) + '.tsx'
  writeFileSync(coreFilePath, genCoreTemplate(name))
  // 核心文件：类型文件
  const typesFilePath = resolve(srcDir, name) + '-type.tsx'
  writeFileSync(typesFilePath, genTypesTemplate(name))
  // 核心文件：样式文件
  const styleFilePath = resolve(styleDir, name) + '.scss'
  writeFileSync(styleFilePath, genStyleTemplate(name))
  // 核心文件：测试文件
  const testFilePath = resolve(testDir, name) + '.test.tsx'
  writeFileSync(testFilePath, genTestTemplate(name))
  // 核心文件：索引文件
  const indexFilePath = componentDir + '/index.tsx'
  writeFileSync(indexFilePath, gentIndexTemplate(name))
  // 创建成功通知
  console.log(lightGreen(`√ 创建成功: ${lightBlue(name)}`))
  console.log(lightBlue(`√ 组件目录: ${lightBlue(componentDir)}`))
}
