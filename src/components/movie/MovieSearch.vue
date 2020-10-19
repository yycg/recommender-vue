<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <side-menu :sideMenuList="sideMenuList" :selectedKeys="selectedKeys"></side-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>电影</a-breadcrumb-item>
          <a-breadcrumb-item>搜索</a-breadcrumb-item>
        </a-breadcrumb>

        <a-card title="电影搜索" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <movie-input v-on:search="search" v-on:load="load"></movie-input>
          <br>
          <movie-table
            v-on:searchTableChange="searchTableChange"
            :movies="movies"
            :start="start"
            :count="count"
            :total="total"
            :pagination="pagination"
            :loading="loading"
            :keyword="keyword"
          ></movie-table>
        </a-card>

        <br>

      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
import MovieInput from './MovieInput'
import MovieTable from './MovieSearchTable'
export default {
  components: {
    SideMenu,
    MovieInput,
    MovieTable
  },
  data () {
    return {
      sideMenuList: [
        { href: '/movie', name: '探索', type: 'user' },
        { href: '/movie/search', name: '搜索', type: 'laptop' },
        { href: '/movie/recommend', name: '推荐', type: 'notification' }
      ],
      selectedKeys: [1],
      movies: [],
      count: 0,
      start: 0,
      total: 0,
      pagination: {},
      loading: false,
      keyword: ''
    }
  },
  methods: {
    search (data, keyword) {
      console.log("search", data, keyword)
      this.movies = data.moviePOs
      this.count = data.count
      this.start = data.start
      this.total = data.total
      this.pagination = {
        current: this.start / this.count + 1,
        total: this.total,
        pageSize: this.count
      }
      this.loading = false
      this.keyword = keyword
    },
    searchTableChange (data) {
      this.movies = data.moviePOs
      this.count = data.count
      this.start = data.start
      this.total = data.total
      this.pagination = {
        current: this.start / this.count + 1,
        total: this.total,
        pageSize: this.count
      }
      this.loading = false
    },
    load () {
      this.loading = true
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
