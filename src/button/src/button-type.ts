import { ExtractPropTypes, PropType } from 'vue'

export type IButtonType = 'primary' | 'secondary' | 'text'
export type IButtonSize = 'small' | 'medium' | 'large'

// button中的props定义
export const buttonProps = {
  type: {
    type: String as PropType<IButtonType>,
    default: 'secondary'
  },
  size: {
    type: String as PropType<IButtonSize>,
    default: 'medium'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  tag: {
    type: String as PropType<keyof HTMLElementTagNameMap>,
    default: 'button'
  },
  loading: {
    type: Boolean,
    default: false
  },
  attrType: {
    type: String as PropType<'button' | 'submit' | 'reset'>,
    default: 'button'
  }
}

// 利用值反推出Button属性类型
export type ButtonProps = ExtractPropTypes<typeof buttonProps>
