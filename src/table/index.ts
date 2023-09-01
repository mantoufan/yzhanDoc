import { App } from 'vue'
import Table from './src/table'
import Column from './src/components/column'

export { Table, Column }
export default {
  install(app: App) {
    app.component(Table.name, Table)
    app.component(Column.name, Column)
  }
}
