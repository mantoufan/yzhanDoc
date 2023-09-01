import{a0 as i,_ as m,E as C,o as h,c as E,J as d,w as F,k as s,a as l}from"./chunks/framework.d66eaa6a.js";const{defineComponent:_}=i,f=_({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:a,createVNode:e,createElementVNode:p,withCtx:t,openBlock:D,createBlock:y}=i,c=["onClick"];function r(o,S){const n=a("YColumn"),u=a("YTable");return D(),y(u,{data:o.tableData,onSelectionChange:o.onSelectionChange},{default:t(()=>[e(n,{type:"selection"}),e(n,{field:"date",header:"Date"}),e(n,{field:"name",header:"Name"}),e(n,{field:"address",header:"Address"}),e(n,{header:"操作"},{default:t(A=>[p("button",{onClick:R=>o.editRow(A)},"编辑",8,c)]),_:1})]),_:1},8,["data","onSelectionChange"])}return{render:r,...{data(){return{tableData:[{date:"2016-10-03",name:"Mark",address:"No. 189, Grove St, Los Angeles"},{date:"2016-10-02",name:"John",address:"No. 189, Grove St, Los Angeles",checked:!0},{date:"2016-10-04",name:"Jane",address:"No. 189, Grove St, Los Angeles"}]}},methods:{editRow(o){console.log("editRow",o)},onSelectionChange(o){console.log("checkedRows",o)}}}}}()}}),B=JSON.parse('{"title":"表格 - Table","description":"","frontmatter":{},"headers":[],"relativePath":"components/table/index.md","filePath":"components/table/index.md"}'),g=s("h1",{id:"表格-table",tabindex:"-1"},[l("表格 - Table "),s("a",{class:"header-anchor",href:"#表格-table","aria-label":'Permalink to "表格 - Table"'},"​")],-1),b=s("h2",{id:"基本用法",tabindex:"-1"},[l("基本用法 "),s("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),w=s("p",null,"可以编辑，多选的表格",-1),Y=s("div",null,"Table 组件基本用法",-1),k=s("div",{class:"language-vue"},[s("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"YTable"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},":data"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"tableData"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@selection-change"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"onSelectionChange"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"YColumn"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"type"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"selection"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"></"),s("span",{style:{color:"#F07178"}},"YColumn"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"YColumn"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"field"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"date"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"header"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Date"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"></"),s("span",{style:{color:"#F07178"}},"YColumn"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"YColumn"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"field"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"name"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"header"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Name"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"></"),s("span",{style:{color:"#F07178"}},"YColumn"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"YColumn"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"field"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"address"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"header"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"Address"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},"></"),s("span",{style:{color:"#F07178"}},"YColumn"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"YColumn"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"header"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"操作"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"#"),s("span",{style:{color:"#C792EA"}},"default"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#A6ACCD"}},"row"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"        "),s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"button"),s("span",{style:{color:"#89DDFF"}}," "),s("span",{style:{color:"#C792EA"}},"@click"),s("span",{style:{color:"#89DDFF"}},"="),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#C3E88D"}},"editRow(row)"),s("span",{style:{color:"#89DDFF"}},'"'),s("span",{style:{color:"#89DDFF"}},">"),s("span",{style:{color:"#A6ACCD"}},"编辑"),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"button"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"      "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"YColumn"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"YTable"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"template"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"<"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"data"),s("span",{style:{color:"#89DDFF"}},"()"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      tableData "),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," [")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          date"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"2016-10-03"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          name"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"Mark"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          address"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"No. 189, Grove St, Los Angeles"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          date"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"2016-10-02"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          name"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"John"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          address"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"No. 189, Grove St, Los Angeles"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          checked"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#FF9CAC"}},"true"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          date"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"2016-10-04"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          name"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"Jane"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"          address"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"No. 189, Grove St, Los Angeles"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},",")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"        "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      ]")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"  "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#F07178"}},"methods"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#F07178"}},"editRow"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"row"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"any"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"editRow"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"row"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"},")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"    "),s("span",{style:{color:"#F07178"}},"onSelectionChange"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"("),s("span",{style:{color:"#A6ACCD","font-style":"italic"}},"checkedRows"),s("span",{style:{color:"#89DDFF"}},":"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#FFCB6B"}},"any"),s("span",{style:{color:"#89DDFF"}},")"),s("span",{style:{color:"#A6ACCD"}}," "),s("span",{style:{color:"#89DDFF"}},"{")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"      "),s("span",{style:{color:"#A6ACCD"}},"console"),s("span",{style:{color:"#89DDFF"}},"."),s("span",{style:{color:"#82AAFF"}},"log"),s("span",{style:{color:"#F07178"}},"("),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#C3E88D"}},"checkedRows"),s("span",{style:{color:"#89DDFF"}},"'"),s("span",{style:{color:"#89DDFF"}},","),s("span",{style:{color:"#F07178"}}," "),s("span",{style:{color:"#A6ACCD"}},"checkedRows"),s("span",{style:{color:"#F07178"}},")")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F07178"}},"    "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#A6ACCD"}},"  "),s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"}")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#89DDFF"}},"</"),s("span",{style:{color:"#F07178"}},"script"),s("span",{style:{color:"#89DDFF"}},">")])])])],-1);function N(a,e,p,t,D,y){const c=C("render-demo-0"),r=C("demo");return h(),E("div",null,[g,b,w,d(r,{customClass:"undefined",sourceCode:`<template>
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
<\/script>
`},{description:F(()=>[Y]),highlight:F(()=>[k]),default:F(()=>[d(c)]),_:1})])}const T=m(f,[["render",N]]);export{B as __pageData,T as default};
