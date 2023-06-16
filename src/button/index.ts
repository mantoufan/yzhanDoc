import { App } from 'vue'
import YButton from './src/button'

export { YButton }

export default {
  install(app: App) {
    app.component(YButton.name, YButton)
  }
}
