import { ref, Ref, SetupContext, unref } from 'vue'
import { ITreeNode, TreeProps } from '../tree-type'
import { generateInnerTree } from '../utils'
import { useCore } from './use-core'
import { useCheck } from './use-check'
import { useToggle } from './use-toggle'
import { useOperate } from './use-operate'
import { TreeUtils } from './use-tree-type'
import { useLazyLoad } from './use-lazy-load'
import { useDragDrop } from './use-drag-drop'

export function useTree(
  node: Ref<ITreeNode[]> | ITreeNode[],
  treeProps: TreeProps,
  context: SetupContext
): TreeUtils {
  const innerData = ref(generateInnerTree(unref(node)))
  const core = useCore(innerData)
  const plugins = [useToggle, useCheck, useOperate]
  const lazyLoad = useLazyLoad(innerData, core, context)
  const dragDropPlugin = useDragDrop(treeProps.dragdrop, innerData, core)
  // 聚合插件
  const pluginMethods = plugins.reduce((acc, plugin) => {
    return { ...acc, ...plugin(innerData, core, context, lazyLoad) }
  }, Object.create(null))

  return {
    ...core,
    ...pluginMethods,
    ...dragDropPlugin,
    treeData: innerData
  } as TreeUtils
}
