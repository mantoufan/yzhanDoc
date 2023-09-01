import { defineComponent, provide, ref } from 'vue'
import YTab from './components/tab'
import '../style/tabs.scss'

export default defineComponent({
  name: 'YTabs',
  props: {
    modelValue: {
      type: String,
      default: ''
    },
    closable: {
      type: Boolean,
      default: false
    },
    addable: {
      type: Boolean,
      default: false
    }
  },
  emits: ['update:modelValue'],
  setup(props, { slots }) {
    // 模拟
    const tabsData = ref<
      Array<{ id: string; title: string; type?: 'random'; content?: string }>
    >([])
    provide('tabs-data', tabsData)
    // 激活 id
    const activeTab = ref(props.modelValue)
    provide('active-tab', activeTab)
    // 改变激活状态
    const changeTab = (tabId: string) => {
      activeTab.value = tabId
    }
    // 增加一个关闭方法
    const closeTab = (tabId: string) => {
      const tabIndex = tabsData.value.findIndex(
        (tab: { id: string; title: string }) => tab.id === tabId
      )
      tabsData.value.splice(tabIndex, 1)
    }
    // 增加一个 tab
    const addTab = () => {
      const id = Math.floor(Math.random() * 1000) + ''
      tabsData.value.push({
        id,
        type: 'random',
        title: 'New Tab',
        content: 'New Tab Content'
      })
      activeTab.value = id
    }
    return () => (
      <div class="s-tabs">
        {/* 导航页签 */}
        <ul class="s-tabs__nav">
          {tabsData.value.map((tab: { id: string; title: string }) => (
            <li
              onClick={() => changeTab(tab.id)}
              key={tab.id}
              class={tab.id === activeTab.value ? 'active' : ''}
            >
              {tab.title}
              {/* 关闭页签 */}
              {props.closable && (
                <span class="s-tabs__close" onClick={() => closeTab(tab.id)}>
                  ×
                </span>
              )}
            </li>
          ))}
          {/* 添加标签按钮 */}
          {props.addable && <li onClick={addTab}>+</li>}
        </ul>

        {/* 内容区 */}
        {slots.default?.()}

        {/* 显示新增的内容 */}
        {tabsData.value
          .filter(tab => tab.type === 'random')
          .map(tab => (
            <YTab key={tab.id} id={tab.id} title={tab.title} noadd>
              {tab.content}
            </YTab>
          ))}
      </div>
    )
  }
})
