<script setup lang="ts">
import { ref } from 'vue'

// import YBaseModal from './src/modal/src/base-modal'
// import YTabs from './src/tabs/src/tabs'
// import YTab from './src/tabs/src/components/tab'

// import YBasePopover from './src/base-popover/src/base-popover'
// import YPopover from './src/popover/src/popover'

// const visible = ref(false)
// const host = ref()

// const open = () => {
//   visible.value = !visible.value
// }

// const activeTab = ref('tab1')

import { Table, Column } from './src/table'

const tableData = ref([
  {
    date: '2016-10-03',
    name: 'Mark',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-10-02',
    name: 'John',
    address: 'No. 189, Grove St, Los Angeles',
    checked: true
  },
  {
    date: '2016-10-04',
    name: 'Jane',
    address: 'No. 189, Grove St, Los Angeles'
  }
])
const editRow = (row: any) => {
  console.log('editRow', row)
}
const onSelectionChange = (checkedRows: any) => {
  console.log('checkedRows', checkedRows)
}
</script>
<template>
  <!-- <button @click="open">打开</button>
  <YBaseModal v-model="visible">
    <div
      style="
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
      "
    >
      <img
        style="width: 100px"
        src="http://element-plus.org/images/element-plus-logo.svg"
      />
    </div>
  </YBaseModal>
  <YTabs v-model="activeTab" closable addable>
    <YTab id="tab1" title="Tab1">Tab1 Content</YTab>
    <YTab id="tab2" title="Tab2">Tab2 Content</YTab>
    <YTab id="tab3" title="Tab3">Tab3 Content</YTab>
  </YTabs> -->
  <!-- <div ref="host" class="host" @click="open">host</div>
  <YPopover v-model="visible" :host="host" title="title">overlay</YPopover> -->
  <Table :data="tableData" @selection-change="onSelectionChange">
    <Column type="selection"></Column>
    <Column field="date" header="Date"></Column>
    <Column field="name" header="Name"></Column>
    <Column field="address" header="Address"></Column>
    <Column header="操作">
      <template #default="row">
        <button @click="editRow(row)">编辑</button>
        <button>删除</button>
      </template>
    </Column>
  </Table>
</template>

<style>
.host {
  width: 100px;
  border: 1px solid red;
}
</style>
