import { defineComponent, toRefs } from 'vue'
import { modalProps, ModalProps } from './modal-type'
import BaseModal from './components/base-modal'
import '../style/modal.scss'

export default defineComponent({
  name: 'YModal',
  props: modalProps,
  emits: ['update:modelValue'],
  setup(props: ModalProps, { slots, emit }) {
    const { modelValue, title, showClose, width, center, alignCenter } =
      toRefs(props)
    // 动态设置居中样式
    const alignCenterStyle = alignCenter?.value
      ? {
          marginTop: 0,
          top: '50%',
          transform: 'translateY(-50%)'
        }
      : null

    return () => (
      <BaseModal
        class="s-modal"
        modelValue={modelValue.value}
        onUpdate:modelValue={() => emit('update:modelValue')}
      >
        <div
          class="s-modal__container"
          style={{ width: width.value, ...alignCenterStyle }}
        >
          {/* 标题区 title */}
          {slots.header ? (
            slots.header?.({
              close: () => emit('update:modelValue', false)
            })
          ) : (
            <div
              class="s-modal__header"
              style={{ textAlign: center.value ? 'center' : 'left' }}
            >
              {title.value}
              {showClose.value && (
                <span
                  class="s-modal__close"
                  onClick={() => emit('update:modelValue', false)}
                >
                  X
                </span>
              )}
            </div>
          )}
          {/* 内容区 default */}
          <div class="s-modal__body">{slots.default?.()}</div>
          {/* 操作区 footer */}
          <div class="s-modal__footer">{slots.footer?.()}</div>
        </div>
      </BaseModal>
    )
  }
})
