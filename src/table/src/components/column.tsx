import { Ref, defineComponent, inject, nextTick, ref, toRefs, watch } from 'vue'
import { ColumnContext, columnProps, ColumnProps } from './column-type'

export default defineComponent({
  name: 'YColumn',
  props: columnProps,
  setup(props: ColumnProps) {
    const { field, header, type } = toRefs(props)
    // 将列数据传给 Table 组件
    const columnData = inject<Ref<ColumnContext[]>>('column-data')
    columnData!.value.push({
      field: field.value,
      header: header.value,
      type: type.value
    })
    // 定义一个响应式变量，它的值来自父组件
    const allChecked = inject<Ref<boolean>>('all-checked')

    // 定义一个半选状态，它的值从父组件传入
    const isIndeterminate = inject<Ref<boolean>>('is-indeterminate')
    const checkboxRef = ref()

    nextTick(() => {
      if (checkboxRef.value) {
        checkboxRef.value.indeterminate = isIndeterminate!.value
      }
    })

    watch(
      isIndeterminate!,
      () => {
        if (checkboxRef.value === void 0) return
        checkboxRef.value.indeterminate = isIndeterminate!.value
      },
      {
        immediate: true
      }
    )

    return () => (
      <th>
        {type.value === 'selection' ? (
          <input
            type="checkbox"
            ref={checkboxRef}
            v-model={allChecked!.value}
          />
        ) : (
          header.value
        )}
      </th>
    )
  }
})
