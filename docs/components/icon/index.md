## 基本用法
设置图标字体中 `name` 或远程资源地址

:::demo
```vue
<template>
  <YIcon name="vue"></YIcon>
  <YIcon name="https://vitejs.dev/logo.svg" width="30"></YIcon>
</template>
```
:::

## 尺寸
设置 `size` 可以更改图标尺寸
:::demo
```vue
<template>
  <YIcon name="vue" size="30px"></YIcon>
  <YIcon name="react" :size="30"></YIcon>
  <YIcon name="angular" :size="30"></YIcon>
</template>
```
:::

## 颜色
设置 `color` 可以更改图标颜色
:::demo 设置为合法的颜色字符串即可
```vue
<template>
  <YIcon name="vue" size="30px" color="green"></YIcon>
  <YIcon name="react" :size="30" color="blue"></YIcon>
  <YIcon name="angular" :size="30" color="red"></YIcon>
</template>
```
:::

## SVG 图标
使用 `svg` 中的 `use` 引用 `symbol` 加载图标
:::demo
```vue
<template>
  <YIcon type="svg" name="vue" size="30px" color="green"></YIcon>
  <YIcon type="svg" name="react" :size="30" color="blue"></YIcon>
  <YIcon type="svg" name="angular" width="30px" height="30px" color="red"></YIcon>
</template>
```
:::
