<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <side-menu :sideMenuList="sideMenuList" :selectedKeys="selectedKeys"></side-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>电影</a-breadcrumb-item>
          <a-breadcrumb-item>探索</a-breadcrumb-item>
        </a-breadcrumb>

        <a-card title="高分电影" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <top-movie-table
            v-on:topTableChange="topTableChange"
            :movies="topMovies"
            :count="topCount"
            :start="start"
            :total="total"
            :pagination="topPagination"
            :loading="topLoading"
          ></top-movie-table>
        </a-card>
        <br>

        <a-card title="分类电影" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <movie-select v-on:select="select"></movie-select>
          <br>
          <movie-explore-table
            v-on:select="select"
            :movies="movies"
            :count="count"
            :start="start"
            :total="total"
            :year="year"
            :country="country"
            :genre="genre"
            :subtype="subtype"
            :pagination="pagination"
            :loading="loading"
          ></movie-explore-table>
        </a-card>

      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
import MovieSelect from './MovieSelect'
import MovieExploreTable from './MovieExploreTable'
import TopMovieTable from './TopMovieTable'
export default {
  components: {
    SideMenu,
    MovieSelect,
    MovieExploreTable,
    TopMovieTable
  },
  data () {
    return {
      sideMenuList: [
        { href: '/movie', name: '探索', type: 'user' },
        { href: '/movie/search', name: '搜索', type: 'laptop' },
        { href: '/movie/recommend', name: '推荐', type: 'notification' }
      ],
      selectedKeys: [0],
      selected: false,
      movies: [],
      count: 0,
      start: 0,
      total: 0,
      year: 0,
      country: "",
      genre: "",
      subtype: "",
      pagination: {},
      loading: false,
      topMovies: {},
      topCount: 0,
      topStart: 0,
      topTotal: 0,
      topPagination: {},
      topLoading: false
    }
  },
  methods: {
    select: function (data, year, country, genre, subtype) {
      console.log("select", data)
      this.movies = data.moviePOs
      this.count = data.count
      this.start = data.start
      this.total = data.total
      this.year = year
      this.country = country
      this.genre = genre
      this.subtype = subtype
      this.pagination = {
        current: this.start / this.count + 1,
        total: this.total,
        pageSize: this.count
      }
      this.loading = false
    },
    topTableChange: function (data) {
      console.log("topTableChange", data)
      this.topMovies = data.moviePOs
      this.topCount = data.count
      this.topStart = data.start
      this.topTotal = data.total
      this.topPagination = {
        current: this.topStart / this.topCount + 1,
        total: this.topTotal,
        pageSize: this.topCount
      }
      this.topLoading = false
    }
  },
  mounted () {
    console.log("mounted")
    this.$axios.get('/movie/top', {
      params: {
        start: 0,
        count: 10
      }
    }).then(res => {
      console.log(res.data)
      var data = res.data.data
      this.topMovies = data.moviePOs
      this.topCount = data.count
      this.topStart = data.start
      this.topTotal = data.total
      this.topPagination = {
        current: this.topStart / this.topCount + 1,
        total: this.topTotal,
        pageSize: this.topCount
      }
    })
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
