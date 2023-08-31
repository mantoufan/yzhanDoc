import { computed, defineComponent, toRefs } from 'vue'
import { getCenterPage } from '../utils'
import { pagerProps, PagerProps } from './pager-type'
import usePage from '../composable/use-page'

export default defineComponent({
  name: 'YPager',
  props: pagerProps,
  setup(props: PagerProps) {
    const { total, pageSize, pagerCount } = toRefs(props)
    const totalPage = computed(() => Math.ceil(total.value / pageSize.value))
    const { pageIndex, setPageIndex, jumpPage, prevPage, nextPage } = usePage()
    const centerPages = computed(() =>
      getCenterPage(totalPage.value, pageIndex.value, pagerCount.value)
    )

    return {
      totalPage,
      pageIndex,
      setPageIndex,
      jumpPage,
      prevPage,
      nextPage,
      centerPages
    }
  },
  render() {
    const {
      pagerCount,
      totalPage,
      pageIndex,
      setPageIndex,
      jumpPage,
      centerPages
    } = this
    return (
      <ul class="s-pager">
        <li
          onClick={() => setPageIndex(1)}
          class={{ current: pageIndex === 1 }}
        >
          1
        </li>
        {/* 1. 总页码 totalPage 大于按钮数量 pagerCount */}
        {totalPage > pagerCount && pageIndex > Math.ceil(pagerCount / 2) && (
          <li class="more left" onClick={() => jumpPage(-5)}>
            ...
          </li>
        )}
        {/* 总页码 totalPage 当前页码 pageIndex 最大显示页码数 pageCount */}
        {centerPages.map(page => (
          <li
            class={pageIndex === page ? 'current' : ''}
            onClick={() => setPageIndex(page)}
          >
            {page}
          </li>
        ))}
        {totalPage > pagerCount &&
          pageIndex < totalPage - Math.ceil(pagerCount / 2) + 1 && (
            <li class="more right" onClick={() => jumpPage(5)}>
              ...
            </li>
          )}
        {totalPage > 1 && (
          <li
            onClick={() => setPageIndex(totalPage)}
            class={{ current: pageIndex === totalPage }}
          >
            {totalPage}
          </li>
        )}
      </ul>
    )
  }
})
