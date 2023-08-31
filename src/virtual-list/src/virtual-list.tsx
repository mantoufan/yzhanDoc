import { defineComponent, onMounted, onUnmounted, toRefs, useSlots } from 'vue'
import { virtualListProps, VirtualListProps } from './virtual-list-type'
import { computed, ref } from 'vue'
import '../style/virtual-list.scss'

// 1. data 传入
// 2. container Height 高度自适应
// 3. itemHeight 传入
export default defineComponent({
  name: 'YVirtualList',
  props: virtualListProps,
  emits: [],
  setup(props: VirtualListProps, { slots }) {
    const { data, itemHeight, component: Component } = toRefs(props)
    const containerRef = ref()
    const containerHeight = ref(0) // 容器高度

    // 1. 滚动条位置 scrollTop
    // 起始索引
    const startIndex = ref(0)

    // 显示的列表项数量
    const visibleCount = computed(() =>
      Math.ceil(containerHeight.value / itemHeight.value)
    )

    // 可视区域的数据
    const visibleData = computed(() =>
      data.value.slice(
        startIndex.value,
        Math.min(startIndex.value + visibleCount.value, data.value.length)
      )
    )

    onMounted(() => {
      containerHeight.value = containerRef.value.clientHeight
    })

    // 监控滚动事件，动态改变 startIndex
    // 列表在 Y 轴的偏移量
    const offsetY = ref(0)
    const scrollEvent = (event: UIEvent) => {
      const { scrollTop } = event.target as HTMLElement
      // 当 scrollTop 发生变化，重新计算 startIndex
      // 如果 startIndex 发生变化，依赖它的 visibleData 也就动态变化
      startIndex.value = Math.floor(scrollTop / itemHeight.value)
      // 改变列表元素在 Y 轴的偏移量
      offsetY.value = scrollTop - (scrollTop % itemHeight.value)
    }

    return () => {
      return (
        <Component.value
          class="s-virtual-list__container"
          ref={containerRef}
          onScroll={scrollEvent}
        >
          {/* 数据最终高度，用于展示滚动条 */}
          <div
            class="s-virtual-list__blank"
            style={{
              height: `${data.value.length * itemHeight.value}px`
            }}
          ></div>
          {/* 真正的数据列表 */}
          <div
            class="s-virtual-list"
            style={{
              transform: `translate3d(0, ${offsetY.value}px, 0)`
            }}
          >
            {visibleData.value.map((item, index) =>
              slots.default?.({ item, index })
            )}
          </div>
        </Component.value>
      )
    }
  }
})
