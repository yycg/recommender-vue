<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <side-menu :sideMenuList="sideMenuList" :selectedKeys="selectedKeys"></side-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>首页</a-breadcrumb-item>
        </a-breadcrumb>

        <a-card id="introduction" title="介绍" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          介绍
        </a-card>
        <br>

        <a-card id="technology" title="技术" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          技术
        </a-card>
        <br>

        <a-card id="algorithm" title="算法" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          算法
        </a-card>
        <br>

      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
export default {
  components: { SideMenu },
  data () {
    return {
      sideMenuList: [
        { href: '#introduction', name: '介绍', type: 'user' },
        { href: '#technology', name: '技术', type: 'laptop' },
        { href: '#algorithm', name: '算法', type: 'notification' }
      ],
      selectedKeys: []
    }
  }
}
</script>

<style scoped>
</style>
