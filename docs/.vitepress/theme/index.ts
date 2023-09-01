import DefaultTheme from 'vitepress/theme'
import DemoBlock from 'vitepress-theme-demoblock/dist/client/components/DemoBlock.vue'
import Demo from 'vitepress-theme-demoblock/dist/client/components/Demo.vue'
import YzhanUI from '../../../scripts/entry'

import 'vitepress-theme-demoblock/dist/theme/styles/index.css'
import './iconfont/iconfont.css' // 根据 class 引入图标
import './iconfont/iconfont.js' // 根据 symbol 引入 SVG


export default {
  ...DefaultTheme,
  // 扩展应用程序实例
  enhanceApp({ app }) {
    app.use(YzhanUI)
    app.component('DemoBlock', DemoBlock)
    app.component('Demo', Demo)
  }
}