import { Ref, defineComponent, inject } from 'vue'

export default defineComponent({
  name: 'YTab',
  props: {
    id: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    noadd: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots }) {
    // 获取当前激活项
    const activeTab = inject('active-tab') as Ref<string>
    // 获取 tabsData, 并将自身数据插入其中
    const tabsData = inject('tabs-data') as Ref<
      Array<{ id: string; title: string }>
    >
    if (props.noadd === false)
      tabsData.value.push({ id: props.id, title: props.title })
    return () =>
      props.id === activeTab.value && (
        <div class="s-tab">{slots.default?.()}</div>
      )
  }
})
