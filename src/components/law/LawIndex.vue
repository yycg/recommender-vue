<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <side-menu :sideMenuList="sideMenuList" :selectedKeys="selectedKeys"></side-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>法规</a-breadcrumb-item>
          <a-breadcrumb-item>探索</a-breadcrumb-item>
        </a-breadcrumb>

        <a-card title="法规展示" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <tree></tree>
          <br>
        </a-card>
        <br>

      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
import Tree from './Tree'
export default {
  components: {
    SideMenu,
    Tree
  },
  data () {
    return {
      sideMenuList: [
        { href: '/law', name: '探索', type: 'user' },
        { href: '/law/search', name: '搜索', type: 'laptop' },
        { href: '/law/recommend', name: '推荐', type: 'notification' }
      ],
      selectedKeys: [0]
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
