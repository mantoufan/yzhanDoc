# 树 - Tree

## 基本用法
:::demo Tree 组件基本用法
```vue
<template>
  <YTree :data="data"></YTree>
</template> 
<script>
  export default {
    data() {
      return {
        data: [
          {
            label: "docs",
            id: "node-1",
          },
          {
            label: "packages",
            id: "node-2",
            children: [
              {
                label: "vite",
                id: "node-2-1",
                children: [
                  {
                    label: "README.md",
                    id: "node-2-1-1"
                  },
                ]
              },
              {
                label: "react",
                id: "node-2-2",
                children: [
                  {
                    label: "webpack.config.js",
                    id: "node-2-2-1"
                  },
                  {
                    label: "tsconfig.json",
                    id: "node-2-2-2"
                  },
                ]
              },
            ]
          },
          {
            label: "pnpm-workspace.yaml",
            id: "node-3",
          }
        ]
      }
    }
  }
</script>
```
:::

## 竖线

:::demo Tree 组件，竖线
```vue
<template>
  <YTree :data="data" lineable></YTree>
</template> 
<script>
  export default {
    data() {
      return {
        data: [
          {
            label: "docs",
            id: "node-1",
          },
          {
            label: "packages",
            id: "node-2",
            children: [
              {
                label: "vite",
                id: "node-2-1",
                children: [
                  {
                    label: "README.md",
                    id: "node-2-1-1"
                  },
                ]
              },
              {
                label: "react",
                id: "node-2-2",
                children: [
                  {
                    label: "webpack.config.js",
                    id: "node-2-2-1"
                  },
                  {
                    label: "tsconfig.json",
                    id: "node-2-2-2"
                  },
                ]
              },
            ]
          },
          {
            label: "pnpm-workspace.yaml",
            id: "node-3",
          }
        ]
      }
    }
  }
</script>
```
:::

## 复选框

:::demo 勾选功能，请设置 checkable 属性
```vue
<template>
  <YTree :data="data" checkable></YTree>
</template> 
<script>
  export default {
    data() {
      return {
        data: [
          {
            label: "docs",
            id: "node-1",
            checked: true
          },
          {
            label: "packages",
            id: "node-2",
            children: [
              {
                label: "vite",
                id: "node-2-1",
                children: [
                  {
                    label: "README.md",
                    id: "node-2-1-1"
                  },
                ]
              },
              {
                label: "react",
                id: "node-2-2",
                children: [
                  {
                    label: "webpack.config.js",
                    id: "node-2-2-1"
                  },
                  {
                    label: "tsconfig.json",
                    id: "node-2-2-2"
                  },
                ]
              },
            ]
          },
          {
            label: "pnpm-workspace.yaml",
            id: "node-3",
          }
        ]
      }
    }
  }
</script>
```
:::

## 自定义图标

:::demo 自定义图标，设置 icon 插槽
```vue
<template>
  <YTree :data="data">
    <template #icon="{nodeData, toggleNode}">
      <b @click="()=>toggleNode(nodeData)">{{nodeData.expanded ? '🔽' : '▶️'}}</b>
    </template>
    <template #content="treeNode">
      <b>{{treeNode.isLeaf ? '📄' : '📂'}}</b>{{treeNode.label}}
    </template>
  </YTree>
</template> 
<script>
  export default {
    data() {
      return {
        data: [
          {
            label: "docs",
            id: "node-1",
            checked: true
          },
          {
            label: "packages",
            id: "node-2",
            children: [
              {
                label: "vite",
                id: "node-2-1",
                children: [
                  {
                    label: "README.md",
                    id: "node-2-1-1"
                  },
                ]
              },
              {
                label: "react",
                id: "node-2-2",
                children: [
                  {
                    label: "webpack.config.js",
                    id: "node-2-2-1"
                  },
                  {
                    label: "tsconfig.json",
                    id: "node-2-2-2"
                  },
                ]
              },
            ]
          },
          {
            label: "pnpm-workspace.yaml",
            id: "node-3",
          }
        ]
      }
    }
  }
</script>
```
:::

## 操作节点

:::demo 操作节点
```vue
<template>
  <YTree :data="data" operable></YTree>
</template> 
<script>
  export default {
    data() {
      return {
        data: [
          {
            label: "docs",
            id: "node-1",
            checked: true
          },
          {
            label: "packages",
            id: "node-2",
            children: [
              {
                label: "vite",
                id: "node-2-1",
                children: [
                  {
                    label: "README.md",
                    id: "node-2-1-1"
                  },
                ]
              },
              {
                label: "react",
                id: "node-2-2",
                children: [
                  {
                    label: "webpack.config.js",
                    id: "node-2-2-1"
                  },
                  {
                    label: "tsconfig.json",
                    id: "node-2-2-2"
                  },
                ]
              },
            ]
          },
          {
            label: "pnpm-workspace.yaml",
            id: "node-3",
          }
        ]
      }
    }
  }
</script>
```
:::


## 节点懒加载
通过设置该节点 isLeaf 参数为 false，组件回调 lazyLoad 方法实现节点懒加载  
:::demo 通过设置该节点 isLeaf 参数为 false，组件回调 lazyLoad 方法实现懒加载
```vue
<template>
  <YTree :data="treeData" @lazy-load="lazyLoad"></YTree>
</template>

<script>
export default {
  data() {
    return {
      treeData: [
        {
          id: 'node-1',
          label: 'node-1',
          children: [
            {
              id: 'node-1-1',
              label: 'node 1-1 - dynamic loading',
              isLeaf: false,
            },
            {
              id: 'node-1-2',
              label: 'node 1-2'
            }
          ]
        },
        {
          id: 'node-2',
          label: 'node 2 - dynamic loading',
          isLeaf: false
        }
      ]
    };
  },
  methods: {
    lazyLoad(node, callback) {
      setTimeout(() => {
        const data = [
          {
            label: 'lazy node 1',
            expanded: true,
            children: [
              {
                id: 'lazy-node-1-1',
                label: 'lazy node 1-1'
              },
              {
                id: 'lazy-node-1-2',
                label: 'lazy node 1-2'
              }
            ]
          },
          {
            id: 'lazy-node-2',
            label: 'lazy node 2',
          }
        ]
        callback({
          treeItems: data,
          node
        })
      }, 1000);
    }
  }
};
</script>
```
:::

## 拖拽操作

:::demo 拖拽
```vue
<template>
  <h6><p>默认行为</p></h6>
  <YTree :data="data" dragdrop></YTree>
  <h6><p>排序</p></h6>
  <YTree :data="data" :dragdrop="{dropPrev: true, dropNext: true, dropInner: true}"></YTree>
</template>
<script>
  export default {
    data() {
      return {
        data: [
          {
            label: "docs",
            id: "node-1",
            checked: true
          },
          {
            label: "packages",
            id: "node-2",
            children: [
              {
                label: "vite",
                id: "node-2-1",
                children: [
                  {
                    label: "README.md",
                    id: "node-2-1-1"
                  },
                ]
              },
              {
                label: "react",
                id: "node-2-2",
                children: [
                  {
                    label: "webpack.config.js",
                    id: "node-2-2-1"
                  },
                  {
                    label: "tsconfig.json",
                    id: "node-2-2-2"
                  },
                ]
              },
            ]
          },
          {
            label: "pnpm-workspace.yaml",
            id: "node-3",
          }
        ]
      }
    }
  }
</script>
```
:::

## 虚拟滚动
通过 `height` 开启虚拟滚动，通过 `itemHeight` 设置项目高度
:::demo
```vue
<template>
  <YTree :data="data" :height="300" component="div" :itemHeight="30"></YTree>
</template>
<script lang="ts">
export default {
  data() {
    return {
      data: Array.from({ length: 1000 }, (_, index) => ({
        id: 'node' + index,
        label: 'node' + index
      }))
    }
  }
}
</script>
```