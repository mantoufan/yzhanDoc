import { defineComponent, inject } from 'vue'
import { inputProps, InputProps } from './input-type'
import './input.scss'
import { FormItemContext } from '../../form/src/components/form-item-type'

export default defineComponent({
  name: 'YInput',
  props: inputProps,
  emits: ['update:modelValue'],
  setup(props: InputProps, { emit }) {
    const formItem = inject('FORM_ITEM_CTX') as FormItemContext

    const onInput = (e: Event) => {
      const val = (e.target as HTMLInputElement).value
      emit('update:modelValue', val)
      formItem.validate()
    }
    return () => (
      <div class="s-input__wrapper">
        <input
          class="s-input_input"
          value={props.modelValue}
          onInput={onInput}
          type={props.type}
        ></input>
      </div>
    )
  }
})
