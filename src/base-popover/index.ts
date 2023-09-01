import { App } from 'vue'
import BasePopover from './src/base-popover'

export { BasePopover }

export default {
  install(app: App) {
    app.component(BasePopover.name, BasePopover)
  }
}
