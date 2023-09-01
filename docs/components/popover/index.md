# Popover - 气泡

## 基础用法
通过`host`属性建立宿主与浮层之间的绑定关系
:::demo
```vue
<template>
  <div>
    <YButton ref="host" @click="open">host</YButton>
    <YPopover v-model="visible" :host="$refs.host" title="title" show-arrow>overlay</YPopover>
  </div>
 
</template>
<script>
export default {
  data() {
    return {
      visible: false
    }
  },
  methods: {
    open() {
      this.visible = !this.visible
    }
  }
}
</script>
```
:::

## 显示位置
通过设置`placement`属性控制浮层的展示位置
:::demo
```vue
<template>
  <div style="display:flex;justify-content: space-around;">
    <YButton ref="host1" @click="visible1=!visible1">host</YButton>
    <YPopover v-model="visible1" :host="$refs.host1" title="title" show-arrow  placement="top">overlay1</YPopover>
    <YButton ref="host2" @click="visible2=!visible2">host</YButton>
    <YPopover v-model="visible2" :host="$refs.host2" title="title" show-arrow  placement="bottom">overlay2</YPopover>
    <YButton ref="host3" @click="visible3=!visible3">host</YButton>
    <YPopover v-model="visible3" :host="$refs.host3" title="title" show-arrow  placement="left">overlay3</YPopover>
    <YButton ref="host4" @click="visible4=!visible4">host</YButton>
    <YPopover v-model="visible4" :host="$refs.host4" title="title" show-arrow  placement="right">overlay4</YPopover>
  </div>
 
</template>
<script>
export default {
  data() {
    return {
      visible1: false,
      visible2: false,
      visible3: false,
      visible4: false,
    }
  }
}
</script>
```
:::
