import { Ref, SetupContext } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import { IUseCore, IUseLazyLoad, IUseToggle } from './use-tree-type'

export function useToggle(
  innerData: Ref<IInnerTreeNode[]>,
  core: IUseCore,
  context: SetupContext,
  lazyLoad: IUseLazyLoad
): IUseToggle {
  const { lazyLoadNodes } = lazyLoad
  const toggleNode = (treeNode: IInnerTreeNode) => {
    treeNode.expanded = !treeNode.expanded
    if (treeNode.expanded) {
      // 节点懒加载
      lazyLoadNodes(treeNode)
    }
  }

  return {
    toggleNode
  }
}
