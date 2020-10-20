<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <side-menu :sideMenuList="sideMenuList" :selectedKeys="selectedKeys"></side-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>法规</a-breadcrumb-item>
          <a-breadcrumb-item>推荐</a-breadcrumb-item>
        </a-breadcrumb>

        <a-card title="法规推荐" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <recommend-select v-on:select="select"></recommend-select>
          <br>
          <checkable-tree v-on:check="check"></checkable-tree>
          <br>
          <a-button type="primary" @click="submit">
            确定
          </a-button>
          <br>
          <recommend-table
            v-on:recommendTableChange="recommendTableChange"
            :laws="laws"
            :count="count"
            :start="start"
            :total="total"
            :pagination="pagination"
            :algorithm="algorithm"
            :lawTitles="checkedKeys"
            :loading="loading"
          ></recommend-table>
        </a-card>
        <br>

      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
import RecommendSelect from './RecommendSelect'
import CheckableTree from './CheckableTree'
import RecommendTable from './RecommendTable'
export default {
  components: {
    SideMenu,
    RecommendSelect,
    CheckableTree,
    RecommendTable
  },
  data () {
    return {
      sideMenuList: [
        { href: '/law', name: '探索', type: 'user' },
        { href: '/law/search', name: '搜索', type: 'laptop' },
        { href: '/law/recommend', name: '推荐', type: 'notification' }
      ],
      selectedKeys: [2],
      algorithm: 'Item2Vec',
      checkedKeys: [],
      laws: [],
      loading: false,
      start: 0,
      total: 0,
      count: 0,
      pagination: {}
    }
  },
  methods: {
    submit () {
      console.log("submit", this.algorithm, this.checkedKeys)
      this.loading = true
      const qs = require('qs')
      this.$axios.post('/law/recommend', qs.stringify({
        algorithm: this.algorithm,
        lawTitles: this.checkedKeys,
        start: 0,
        count: 10
      }, { indices: false })).then(res => {
        console.log(res.data)
        let data = res.data.data
        this.laws = data.lawPOs
        this.count = data.count
        this.start = data.start
        this.total = data.total
        this.pagination = {
          current: this.start / this.count + 1,
          total: this.total,
          pageSize: this.count
        }
        this.loading = false
      })
    },
    check (checkedKeys) {
      console.log("check", checkedKeys)
      this.checkedKeys = checkedKeys
    },
    select (algorithm) {
      console.log("select", algorithm)
      this.algorithm = algorithm
    },
    recommendTableChange (data) {
      console.log("recommendTableChange")
      this.laws = data.lawPOs
      this.count = data.count
      this.start = data.start
      this.total = data.total
      this.pagination = {
        current: this.start / this.count + 1,
        total: this.total,
        pageSize: this.count
      }
      this.loading = false
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
