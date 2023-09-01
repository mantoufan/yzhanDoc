import { arrow, autoPlacement, computePosition, offset } from '@floating-ui/dom'
import { defineComponent, ref, nextTick, watch, toRefs, onUnmounted } from 'vue'
import { basePopoverProps, BasePopoverProps } from './base-popover-type'
import '../style/base-popover.scss'

export default defineComponent({
  name: 'YBasePopover',
  props: basePopoverProps,
  emits: ['update:modelValue'],
  setup(props: BasePopoverProps, { attrs, slots }) {
    // 获取属性中的关键值
    const { host, modelValue, showArrow, placement } = toRefs(props)
    // 这里做兼容处理：因为宿主元素可能是一个组件，也可能是一个 element
    // 如果是组件，要通过 $el 获取它的 dom 节点
    const hostRef =
      host.value instanceof HTMLElement ? host.value : host.value.$el
    // 箭头元素
    const arrowRef = ref()

    // 浮动元素
    const overlayRef = ref()

    // 计算定位
    const updatePosition = () => {
      const middleware = [] // 中间件
      // 如果设置显示箭头，从 @floating-ui 中添加 offset, arrow 中间件
      if (showArrow.value) {
        middleware.push(offset(8))
        middleware.push(arrow({ element: arrowRef.value }))
      }
      // 如果用户没有指定 placement，则自动调整定位
      if (placement.value === void 0) {
        middleware.push(autoPlacement())
      }

      computePosition(hostRef, overlayRef.value, {
        middleware,
        placement: placement.value ? placement.value : 'bottom'
      }).then(({ x, y, middlewareData, placement }) => {
        // 设置浮层样式
        Object.assign(overlayRef.value.style, {
          left: x + 'px',
          top: y + 'px'
        })
        if (showArrow.value) {
          const { x: arrowX, y: arrowY } = middlewareData.arrow!
          // 获取当前浮层所在位置
          const currentSide = placement.split('-')[0]
          // 根据浮层位置，确定箭头位置
          const arrowSide = {
            top: 'bottom',
            bottom: 'top',
            left: 'right',
            right: 'left'
          }[currentSide]

          // 找到应该设为透明的 border
          const SIDE = ['top', 'right', 'bottom', 'left']
          const prevIndex = SIDE.indexOf(currentSide) - 1
          const nextSide = SIDE[prevIndex < 0 ? SIDE.length - 1 : prevIndex]

          // 设置箭头样式
          Object.assign(arrowRef.value.style, {
            left: arrowX + 'px',
            top: arrowY + 'px',
            [arrowSide!]: '-4px',
            [`border-${currentSide}-color`]: 'transparent',
            [`border-${nextSide}-color`]: 'transparent'
          })
        }
      })
    }

    // 以下是两种需要重新计算浮层的情况
    // 创建 MutationObserver 监听宿主元素状态变化
    const mutationObserver = new MutationObserver(updatePosition)

    // 当 modelValue 变化时，重新计算浮层位置
    watch(
      modelValue,
      newVal => {
        // 当 newVal 为 true，即 overlay 需要显示时，需要重新更新位置
        if (newVal) {
          nextTick(updatePosition)
          // 监听页面 resize, scorll 事件和 host 元素的尺寸、位置变化
          hostRef &&
            mutationObserver.observe(hostRef, {
              attributes: true
            })
          window.addEventListener('resize', updatePosition)
          window.addEventListener('scroll', updatePosition)
        } else {
          mutationObserver.disconnect()
          window.removeEventListener('resize', updatePosition)
          window.removeEventListener('scroll', updatePosition)
        }
      },
      {
        immediate: true // 初始化时，立即设置 immediate 为 true
      }
    )

    // 卸载时，清除副作用
    onUnmounted(() => {
      mutationObserver.disconnect()
      window.removeEventListener('resize', updatePosition)
      window.removeEventListener('scroll', updatePosition)
    })

    return () => (
      <>
        {modelValue.value && (
          <div ref={overlayRef} class="s-base-popover" {...attrs}>
            {/* 弹窗内容 */}
            {slots.default?.()}
            {/* 箭头元素 */}
            {showArrow.value && (
              <div ref={arrowRef} class="s-base-popover__arrow"></div>
            )}
          </div>
        )}
      </>
    )
  }
})
