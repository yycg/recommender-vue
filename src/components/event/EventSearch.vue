<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <side-menu></side-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>活动</a-breadcrumb-item>
          <a-breadcrumb-item>搜索</a-breadcrumb-item>
        </a-breadcrumb>

        <a-card title="活动搜索" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <event-carousel></event-carousel>
        </a-card>

      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
import EventContent from './EventContent'
import Pagination from '@/components/common/Pagination'
export default {
  components: {
    SideMenu,
    EventContent,
    Pagination
  },
  data () {
    return {
      collapsed: false,
      sideBarList: [
        { href: '#', name: '探索' },
        { href: '#', name: '搜索' },
        { href: '#', name: '推荐' }
      ]
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
