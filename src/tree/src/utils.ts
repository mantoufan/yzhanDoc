import { IInnerTreeNode, ITreeNode } from './tree-type'

export function generateInnerTree(
  tree: ITreeNode[],
  level = 0, // 表示当前节点所处层级
  parentId = '' // 表示当前节点的父节点
): IInnerTreeNode[] {
  level++
  return tree.reduce((prev, cur) => {
    const o = { ...cur } as IInnerTreeNode
    o.level = level

    if (parentId !== '') {
      o.parentId = parentId
    }

    // 判断 cur 是否存在 children 属性，如果存在，则递归遍历
    if (o.children) {
      const children = generateInnerTree(o.children, level, o.id)
      o.expanded = true
      delete o.children
      return prev.concat(o, children)
    } else {
      // 叶子节点
      // 如果是懒加载，isLeaf 会被设置为 false，不需要置为 true
      if (o.isLeaf === void 0) o.isLeaf = true
      return prev.concat(o)
    }
  }, [] as IInnerTreeNode[])
}
