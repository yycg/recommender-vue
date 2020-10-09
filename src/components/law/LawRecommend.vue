<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <side-menu></side-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>法规</a-breadcrumb-item>
          <a-breadcrumb-item>推荐</a-breadcrumb-item>
        </a-breadcrumb>

        <a-card title="法规推荐" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <recommend-select></recommend-select>
          <br>
          <br>
          <checkable-tree></checkable-tree>
          <br>
        </a-card>

        <br>

      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
import RecommendSelect from '@/components/common/RecommendSelect'
import CheckableTree from '@/components/common/CheckableTree'
export default {
  components: {
    SideMenu,
    RecommendSelect,
    CheckableTree
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
