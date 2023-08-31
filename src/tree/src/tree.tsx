import { defineComponent, provide, toRefs, SetupContext } from 'vue'
import { IInnerTreeNode, TreeProps, treeProps } from './tree-type'
import { useTree } from './composables/use-tree'
import YTreeNode from './components/tree-node'
import YTreeNodeToggle from './components/tree-node-toggle'
import YVirtualList from '../../virtual-list/src/virtual-list'
import '../style/tree.scss'

export default defineComponent({
  name: 'YTree',
  props: treeProps,
  emits: ['lazy-load'],
  setup(props: TreeProps, context: SetupContext) {
    const { data, height, itemHeight } = toRefs(props)
    const { slots } = context
    const {
      expandedTree,
      toggleNode,
      getChildrenExpanded,
      toggleCheckNode,
      append,
      remove,
      onDrop,
      onDragStart,
      onDragEnd,
      onDragOver,
      onDragLeave
    } = useTree(data, props, context)
    provide('TREE_UTILS', {
      toggleNode,
      toggleCheckNode,
      getChildrenExpanded,
      append,
      remove,
      onDrop,
      onDragStart,
      onDragEnd,
      onDragOver,
      onDragLeave
    })
    return () => (
      <div class="s-tree">
        {height?.value ? (
          // 虚拟列表
          <div style={{ height: `${height.value}px` }}>
            <YVirtualList
              data={expandedTree.value}
              itemHeight={itemHeight.value}
            >
              {{
                default: ({ item: treeNode }: { item: IInnerTreeNode }) => (
                  <YTreeNode {...props} treeNode={treeNode}>
                    {{
                      content: () =>
                        slots.content
                          ? slots.content(treeNode)
                          : treeNode.label,
                      icon: () =>
                        slots.icon ? (
                          slots.icon({ nodeData: treeNode, toggleNode })
                        ) : (
                          <YTreeNodeToggle
                            expanded={!!treeNode.expanded}
                            onClick={() => toggleNode(treeNode)}
                          ></YTreeNodeToggle>
                        ),
                      loading: () =>
                        slots.loading ? (
                          slots.loading({ nodeData: treeNode })
                        ) : (
                          <span> loading... </span>
                        )
                    }}
                  </YTreeNode>
                )
              }}
            </YVirtualList>
          </div>
        ) : (
          expandedTree.value.map(treeNode => (
            <YTreeNode {...props} treeNode={treeNode}>
              {{
                content: () =>
                  slots.content ? slots.content(treeNode) : treeNode.label,
                icon: () =>
                  slots.icon ? (
                    slots.icon({ nodeData: treeNode, toggleNode })
                  ) : (
                    <YTreeNodeToggle
                      expanded={!!treeNode.expanded}
                      onClick={() => toggleNode(treeNode)}
                    ></YTreeNodeToggle>
                  ),
                loading: () =>
                  slots.loading ? (
                    slots.loading({ nodeData: treeNode })
                  ) : (
                    <span> loading... </span>
                  )
              }}
            </YTreeNode>
          ))
        )}
      </div>
    )
  }
})
