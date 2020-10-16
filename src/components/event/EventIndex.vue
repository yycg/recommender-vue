<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <side-menu :sideMenuList="sideMenuList" :selectedKeys="selectedKeys"></side-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>活动</a-breadcrumb-item>
          <a-breadcrumb-item>探索</a-breadcrumb-item>
        </a-breadcrumb>

        <a-card title="热门活动" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <event-carousel></event-carousel>
          <br>
        </a-card>

        <br>

        <a-card title="分类活动" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <event-select v-on:selectCategory="selectCategory"></event-select>
          <br>
          <div v-if="selected">
            <event-list :events="eventDTOs"></event-list>
            <br>
            <pagination
              v-on:selectCategory="selectCategory"
              :count="count"
              :start="start"
              :total="total"
              :categoryList="categoryList"
            ></pagination>
          </div>
        </a-card>

      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
import EventCarousel from './EventCarousel'
import EventSelect from './EventSelect'
import EventList from './EventList'
import Pagination from './EventExplorePagination'
export default {
  components: {
    SideMenu,
    EventCarousel,
    EventSelect,
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
      selectedKeys: [0],
      selected: false,
      count: 0,
      eventDTOs: {},
      start: 0,
      total: 0,
      categoryList: []
    }
  },
  methods: {
    selectCategory: function (data, categoryList) {
      console.log("selectCategory", data, categoryList)
      if (data == null) {
        this.selected = false
      } else {
        this.count = data.count
        this.eventDTOs = data.eventDTOs
        this.start = data.start
        this.total = data.total
        this.selected = true
        this.categoryList = categoryList
      }
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
