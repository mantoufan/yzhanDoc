import { computed, defineComponent, onMounted, ref, watch } from 'vue'
import { PaginationProps, paginationProps } from './pagination-type'
import '../style/pagination.scss'
import YPager from './components/pager'

export default defineComponent({
  name: 'YPagination',
  props: paginationProps,
  emits: ['update:modelValue'],
  setup(props: PaginationProps, { emit }) {
    // 1. 首页和尾页是常在的，如果只有 1 页，则不显示
    // 2. 页码按钮有一个最大数量 pagerCount，上图是 7，也就是说最多显示 7 个页码按钮
    // 3. 如果总页码数 totalPage 大于 pagerCount，则会出现显示不下的情况，这时显示不
    // 下的部分用 ... 表示，并且这个 ... 是可以快速往前、往后跳转 N 页的
    // 4. 中间页码应该显示的页码按钮数量在 0 到 pagerCount - 2 之间
    // 5. 只有 2 页的情况下，中间页码数量为 0
    // 6. 大于或等于 pagerCount 的情况下，中间页码数量为 pagerCount - 2
    // 7. 当中间页码左边的页数大于 2 时，应出现左边的 ...
    // 8. 当中间页码右边的页数小于 totalPage - 3 时，应出现右边的 ...
    const pager = ref()
    const disablePrev = computed(() =>
      pager.value ? pager.value.pageIndex < 2 : true
    )
    const disableNext = computed(() =>
      pager.value ? pager.value.pageIndex > pager.value.totalPage - 1 : true
    )
    onMounted(() => {
      watch(
        () => pager.value.pageIndex,
        (newVal: number) => {
          emit('update:modelValue', newVal)
        }
      )
      watch(
        () => props.modelValue,
        (newVal: number) => {
          pager.value.pageIndex = newVal
        }
      )
    })
    return () => (
      <div class="s-pagination">
        <button
          disabled={disablePrev.value}
          onClick={() => pager.value.prevPage()}
        >
          上一页
        </button>
        {/* pager 部分 */}
        <YPager {...props} ref={pager} />
        <button
          disabled={disableNext.value}
          onClick={() => pager.value.nextPage()}
        >
          下一页
        </button>
      </div>
    )
  }
})
