import { Ref, computed, reactive } from 'vue'
import { IInnerTreeNode } from '../tree-type'
import {
  DragState,
  IDragdrop,
  IDropType,
  IUseCore,
  IUseDraggable
} from './use-tree-type'

const dropTypeMap = {
  dropPrev: 's-tree__node--drop-prev',
  dropNext: 's-tree__node--drop-next',
  dropInner: 's-tree__node--drop-inner'
}

export function useDragDrop(
  dragdrop: IDragdrop,
  data: Ref<IInnerTreeNode[]>,
  { getChildren, getParent }: IUseCore
): IUseDraggable {
  const dragState = reactive<DragState>({
    dropType: undefined,
    draggingNode: null,
    draggingTreeNode: null
  })
  // 将树节点数据数组转换为 id:node 的 map
  const treeIdMapValue = computed<Record<string | number, IInnerTreeNode>>(
    () => {
      return data.value.reduce(
        (acc, cur) => ({
          ...acc,
          [cur.id!]: cur
        }),
        Object.create(null)
      )
    }
  )

  const removeDraggingStyle = (target: HTMLElement | null) => {
    target?.classList.remove(...Object.values(dropTypeMap))
  }

  // 判断 childNodeId 节点是否是 parentNodeId 节点的子孙节点
  const checkIsParent = (
    childNodeId: number | string,
    parentNodeId: number | string
  ): boolean => {
    const realParentId = treeIdMapValue.value[childNodeId]?.parentId
    if (realParentId === parentNodeId) {
      return true
    } else if (realParentId !== undefined) {
      return checkIsParent(realParentId, parentNodeId)
    } else {
      return false
    }
  }

  const resetDragState = () => {
    dragState.dropType = undefined
    dragState.draggingNode = null
    dragState.draggingTreeNode = null
  }

  // 拖拽起始
  const onDragStart = (event: DragEvent, treeNode: IInnerTreeNode): void => {
    event.stopPropagation()
    dragState.draggingNode = event.target as HTMLElement | null
    dragState.draggingTreeNode = treeNode
    // 将正在拖拽的数据节点 id 存入 dataTransfer，未来需要在 drop 的时候取出来
    event.dataTransfer?.setData('dragNodeId', treeNode.id!)
  }

  const onDragOver = (event: DragEvent): void => {
    event.preventDefault()
    event.stopPropagation()
    if (dragState.draggingNode === void 0) return
    if (dragdrop) {
      if (event.dataTransfer) {
        event.dataTransfer.dropEffect = 'move'
      }

      if (!data) {
        return
      }
      let curDropType: IDropType = {}
      if (typeof dragdrop === 'object') {
        curDropType = dragdrop
      } else if (dragdrop) {
        curDropType = { dropInner: true }
      }
      const { dropPrev, dropNext, dropInner } = curDropType

      let innerDropType: DragState['dropType']
      //所占比小于0.25为dropPrev，大于0.75为dropNext，0.25~0.75之间为dropInner
      const prevPercent = dropPrev
        ? dropInner
          ? 0.25
          : dropNext
          ? 0.45
          : 1
        : -1
      const nextPercent = dropNext
        ? dropInner
          ? 0.75
          : dropPrev
          ? 0.55
          : 0
        : 1
      const currentTarget = event.currentTarget as HTMLElement | null
      const targetPosition = currentTarget?.getBoundingClientRect()
      const distance = event.clientY - (targetPosition?.top || 0)
      //根据当前鼠标和经过节点上边框的距离判定用户当前的操作是dropInner，dropPrev还是dropNext
      if (distance < (targetPosition?.height || 0) * prevPercent) {
        innerDropType = 'dropPrev'
      } else if (distance > (targetPosition?.height || 0) * nextPercent) {
        innerDropType = 'dropNext'
      } else if (dropInner) {
        innerDropType = 'dropInner'
      } else {
        innerDropType = undefined
      }
      //根据当前拖拽操作的类型给dropNode添加反馈样式
      if (innerDropType) {
        const classList = currentTarget?.classList
        if (classList) {
          if (!classList.contains(dropTypeMap[innerDropType])) {
            removeDraggingStyle(currentTarget)
            classList.add(dropTypeMap[innerDropType])
          }
        }
      } else {
        removeDraggingStyle(currentTarget)
      }
      dragState.dropType = innerDropType
    }
  }

  const onDragLeave = (event: DragEvent): void => {
    event.stopPropagation()
    if (dragState.draggingNode === void 0) return
    removeDraggingStyle(event.currentTarget as HTMLElement | null)
  }

  // 释放事件回调
  const onDrop = (event: DragEvent, dropNode: IInnerTreeNode): void => {
    event.preventDefault()
    event.stopPropagation()
    removeDraggingStyle(event.currentTarget as HTMLElement | null)
    if (dragState.draggingNode === void 0 || dragdrop === void 0) return
    // 获取正在拖拽的树节点 ID
    const dragNodeId = event.dataTransfer?.getData('dragNodeId')
    if (dragNodeId !== void 0) {
      // 判断拖拽操作时嵌套，还是放入前后（排序）
      // 判断释放节点是否是拖拽的节点的子节点
      const isParent = checkIsParent(dropNode.id!, dragNodeId)
      // 如果拖拽和释放时同一节点或者父子关系则跳出
      if (dragNodeId === dropNode.id || isParent) return
      // 判断当前释放类型：dropPrev, dropNext, dropInner
      if (dragState.dropType) handleDrop(dragNodeId, dropNode)
      resetDragState()
    }
  }
  // 释放之后的节点操作
  const handleDrop = (dragNodeId: string, dropNode: IInnerTreeNode) => {
    // 获取正在拖拽的节点
    const dragNode = data.value.find(item => item.id === dragNodeId)
    if (dragNode !== void 0) {
      // 备份一个节点
      let cloneDragNode: IInnerTreeNode
      // 获取拖拽节点的子节点
      const cihldrenOfDragNode = getChildren(dragNode)
      // 获取拖拽节点的父节点
      const parentOfDragNode = getParent(dragNode)

      // 如果时嵌套释放的情况
      if (dragState.dropType === 'dropInner') {
        cloneDragNode = {
          ...dragNode,
          parentId: dropNode.id,
          level: dropNode.level + 1
        }
        // 插入克隆节点
        const dropNodeIndex = data.value.indexOf(dropNode)
        data.value.splice(dropNodeIndex + 1, 0, cloneDragNode)
        dropNode.isLeaf = void 0
        // 删除旧的拖拽节点
        const dragNodeIndex = data.value.indexOf(dragNode)
        data.value.splice(dragNodeIndex, 1)
      } else if (dragState.dropType === 'dropNext') {
        cloneDragNode = {
          ...dragNode,
          parentId: dropNode.parentId,
          level: dropNode.level
        }
        // 放置新节点之后
        const dropNodeIndex = data.value.indexOf(dropNode)
        const dropNodeChildrenLength = getChildren(
          dropNode,
          void 0,
          false
        ).length
        data.value.splice(
          dropNodeIndex + dropNodeChildrenLength + 1,
          0,
          cloneDragNode
        )
        // 删除旧节点
        const dragNodeIndex = data.value.indexOf(dragNode)
        data.value.splice(dragNodeIndex, 1)
      } else if (dragState.dropType === 'dropPrev') {
        cloneDragNode = {
          ...dragNode,
          parentId: dropNode.parentId,
          level: dropNode.level
        }
        // 放置新节点之前
        const dropNodeIndex = data.value.indexOf(dropNode)
        data.value.splice(dropNodeIndex, 0, cloneDragNode)
        // 删除旧节点
        const dragNodeIndex = data.value.indexOf(dragNode)
        data.value.splice(dragNodeIndex, 1)
      }

      // 对拖拽节点的子节点作递归处理，用 dropInner 的方式
      dragState.dropType = 'dropInner'
      cihldrenOfDragNode.forEach(child => handleDrop(child.id!, cloneDragNode))

      // 拖拽结束后，处理父节点的 isLeaf 状态
      if (parentOfDragNode) {
        if (getChildren(parentOfDragNode).length === 0) {
          parentOfDragNode.isLeaf = true
        }
      }
    }
  }

  const onDragEnd = (event: DragEvent): void => {
    event.preventDefault()
    event.stopPropagation()
    resetDragState()
  }

  return {
    onDragStart,
    onDragOver,
    onDragLeave,
    onDrop,
    onDragEnd
  }
}
