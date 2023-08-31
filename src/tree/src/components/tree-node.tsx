import { defineComponent, inject, ref, toRefs } from 'vue'
import { treeNodeProps, TreeNodeProps } from '../tree-node-type'
import { IInnerTreeNode } from '../tree-type'
import { TreeUtils } from '../composables/use-tree-type'

const NODE_IDENT = 24
const NODE_HEIGHT = 28

export default defineComponent({
  name: 'YTreeNode',
  props: treeNodeProps,
  setup(props: TreeNodeProps, { slots }) {
    const { lineable, checkable, treeNode, operable, dragdrop } = toRefs(props)
    const {
      toggleCheckNode,
      getChildrenExpanded,
      append,
      remove,
      onDrop,
      onDragStart,
      onDragEnd,
      onDragOver,
      onDragLeave
    } = inject('TREE_UTILS') as TreeUtils
    // 创建一个开关变量
    const isShow = ref(false)
    const toggleOperate = () => {
      if (isShow.value) {
        isShow.value = false
      } else {
        isShow.value = true
      }
    }

    // 构造 drag 属性对象
    let dragDropProps = Object.create(null)
    if (dragdrop.value) {
      dragDropProps = {
        draggable: true,
        onDrop: (event: DragEvent) => onDrop(event, treeNode.value),
        onDragstart: (event: DragEvent) => onDragStart(event, treeNode.value),
        onDragend: (event: DragEvent) => onDragEnd(event),
        onDragover: (event: DragEvent) => onDragOver(event),
        onDragleave: (event: DragEvent) => onDragLeave(event)
      }
    }

    return () => (
      <div
        class="s-tree-node s-tree__node"
        style={{
          paddingLeft: `${NODE_IDENT * (treeNode.value.level - 1)}px`
        }}
        // 控制操作按钮显示
        onMouseenter={toggleOperate}
        onMouseleave={toggleOperate}
      >
        {/* 连接线 */}
        {lineable.value &&
          !treeNode.value.isLeaf &&
          treeNode.value.expanded && (
            <span
              class="s-tree-node__vline"
              style={{
                height: `${
                  NODE_HEIGHT * getChildrenExpanded(treeNode.value).length
                }px`,
                left: `${NODE_IDENT * (treeNode.value.level - 1)}px`,
                top: `${NODE_HEIGHT}px`
              }}
            ></span>
          )}

        <div class="s-tree__node--content" {...dragDropProps}>
          {/* 折叠图标 */}
          {treeNode.value.isLeaf ? (
            <b style={{ display: 'inline-block', width: '25px' }}></b>
          ) : (
            slots.icon!()
          )}
          {/* 复选框 */}
          {checkable.value && (
            <input
              type="checkbox"
              v-model={treeNode.value.checked}
              onClick={() => toggleCheckNode(treeNode.value)}
            ></input>
          )}
          {/* 标签 */}
          {slots.content!(treeNode)}
          {/* 节点增删操作 */}
          {operable.value && isShow.value && (
            <span class="inline-tree-node__operate">
              <b
                onClick={() =>
                  append(treeNode.value, { label: '新节点' } as IInnerTreeNode)
                }
              >
                +
              </b>
              <b onClick={() => remove(treeNode.value)}>-</b>
            </span>
          )}
          {/* loading 状态显示 */}
          {treeNode.value.loading && slots.loading!()}
        </div>
      </div>
    )
  }
})
