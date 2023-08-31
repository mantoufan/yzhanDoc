import { App } from 'vue'
import VirtualList from './src/virtual-list'

export { VirtualList }

export default {
  install(app: App) {
    app.component(VirtualList.name, VirtualList)
  }
}
