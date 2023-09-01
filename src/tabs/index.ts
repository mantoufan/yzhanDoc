import { App } from 'vue'
import Tabs from './src/tabs'
import Tab from './src/components/tab'

export { Tabs, Tab }

export default {
  install(app: App) {
    app.component(Tabs.name, Tabs)
    app.component(Tab.name, Tab)
  }
}
