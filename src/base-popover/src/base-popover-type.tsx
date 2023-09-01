import { Placement } from '@floating-ui/dom'
import { DefineComponent, ExtractPropTypes, PropType } from 'vue'

export const basePopoverProps = {
  modelValue: {
    type: Boolean,
    default: false
  },
  host: {
    type: Object as PropType<HTMLElement | DefineComponent>,
    default: () => null
  },
  showArrow: {
    type: Boolean,
    default: false
  },
  placement: {
    type: String as PropType<Placement>
  }
} as const

export type BasePopoverProps = ExtractPropTypes<typeof basePopoverProps>
