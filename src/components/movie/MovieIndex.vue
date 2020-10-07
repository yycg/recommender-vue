<template>
  <el-container>
    <el-aside style="width: 200px;margin-top: 20px">
      <switch></switch>
      <side-bar></side-bar>
    </el-aside>
    <el-main>
      movies
      <!--<books></books>-->
    </el-main>
  </el-container>
</template>

<script>
import SideBar from '@/components/common/SideBar'
export default {
  name: 'MovieIndex',
  components: {SideBar}
}
</script>

<style scoped>

</style>
