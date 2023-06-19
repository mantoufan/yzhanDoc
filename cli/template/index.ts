import { upperFirst } from './utils'

export default function gentIndexTemplate(name: string) {
  const componentName = upperFirst(name)
  return `import { App } from 'vue'
import ${componentName} from './src/${name}'

export { ${componentName} }

export default {
  install(app: App) {
    app.component(${componentName}.name, ${componentName})
  }
}
`
}
