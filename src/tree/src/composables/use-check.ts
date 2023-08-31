import { Ref } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCheck, IUseCore } from './use-tree-type'

export function useCheck(
  innerData: Ref<IInnerTreeNode[]>,
  { getChildren, getDirectChildren }: IUseCore
): IUseCheck {
  const toggleCheckNode = (node: IInnerTreeNode) => {
    // 避免初始化的时候，node 中有没有 checked 设置
    node.checked = !node.checked

    // 父 → 子联动
    // 获取子节点，并同步他们的选中状态和父节点一致
    getChildren(node).forEach(child => (child.checked = node.checked))

    // 子 → 父联动
    // 获取父节点，并同步他们的选中状态和子节点一致
    const parentNode = innerData.value.find(item => item.id === node.parentId)
    if (parentNode === void 0) return
    // 获取兄弟节点
    const directChildren = getDirectChildren(parentNode)
    parentNode.checked = directChildren.every(child => child.checked)
  }

  return {
    toggleCheckNode
  }
}
