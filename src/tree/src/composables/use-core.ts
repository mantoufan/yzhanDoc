import { Ref, computed } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCore } from './use-tree-type'

export function useCore(innerData: Ref<IInnerTreeNode[]>): IUseCore {
  // 获取展开的节点列表
  const expandedTree = computed(() => {
    let excludedNodes: IInnerTreeNode[] = [] // 应该排除的节点列表
    const result = []

    // 循环列表，找出那些 没有展开的节点（1. 没有子节点 2. 有但是折叠的节点）
    const n = innerData.value.length
    for (let index = 0; index < n; index++) {
      const item = innerData.value[index]
      // 如果遍历节点在排除列表中，直接跳出本次循环
      if (excludedNodes.includes(item)) {
        continue
      }

      // 当前节点处于折叠状态，它的子节点应该被排除
      if (item.expanded === false || item.expanded === void 0) {
        excludedNodes = getChildren(item, index)
      }
      result.push(item)
    }
    return result
  })

  const getDirectChildren = (node: IInnerTreeNode): IInnerTreeNode[] => {
    return getChildren(node, void 0, true)
  }

  const getChildren = (
    node: IInnerTreeNode,
    startIndex: number | undefined = void 0,
    isDirect = false
  ): IInnerTreeNode[] => {
    if (startIndex === void 0) {
      startIndex = innerData.value.findIndex(n => n.id === node.id)
    }
    const result = []
    // 找到 startIndex 后面所有的子节点（level 比当前节点大的节点）
    for (
      let i = startIndex + 1;
      i < innerData.value.length && node.level < innerData.value[i].level;
      i++
    ) {
      if (isDirect === false) {
        result.push(innerData.value[i])
      } else if (node.level === innerData.value[i].level - 1) {
        result.push(innerData.value[i])
      }
    }
    return result
  }

  // 获取展开的子节点
  const getChildrenExpanded = (node: IInnerTreeNode): IInnerTreeNode[] => {
    const result = []
    const directChildren = getDirectChildren(node)
    result.push(...directChildren)
    for (const child of directChildren) {
      if (child.expanded === true) {
        result.push(...getChildrenExpanded(child))
      }
    }
    return result
  }

  const getIndex = (node: IInnerTreeNode): number => {
    if (node === null) return -1
    return innerData.value.findIndex(n => n.id === node.id)
  }

  const getNode = (node: IInnerTreeNode) => {
    return innerData.value.find(n => n.id === node.id)
  }

  const getParent = (node: IInnerTreeNode) => {
    return innerData.value.find(n => n.id === node.parentId)
  }

  return {
    expandedTree,
    getChildren,
    getDirectChildren,
    getChildrenExpanded,
    getIndex,
    getNode,
    getParent
  }
}
