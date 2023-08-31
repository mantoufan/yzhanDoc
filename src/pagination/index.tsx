import { App } from 'vue'
import Pagination from './src/pagination'
import Pager from './src/components/pager'

export { Pagination, Pager }

export default {
  install(app: App) {
    app.component(Pagination.name, Pagination)
    app.component(Pager.name, Pager)
  }
}
