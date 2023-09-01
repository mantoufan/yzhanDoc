## 基本用法
选项卡

:::demo
```vue
<template>
  <YTabs v-model="activeTab" closable addable>
    <YTab id="tab1" title="Tab1">Tab1 Content</YTab>
    <YTab id="tab2" title="Tab2">Tab2 Content</YTab>
    <YTab id="tab3" title="Tab3">Tab3 Content</YTab>
  </YTabs>
</template>
<script>
export default {
  data() {
    return {
      'activeTab': 'tab1'
    }
  }
}
</script>
```
:::