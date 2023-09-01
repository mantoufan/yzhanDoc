import { defineComponent, toRefs } from 'vue'
import '../style/popover.scss'
import BasePopover from '../../base-popover/src/base-popover'
import { popoverProps, PopoverProps } from './popover-type'

export default defineComponent({
  name: 'YPopover',
  props: popoverProps,
  emits: ['update:modelValue'],
  setup(props: PopoverProps, { slots }) {
    // 获取属性中的关键值
    const { modelValue, title } = toRefs(props)

    return () => (
      <>
        {modelValue.value && (
          <BasePopover class="s-popover" {...props}>
            <h4 class="s-popover__title">{title.value}</h4>
            {slots.default?.()}
          </BasePopover>
        )}
      </>
    )
  }
})
