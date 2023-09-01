import { createApp } from 'vue'
import App from './App.vue'
// import './index.scss'
//使用全量导出的方式引入组件库
import yZhanUI from './build/yzhanui'

createApp(App).use(yZhanUI).mount('#app')
