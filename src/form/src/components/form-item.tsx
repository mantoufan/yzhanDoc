import {
  ComputedRef,
  computed,
  defineComponent,
  inject,
  onMounted,
  onUnmounted,
  provide,
  ref
} from 'vue'
import { formItemProps, FormItemProps, LabelData } from './form-item-type'
import './form-item.scss'
import { FormContextToken } from '../form-type'
import Validator from 'async-validator'

export default defineComponent({
  name: 'YFormItem',
  props: formItemProps,
  setup(props: FormItemProps, { slots }) {
    // 注入 label_data , 然后生成动态样式
    const labelData = inject('LABEL_DATA') as ComputedRef<LabelData>
    const itemClasses = computed(() => ({
      's-form__item': true,
      's-form__item--horizontal': labelData.value.layout === 'horizontal',
      's-form__item--vertical': labelData.value.layout === 'vertical'
    }))

    // 必须是水平方式排列下面两个属性生效
    // labelSize 和 labelAlign
    const labelClasses = computed(() => ({
      's-form__label': true,
      's-form__label--vertical': labelData.value.layout === 'vertical',
      [`s-form__label--${labelData.value.labelSize}`]:
        labelData.value.layout === 'horizontal',
      [`s-form__label--${labelData.value.labelAlign}`]:
        labelData.value.layout === 'horizontal'
    }))

    // 实现一个 validate 方法并提供给下级
    // 校验：需要数据和校验规则，它们是由 form 提供的
    const formCtx = inject(FormContextToken)
    const showMessage = ref(false)
    const errorMessage = ref('')

    const validate = () => {
      if (
        formCtx === void 0 ||
        props.field === void 0 ||
        formCtx.rules === void 0
      )
        return Promise.resolve({ result: true })
      const itemRules = formCtx.rules[props.field]
      if (itemRules === void 0) return Promise.resolve({ result: true })
      // 获取校验规则和数值
      const value = formCtx.model[props.field]
      // 执行校验并返回结果
      // 创建一个校验实例
      const validator = new Validator({ [props.field]: itemRules })
      return validator.validate({ [props.field]: value }, errors => {
        if (errors) {
          // 校验失败，显示错误信息
          showMessage.value = true
          errorMessage.value = errors[0].message || '校验错误'
        } else {
          // 校验通过，清空错误信息
          showMessage.value = false
          errorMessage.value = ''
        }
      })
    }

    const formItemCtx = {
      validate
    }

    provide('FORM_ITEM_CTX', formItemCtx)

    // 挂载后注册到 FormCtx 中
    onMounted(() => {
      if (props.field) formCtx?.addItem(formItemCtx)
    })

    onUnmounted(() => {
      if (props.field) formCtx?.removeItem(formItemCtx)
    })

    // s-form__item, s-form__item--horizontal
    return () => (
      <div class={itemClasses.value}>
        {/* label */}
        <span class={labelClasses.value}>{props.label}</span>
        {/* control */}
        {slots.default?.()}
        {/* error message */}
        {showMessage.value && (
          <div class="s-form__error">{errorMessage.value}</div>
        )}
      </div>
    )
  }
})
