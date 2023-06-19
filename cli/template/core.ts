import { upperFirst } from './utils'

export default function genCoreTemplate(name: string) {
  const calssName = 's-' + name
  const ComponentName = 'S' + upperFirst(name)
  const propsTypeName = upperFirst(name) + 'Props'
  const propsName = name + 'Props'
  const propsFileName = name + '-type'
  return `import { defineComponent, toRefs } from 'vue'
import { ${propsTypeName}, ${propsName} } from './${propsFileName}'
export default defineComponent({
  name: '${ComponentName}',
  props: ${propsName},
  setup(props: ${propsTypeName}) {
    return () => {
      <div class="${calssName}"></div>
    }
  }
})`
}
