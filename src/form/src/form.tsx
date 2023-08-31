import { computed, defineComponent, provide } from 'vue'
import { FormContextToken, formProps, FormProps } from './form-type'
import { FormItemContext } from './components/form-item-type'
import formItem from './components/form-item'
import { Values } from 'async-validator'

export default defineComponent({
  name: 'YForm',
  props: formProps,
  emits: ['submit'],
  setup(props: FormProps, { slots, emit, expose }) {
    // 向下提供 label_data
    const labelData = computed(() => ({
      layout: props.layout,
      labelSize: props.labelSize,
      labelAlign: props.labelAlign
    }))
    provide('LABEL_DATA', labelData)

    // 提供一个 Set 存放待校验的 items
    const formItems = new Set<FormItemContext>()
    const addItem = (item: FormItemContext) => formItems.add(item)
    const removeItem = (item: FormItemContext) => formItems.delete(item)

    // 提供表单的上下文给后代使用
    provide(FormContextToken, {
      model: props.model,
      rules: props.rules,
      addItem,
      removeItem
    })

    const submit = (event: Event) => {
      event.preventDefault()
      emit('submit')
    }

    // 表单的全局校验方法
    const validate = (callback: (vaild: boolean) => void) => {
      const tasks: Array<Promise<Values>> = []
      formItems.forEach(item => tasks.push(item.validate()))
      Promise.all(tasks)
        .then(() => callback(true))
        .catch(() => callback(false))
    }

    expose({
      validate
    })

    return () => (
      <form class="s-form" onSubmit={submit}>
        {slots.default?.()}
      </form>
    )
  }
})
