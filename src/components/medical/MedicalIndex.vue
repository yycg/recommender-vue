<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <side-menu></side-menu>
    </el-aside>
    <el-main>
      medical
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
export default {
  components: {SideMenu},
  data () {
    return {
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

</style>
