# 分页 - Pagination

## 基础
通过设置`total`属性设置分页总条目数即可
:::demo
```vue
<template>
  <YPagination :total="50"></Ypagination>
  <h6>total = 1 时应该只显示首页</h6>
  <YPagination :total="1"></Ypagination>
  <h6>total = 11 时应该只显示首页和尾页</h6>
  <YPagination :total="11"></Ypagination>
  <h6>total = 80 && pageIndex = 4，右更多</h6>
  <h6>total = 80 && pageIndex = 5，左更多</h6>
  <YPagination :total="80"></Ypagination>
  <h6>total = 90 && pageIndex = 5，左，右更多</h6>
  <h6>total = 90 && pageIndex = 4，右更多</h6>
  <YPagination :total="90"></Ypagination>
</template>
```
:::

## 分页器 pager
通过`YPager`直接使用分页器组件

:::demo
```vue
<template>
  When you have few pages
  <YPager :total="50"></YPager>

  When you have more than 7 pages
  <YPager :total="1000"></YPager>
</template>
```
:::


## 使用案例

:::demo
```vue
<template>
  <div class="essays-container">
    <ul>
      <li v-for="article of articles" :href="`http://juejin.cn/post/${article.article_id}`" target="_blank">
        <div class="essay-list">
          <div class="first-line">
            <span class="title">{{ article.title }}</span>
          </div>
          <div class="infos">
            <span class="split-line"></span>
            <span>{{ article.view_count }}阅读</span>
            <span class="dot">·</span>
            <span>{{ article.digg_count }}点赞</span>
            <span class="dot">·</span>
            <span>{{ article.comment_count }}评论</span>
            <span class="dot">·</span>
            <span>{{ article.collect_count }}收藏</span>
          </div>
        </div>
      </li>
    </ul>
    
  </div>
  <!-- 使用我们的 Pagination 对文章进行分页-->
  <YPagination :total="sourceArticles.length" :pageSize="pageSize" v-model="pageIndex"/>
</template>
<script>
export default {
  data() {
    return {
      pageIndex: 1,
      pageSize: 2,
      sourceArticles: [
        {
          article_id: "7037336504418435103",
          title: "1", // 标题
          collect_count: 151, // 收藏
          comment_count: 46, // 评论数
          ctime: "1638507790", // 创建时间
          digg_count: 161, // 点赞数
          view_count: 8561, // 阅读数
        },
        {
          article_id: "7037336504418435103",
          title: "2", // 标题
          collect_count: 151, // 收藏
          comment_count: 46, // 评论数
          ctime: "1638507790", // 创建时间
          digg_count: 161, // 点赞数
          view_count: 8561, // 阅读数
        },
        {
          article_id: "7037336504418435103",
          title: "3", // 标题
          collect_count: 151, // 收藏
          comment_count: 46, // 评论数
          ctime: "1638507790", // 创建时间
          digg_count: 161, // 点赞数
          view_count: 8561, // 阅读数
        },
        {
          article_id: "7037336504418435103",
          title: "4", // 标题
          collect_count: 151, // 收藏
          comment_count: 46, // 评论数
          ctime: "1638507790", // 创建时间
          digg_count: 161, // 点赞数
          view_count: 8561, // 阅读数
        },
        {
          article_id: "7037336504418435103",
          title: "5", // 标题
          collect_count: 151, // 收藏
          comment_count: 46, // 评论数
          ctime: "1638507790", // 创建时间
          digg_count: 161, // 点赞数
          view_count: 8561, // 阅读数
        }
      ]
    }
  },
  computed: {
    articles () {
      return this.sourceArticles.slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize)
    }
  }
}
</script>
```
:::