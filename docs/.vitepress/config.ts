import { demoBlockPlugin } from 'vitepress-theme-demoblock'
const sidebar = {
  '/': [
    { text: '快速开始', link: '/' },
    {
      text: '通用',
      items: [
        { text: 'Button 按钮', link: '/components/button/' },
        { text: 'Icon 图标', link: '/components/icon/' },
      ]
    },
    { text: '导航',
      items: [
        { text: 'Pagination 分页', link: '/components/pagination/' },    
      ]
    },
    { text: '反馈',
      items: [
        { text: 'Modal 模态框', link: '/components/modal/' },
        { text: 'Popover 气泡', link: '/components/popover/' },
      ]
    },
    { text: '数据录入', 
      items: [
        { text: 'Form 表单', link: '/components/form/' },
      ]
    },
    { text: '数据展示',
      items: [
        { text: 'Tree 树', link: '/components/tree/' },
        { text: 'Tab 选项卡', link: '/components/tab/' },
      ] 
    },
    { text: '布局', 
      items: [
        { text: 'Table 表格', link: '/components/table/' },
      ]
    },
  ]
}

const config = {
  themeConfig: {
    sidebar
  },
  markdown: {
    config(md) {
      md.use(demoBlockPlugin)
    }
  }
}

export default config