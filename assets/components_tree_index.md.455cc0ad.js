import{a0 as i,_ as h,E as y,o as _,c as f,J as r,w as n,k as l,a as s}from"./chunks/framework.d66eaa6a.js";const{defineComponent:g}=i,k=g({name:"component-doc",components:{"render-demo-0":function(){const{resolveComponent:e,openBlock:c,createBlock:t}=i;function p(a,F){const o=e("YTree");return c(),t(o,{data:a.data},null,8,["data"])}return{render:p,...{data(){return{data:[{label:"docs",id:"node-1"},{label:"packages",id:"node-2",children:[{label:"vite",id:"node-2-1",children:[{label:"README.md",id:"node-2-1-1"}]},{label:"react",id:"node-2-2",children:[{label:"webpack.config.js",id:"node-2-2-1"},{label:"tsconfig.json",id:"node-2-2-2"}]}]},{label:"pnpm-workspace.yaml",id:"node-3"}]}}}}}(),"render-demo-1":function(){const{resolveComponent:e,openBlock:c,createBlock:t}=i;function p(a,F){const o=e("YTree");return c(),t(o,{data:a.data,lineable:""},null,8,["data"])}return{render:p,...{data(){return{data:[{label:"docs",id:"node-1"},{label:"packages",id:"node-2",children:[{label:"vite",id:"node-2-1",children:[{label:"README.md",id:"node-2-1-1"}]},{label:"react",id:"node-2-2",children:[{label:"webpack.config.js",id:"node-2-2-1"},{label:"tsconfig.json",id:"node-2-2-2"}]}]},{label:"pnpm-workspace.yaml",id:"node-3"}]}}}}}(),"render-demo-2":function(){const{resolveComponent:e,openBlock:c,createBlock:t}=i;function p(a,F){const o=e("YTree");return c(),t(o,{data:a.data,checkable:""},null,8,["data"])}return{render:p,...{data(){return{data:[{label:"docs",id:"node-1",checked:!0},{label:"packages",id:"node-2",children:[{label:"vite",id:"node-2-1",children:[{label:"README.md",id:"node-2-1-1"}]},{label:"react",id:"node-2-2",children:[{label:"webpack.config.js",id:"node-2-2-1"},{label:"tsconfig.json",id:"node-2-2-2"}]}]},{label:"pnpm-workspace.yaml",id:"node-3"}]}}}}}(),"render-demo-3":function(){const{toDisplayString:e,createElementVNode:c,createTextVNode:t,resolveComponent:p,withCtx:D,openBlock:a,createBlock:F}=i,o=["onClick"];function A(C,m){const u=p("YTree");return a(),F(u,{data:C.data},{icon:D(({nodeData:d,toggleNode:b})=>[c("b",{onClick:()=>b(d)},e(d.expanded?"🔽":"▶️"),9,o)]),content:D(d=>[c("b",null,e(d.isLeaf?"📄":"📂"),1),t(e(d.label),1)]),_:1},8,["data"])}return{render:A,...{data(){return{data:[{label:"docs",id:"node-1",checked:!0},{label:"packages",id:"node-2",children:[{label:"vite",id:"node-2-1",children:[{label:"README.md",id:"node-2-1-1"}]},{label:"react",id:"node-2-2",children:[{label:"webpack.config.js",id:"node-2-2-1"},{label:"tsconfig.json",id:"node-2-2-2"}]}]},{label:"pnpm-workspace.yaml",id:"node-3"}]}}}}}(),"render-demo-4":function(){const{resolveComponent:e,openBlock:c,createBlock:t}=i;function p(a,F){const o=e("YTree");return c(),t(o,{data:a.data,operable:""},null,8,["data"])}return{render:p,...{data(){return{data:[{label:"docs",id:"node-1",checked:!0},{label:"packages",id:"node-2",children:[{label:"vite",id:"node-2-1",children:[{label:"README.md",id:"node-2-1-1"}]},{label:"react",id:"node-2-2",children:[{label:"webpack.config.js",id:"node-2-2-1"},{label:"tsconfig.json",id:"node-2-2-2"}]}]},{label:"pnpm-workspace.yaml",id:"node-3"}]}}}}}(),"render-demo-5":function(){const{resolveComponent:e,openBlock:c,createBlock:t}=i;function p(a,F){const o=e("YTree");return c(),t(o,{data:a.treeData,onLazyLoad:a.lazyLoad},null,8,["data","onLazyLoad"])}return{render:p,...{data(){return{treeData:[{id:"node-1",label:"node-1",children:[{id:"node-1-1",label:"node 1-1 - dynamic loading",isLeaf:!1},{id:"node-1-2",label:"node 1-2"}]},{id:"node-2",label:"node 2 - dynamic loading",isLeaf:!1}]}},methods:{lazyLoad(a,F){setTimeout(()=>{F({treeItems:[{label:"lazy node 1",expanded:!0,children:[{id:"lazy-node-1-1",label:"lazy node 1-1"},{id:"lazy-node-1-2",label:"lazy node 1-2"}]},{id:"lazy-node-2",label:"lazy node 2"}],node:a})},1e3)}}}}}(),"render-demo-6":function(){const{createElementVNode:e,resolveComponent:c,createVNode:t,Fragment:p,openBlock:D,createElementBlock:a}=i,F=e("h6",null,[e("p",null,"默认行为")],-1),o=e("h6",null,[e("p",null,"排序")],-1);function A(C,m){const u=c("YTree");return D(),a(p,null,[F,t(u,{data:C.data,dragdrop:""},null,8,["data"]),o,t(u,{data:C.data,dragdrop:{dropPrev:!0,dropNext:!0,dropInner:!0}},null,8,["data"])],64)}return{render:A,...{data(){return{data:[{label:"docs",id:"node-1",checked:!0},{label:"packages",id:"node-2",children:[{label:"vite",id:"node-2-1",children:[{label:"README.md",id:"node-2-1-1"}]},{label:"react",id:"node-2-2",children:[{label:"webpack.config.js",id:"node-2-2-1"},{label:"tsconfig.json",id:"node-2-2-2"}]}]},{label:"pnpm-workspace.yaml",id:"node-3"}]}}}}}(),"render-demo-7":function(){const{resolveComponent:e,openBlock:c,createBlock:t}=i;function p(a,F){const o=e("YTree");return c(),t(o,{data:a.data,height:300,component:"div",itemHeight:30},null,8,["data"])}return{render:p,...{data(){return{data:Array.from({length:1e3},(a,F)=>({id:"node"+F,label:"node"+F}))}}}}}()}}),ll=JSON.parse('{"title":"树 - Tree","description":"","frontmatter":{},"headers":[],"relativePath":"components/tree/index.md","filePath":"components/tree/index.md"}'),B=l("h1",{id:"树-tree",tabindex:"-1"},[s("树 - Tree "),l("a",{class:"header-anchor",href:"#树-tree","aria-label":'Permalink to "树 - Tree"'},"​")],-1),v=l("h2",{id:"基本用法",tabindex:"-1"},[s("基本用法 "),l("a",{class:"header-anchor",href:"#基本用法","aria-label":'Permalink to "基本用法"'},"​")],-1),x=l("div",null,"Tree 组件基本用法",-1),T=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":data"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"data"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}}," ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#F07178"}},"data"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        data"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"docs"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"packages"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"vite"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"README.md"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-1-1"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"react"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"webpack.config.js"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2-1"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"tsconfig.json"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2-2"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"pnpm-workspace.yaml"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-3"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),Y=l("h2",{id:"竖线",tabindex:"-1"},[s("竖线 "),l("a",{class:"header-anchor",href:"#竖线","aria-label":'Permalink to "竖线"'},"​")],-1),w=l("div",null,"Tree 组件，竖线",-1),j=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":data"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"data"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"lineable"),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}}," ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#F07178"}},"data"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        data"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"docs"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"packages"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"vite"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"README.md"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-1-1"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"react"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"webpack.config.js"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2-1"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"tsconfig.json"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2-2"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"pnpm-workspace.yaml"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-3"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),z=l("h2",{id:"复选框",tabindex:"-1"},[s("复选框 "),l("a",{class:"header-anchor",href:"#复选框","aria-label":'Permalink to "复选框"'},"​")],-1),N=l("div",null,"勾选功能，请设置 checkable 属性",-1),L=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":data"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"data"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"checkable"),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}}," ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#F07178"}},"data"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        data"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"docs"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            checked"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#FF9CAC"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"packages"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"vite"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"README.md"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-1-1"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"react"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"webpack.config.js"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2-1"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"tsconfig.json"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2-2"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"pnpm-workspace.yaml"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-3"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),M=l("h2",{id:"自定义图标",tabindex:"-1"},[s("自定义图标 "),l("a",{class:"header-anchor",href:"#自定义图标","aria-label":'Permalink to "自定义图标"'},"​")],-1),R=l("div",null,"自定义图标，设置 icon 插槽",-1),P=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":data"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"data"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"#"),l("span",{style:{color:"#C792EA"}},"icon"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#A6ACCD"}},"nodeData"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"toggleNode"),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"b"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"@click"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"()=>toggleNode(nodeData)"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"{{nodeData.expanded ? '🔽' : '▶️'}}"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"b"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"#"),l("span",{style:{color:"#C792EA"}},"content"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#A6ACCD"}},"treeNode"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"      "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"b"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"{{treeNode.isLeaf ? '📄' : '📂'}}"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"b"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"{{treeNode.label}}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}}," ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#F07178"}},"data"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        data"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"docs"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            checked"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#FF9CAC"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"packages"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"vite"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"README.md"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-1-1"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"react"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"webpack.config.js"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2-1"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"tsconfig.json"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2-2"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"pnpm-workspace.yaml"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-3"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),V=l("h2",{id:"操作节点",tabindex:"-1"},[s("操作节点 "),l("a",{class:"header-anchor",href:"#操作节点","aria-label":'Permalink to "操作节点"'},"​")],-1),I=l("div",null,"操作节点",-1),H=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":data"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"data"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"operable"),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}}," ")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#F07178"}},"data"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        data"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"docs"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            checked"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#FF9CAC"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"packages"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"vite"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"README.md"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-1-1"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"react"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"webpack.config.js"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2-1"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"tsconfig.json"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2-2"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"pnpm-workspace.yaml"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-3"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),$=l("h2",{id:"节点懒加载",tabindex:"-1"},[s("节点懒加载 "),l("a",{class:"header-anchor",href:"#节点懒加载","aria-label":'Permalink to "节点懒加载"'},"​")],-1),S=l("p",null,"通过设置该节点 isLeaf 参数为 false，组件回调 lazyLoad 方法实现节点懒加载",-1),J=l("div",null,"通过设置该节点 isLeaf 参数为 false，组件回调 lazyLoad 方法实现懒加载",-1),O=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":data"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"treeData"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"@lazy-load"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"lazyLoad"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"}),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#F07178"}},"data"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      treeData"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"node-1"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"node-1"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"node-1-1"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"node 1-1 - dynamic loading"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              isLeaf"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#FF9CAC"}},"false"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"node-1-2"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"node 1-2"),l("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"node-2"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"node 2 - dynamic loading"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          isLeaf"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#FF9CAC"}},"false")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#F07178"}},"methods"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#F07178"}},"lazyLoad"),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"node"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"callback"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#82AAFF"}},"setTimeout"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#C792EA"}},"=>"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#C792EA"}},"const"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"data"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"lazy node 1"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            expanded"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#FF9CAC"}},"true"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"lazy-node-1-1"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"lazy node 1-1"),l("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"lazy-node-1-2"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"lazy node 1-2"),l("span",{style:{color:"#89DDFF"}},"'")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"lazy-node-2"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"lazy node 2"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#82AAFF"}},"callback"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          treeItems"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"data"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#A6ACCD"}},"node")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#F07178"}},")")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"},"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"1000"),l("span",{style:{color:"#F07178"}},")"),l("span",{style:{color:"#89DDFF"}},";")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"};")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),q=l("h2",{id:"拖拽操作",tabindex:"-1"},[s("拖拽操作 "),l("a",{class:"header-anchor",href:"#拖拽操作","aria-label":'Permalink to "拖拽操作"'},"​")],-1),G=l("div",null,"拖拽",-1),K=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"h6"),l("span",{style:{color:"#89DDFF"}},"><"),l("span",{style:{color:"#F07178"}},"p"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"默认行为"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"p"),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"h6"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":data"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"data"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"dragdrop"),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"h6"),l("span",{style:{color:"#89DDFF"}},"><"),l("span",{style:{color:"#F07178"}},"p"),l("span",{style:{color:"#89DDFF"}},">"),l("span",{style:{color:"#A6ACCD"}},"排序"),l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"p"),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"h6"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":data"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"data"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":dragdrop"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"{dropPrev: true, dropNext: true, dropInner: true}"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"    "),l("span",{style:{color:"#F07178"}},"data"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        data"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"docs"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            checked"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#FF9CAC"}},"true")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"packages"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"vite"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-1"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"README.md"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-1-1"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"react"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                children"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," [")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"webpack.config.js"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2-1"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"tsconfig.json"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                    id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-2-2-2"),l("span",{style:{color:"#89DDFF"}},'"')]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                  "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"                ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"              "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"},")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"pnpm-workspace.yaml"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"            id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"node-3"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"          "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        ]")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1),Q=l("h2",{id:"虚拟滚动",tabindex:"-1"},[s("虚拟滚动 "),l("a",{class:"header-anchor",href:"#虚拟滚动","aria-label":'Permalink to "虚拟滚动"'},"​")],-1),U=l("p",null,[s("通过 "),l("code",null,"height"),s(" 开启虚拟滚动，通过 "),l("code",null,"itemHeight"),s(" 设置项目高度")],-1),W=l("div",{class:"language-vue"},[l("pre",{"v-pre":"",class:"shiki material-theme-palenight"},[l("code",null,[l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":data"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"data"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":height"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"300"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},"component"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"div"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}}," "),l("span",{style:{color:"#C792EA"}},":itemHeight"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"30"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},"></"),l("span",{style:{color:"#F07178"}},"YTree"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"template"),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"<"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#C792EA"}},"lang"),l("span",{style:{color:"#89DDFF"}},"="),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#C3E88D"}},"ts"),l("span",{style:{color:"#89DDFF"}},'"'),l("span",{style:{color:"#89DDFF"}},">")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF","font-style":"italic"}},"export"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"default"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#A6ACCD"}},"  "),l("span",{style:{color:"#F07178"}},"data"),l("span",{style:{color:"#89DDFF"}},"()"),l("span",{style:{color:"#A6ACCD"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF","font-style":"italic"}},"return"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      data"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"Array"),l("span",{style:{color:"#89DDFF"}},"."),l("span",{style:{color:"#82AAFF"}},"from"),l("span",{style:{color:"#F07178"}},"("),l("span",{style:{color:"#89DDFF"}},"{"),l("span",{style:{color:"#F07178"}}," length"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#F78C6C"}},"1000"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"},"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"("),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"_"),l("span",{style:{color:"#89DDFF"}},","),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD","font-style":"italic"}},"index"),l("span",{style:{color:"#89DDFF"}},")"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#C792EA"}},"=>"),l("span",{style:{color:"#F07178"}}," ("),l("span",{style:{color:"#89DDFF"}},"{")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        id"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"node"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"+"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"index"),l("span",{style:{color:"#89DDFF"}},",")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"        label"),l("span",{style:{color:"#89DDFF"}},":"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#C3E88D"}},"node"),l("span",{style:{color:"#89DDFF"}},"'"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#89DDFF"}},"+"),l("span",{style:{color:"#F07178"}}," "),l("span",{style:{color:"#A6ACCD"}},"index")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"      "),l("span",{style:{color:"#89DDFF"}},"}"),l("span",{style:{color:"#F07178"}},"))")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"    "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#F07178"}},"  "),l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"}")]),s(`
`),l("span",{class:"line"},[l("span",{style:{color:"#89DDFF"}},"</"),l("span",{style:{color:"#F07178"}},"script"),l("span",{style:{color:"#89DDFF"}},">")])])])],-1);function X(e,c,t,p,D,a){const F=y("render-demo-0"),o=y("demo"),A=y("render-demo-1"),E=y("render-demo-2"),C=y("render-demo-3"),m=y("render-demo-4"),u=y("render-demo-5"),d=y("render-demo-6"),b=y("render-demo-7");return _(),f("div",null,[B,v,r(o,{customClass:"undefined",sourceCode:`<template>
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
<\/script>
`},{description:n(()=>[x]),highlight:n(()=>[T]),default:n(()=>[r(F)]),_:1}),Y,r(o,{customClass:"undefined",sourceCode:`<template>
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
<\/script>
`},{description:n(()=>[w]),highlight:n(()=>[j]),default:n(()=>[r(A)]),_:1}),z,r(o,{customClass:"undefined",sourceCode:`<template>
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
<\/script>
`},{description:n(()=>[N]),highlight:n(()=>[L]),default:n(()=>[r(E)]),_:1}),M,r(o,{customClass:"undefined",sourceCode:`<template>
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
<\/script>
`},{description:n(()=>[R]),highlight:n(()=>[P]),default:n(()=>[r(C)]),_:1}),V,r(o,{customClass:"undefined",sourceCode:`<template>
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
<\/script>
`},{description:n(()=>[I]),highlight:n(()=>[H]),default:n(()=>[r(m)]),_:1}),$,S,r(o,{customClass:"undefined",sourceCode:`<template>
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
<\/script>
`},{description:n(()=>[J]),highlight:n(()=>[O]),default:n(()=>[r(u)]),_:1}),q,r(o,{customClass:"undefined",sourceCode:`<template>
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
<\/script>
`},{description:n(()=>[G]),highlight:n(()=>[K]),default:n(()=>[r(d)]),_:1}),Q,U,r(o,{customClass:"undefined",sourceCode:`<template>
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
<\/script>
`},{highlight:n(()=>[W]),default:n(()=>[r(b)]),_:1})])}const sl=h(k,[["render",X]]);export{ll as __pageData,sl as default};
