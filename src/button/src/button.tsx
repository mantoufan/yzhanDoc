import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'
export default defineComponent({
  name: 'YButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size, disabled, block } = toRefs(props)
    const blockClass = block.value ? ' s-btn--block' : ''
    return () => {
      const defaultSolt = slots.default ? slots.default() : 'Button'
      return (
        <button
          disabled={disabled.value}
          class={`s-btn s-btn--${type.value} s-btn--${size.value}${blockClass}`}
        >
          {defaultSolt}
        </button>
      )
    }
  }
})
