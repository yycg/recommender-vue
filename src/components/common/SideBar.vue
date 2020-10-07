<template>
  <el-menu
    default-active="1"
    style="width: 170px">
    <a href="#header-div">
      <el-menu-item index="1">
        <i class="el-icon-menu"></i>
        <span slot="title">Explore</span>
      </el-menu-item>
    </a>
    <a href="#update-card">
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">Search</span>
      </el-menu-item>
    </a>
    <a href="#slogan">
      <el-menu-item index="3">
        <i class="el-icon-document"></i>
        <span slot="title">Recommend</span>
      </el-menu-item>
    </a>
  </el-menu>
</template>

<script>
export default {
  data () {
    return {
      sideBarList: [
        { href: '#', name: 'Explore', active: true },
        { href: '#', name: 'Search', active: false },
        { href: '#', name: 'Recommend', active: false }
      ]
    }
  }
}
</script>

<style>
  a {
    text-decoration: none;
    color: inherit;
  }
</style>
