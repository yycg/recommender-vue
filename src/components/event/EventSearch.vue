<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <side-menu :sideMenuList="sideMenuList" :selectedKeys="selectedKeys"></side-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>活动</a-breadcrumb-item>
          <a-breadcrumb-item>搜索</a-breadcrumb-item>
        </a-breadcrumb>

        <a-card title="活动搜索" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <event-input v-on:search="search"></event-input>
          <br>
          <br>
          <div v-if="searched">
            <event-list :events="eventDTOs"></event-list>
            <br>
            <pagination
              v-on:search="search"
              :count="count"
              :start="start"
              :total="total"
              :keyword="keyword"
            ></pagination>
          </div>
        </a-card>

      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
import EventInput from './EventInput'
import EventList from './EventList'
import Pagination from './EventSearchPagination'
export default {
  components: {
    SideMenu,
    EventInput,
    EventList,
    Pagination
  },
  data () {
    return {
      sideMenuList: [
        { href: '/event', name: '探索', type: 'user' },
        { href: '/event/search', name: '搜索', type: 'laptop' },
        { href: '/event/recommend', name: '推荐', type: 'notification' }
      ],
      selectedKeys: [1],
      count: 0,
      eventDTOs: {},
      start: 0,
      total: 0,
      searched: false,
      keyword: ''
    }
  },
  methods: {
    search: function (data, keyword) {
      console.log("search", data, keyword)
      this.count = data.count
      this.eventDTOs = data.eventDTOs
      this.start = data.start
      this.total = data.total
      this.searched = true
      this.keyword = keyword
    }
  }
}
</script>

<style scoped>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
