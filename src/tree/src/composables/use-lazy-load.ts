import { Ref, SetupContext, ref } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCore, IUseLazyLoad, LazyNodeResults } from './use-tree-type'
import { generateInnerTree } from '../utils'

export function useLazyLoad(
  innerData: Ref<IInnerTreeNode[]>,
  { getNode, getIndex, getChildren }: IUseCore,
  { emit }: SetupContext
): IUseLazyLoad {
  // 接收父节点，派发事件，外部调用异步方法获取数据，传入回调函数
  const lazyLoadNodes = (node: IInnerTreeNode) => {
    const innerNode = getNode(node)
    // 判断是否需要懒加载节点
    if (
      innerNode !== void 0 &&
      innerNode.isLeaf === false &&
      innerNode.childNodeCount === void 0
    ) {
      innerNode.loading = true
      // 派发事件，让外部加载数据
      emit('lazy-load', node, dealChildNodes)
    }
  }

  // 用户获取子节点数据之后，调用该函数
  const dealChildNodes = (result: LazyNodeResults) => {
    // 获取父节点
    const node = getNode(result.node)
    if (node !== void 0) {
      // 结束加载状态
      node.loading = false

      // 拍平操作
      const childNodes = ref<IInnerTreeNode[]>(
        generateInnerTree(result.treeItems, node.level)
      )

      // 处理子节点和父节点之间的关系
      setParentId(node, childNodes)
      insertChildren(node, childNodes)

      // 更新父节点孩子数量
      node.childNodeCount = getChildren(node).length
    }
  }

  // 设置子节点的 parentId 为父节点 id
  const setParentId = (
    node: IInnerTreeNode,
    childNodes: Ref<IInnerTreeNode[]>
  ) => {
    childNodes.value.forEach(child => {
      if (child.level - 1 === node.level && child.parentId === void 0) {
        child.parentId = node.id
      }
    })
  }

  // 追加异步获取的节点到原始数组中
  const insertChildren = (
    parent: IInnerTreeNode,
    childNodes: Ref<IInnerTreeNode[]>
  ) => {
    const parentIndex = getIndex(parent)
    if (parentIndex > -1) {
      innerData.value.splice(parentIndex + 1, 0, ...childNodes.value)
    }
  }

  return {
    lazyLoadNodes
  }
}
