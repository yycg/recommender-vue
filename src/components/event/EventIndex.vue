<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <side-menu></side-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>Home</a-breadcrumb-item>
          <a-breadcrumb-item>List</a-breadcrumb-item>
          <a-breadcrumb-item>App</a-breadcrumb-item>
        </a-breadcrumb>

        <a-card title="热门活动" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <event-carousel></event-carousel>
        </a-card>

        <br>

        <a-card title="分类活动" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <event-select></event-select>
          <br>
          <event-content></event-content>
        </a-card>

      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
import EventCarousel from './EventCarousel'
import EventSelect from './EventSelect'
import EventContent from './EventContent'
export default {
  components: {SideMenu, EventCarousel, EventSelect, EventContent},
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
