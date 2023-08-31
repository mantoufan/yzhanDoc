import { Ref, ref } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCore, IUseOperate } from './use-tree-type'
import { randomId } from '../../../shared/utils'

export function useOperate(
  innerData: Ref<IInnerTreeNode[]>,
  { getChildren, getDirectChildren, getIndex }: IUseCore
): IUseOperate {
  // 添加节点
  const append = (parent: IInnerTreeNode, node: IInnerTreeNode) => {
    // 1. 获取 parent 的最后一个子节点
    const children = getDirectChildren(parent)
    const lastChild = children[children.length - 1]

    // 2. 确定未来插入新节点的未知索引：默认在 parent 后面
    let insertedIndex = -1
    if (lastChild === void 0) {
      insertedIndex = getIndex(parent) + 1
    } else {
      insertedIndex = getIndex(lastChild) + 1
    }
    // 保证 parent 展开，非叶子节点状态，保证看到新增节点
    parent.expanded = true
    parent.isLeaf = false

    // 新增节点初始化
    const currentNode = ref({
      ...node,
      level: parent.level + 1,
      parentId: parent.id,
      isLeaf: true
    })

    // 设置新增节点 ID
    if (currentNode.value.id === void 0) {
      currentNode.value.id = randomId()
    }

    // 插入新增节点
    innerData.value.splice(insertedIndex, 0, currentNode.value)
  }

  // 删除节点
  const remove = (node: IInnerTreeNode) => {
    const childrenIds = getChildren(node).map(nodeItem => nodeItem.id)
    // 过滤掉 node 和其子节点之外的节点
    innerData.value = innerData.value.filter(
      item => item.id !== node.id && !childrenIds.includes(item.id)
    )
  }

  return {
    append,
    remove
  }
}
