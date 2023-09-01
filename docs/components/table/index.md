# 表格 - Table

## 基本用法
可以编辑，多选的表格
:::demo Table 组件基本用法
```vue
<template>
  <YTable :data="tableData" @selection-change="onSelectionChange">
    <YColumn type="selection"></YColumn>
    <YColumn field="date" header="Date"></YColumn>
    <YColumn field="name" header="Name"></YColumn>
    <YColumn field="address" header="Address"></YColumn>
    <YColumn header="操作">
      <template #default="row">
        <button @click="editRow(row)">编辑</button>
      </template>
    </YColumn>
  </YTable>
</template>
<script>
export default {
  data() {
    return {
      tableData : [
        {
          date: '2016-10-03',
          name: 'Mark',
          address: 'No. 189, Grove St, Los Angeles',
        },
        {
          date: '2016-10-02',
          name: 'John',
          address: 'No. 189, Grove St, Los Angeles',
          checked: true,
        },
        {
          date: '2016-10-04',
          name: 'Jane',
          address: 'No. 189, Grove St, Los Angeles',
        }
      ]
    }
  },
  methods: {
    editRow (row: any) {
      console.log('editRow', row)
    },
    onSelectionChange (checkedRows: any) {
      console.log('checkedRows', checkedRows)
    }
  }
}
</script>
```
:::