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
          <div v-if="loggedIn===false">
  <!--          <recommend-select v-on:select="select"></recommend-select>-->
  <!--          <br>-->
            <checkable-tree v-on:check="check"></checkable-tree>
            <br>
            <a-button type="primary" @click="submit">
              确定
            </a-button>
            <br>
          </div>

          <div v-if="loggedIn===true">
            <!--          <recommend-select v-on:select="select"></recommend-select>-->
            <!--          <br>-->
            <!--          <checkable-tree v-on:check="check"></checkable-tree>-->
            <!--          <br>-->
            <!--          <a-button type="primary" @click="submit">-->
            <!--            确定-->
            <!--          </a-button>-->
            <!--          <br>-->
          </div>

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

        <a-card title=推荐解释（同一案例下也出现的法规） :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <recommend-explanation-table
            :laws="lawsOfRelatedCases"
            :loading="explanationLoading"
          ></recommend-explanation-table>
        </a-card>

      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
import RecommendSelect from './RecommendSelect'
import CheckableTree from './CheckableTree'
import RecommendTable from './RecommendTable'
import RecommendExplanationTable from './RecommendExplanationTable'
export default {
  components: {
    SideMenu,
    RecommendSelect,
    CheckableTree,
    RecommendTable,
    RecommendExplanationTable
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
      pagination: {},
      lawsOfRelatedCases: [],
      explanationLoading: false
    }
  },
  mounted: function () {
    if (this.loggedIn) {
      console.log('submit', this.algorithm, this.checkedKeys)
      this.loading = true
      const qs = require('qs')
      this.$axios.post('/law/personalRecommend', qs.stringify({
        username: this.$store.state.username,
        start: 0,
        count: 10
      }, {indices: false})).then(res => {
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

      this.getPersonalRecommendExplanation(qs)
    }
  },
  computed: {
    loggedIn () {
      var username = this.$store.state.username
      console.log('state username:', username)
      // return username ? true : false
      return !!username
    }
  },
  methods: {
    submit () {
      console.log('submit', this.algorithm, this.checkedKeys)
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

      this.getRecommendExplanation(qs, this.checkedKeys)
    },
    check (checkedKeys) {
      console.log('check', checkedKeys)
      this.checkedKeys = checkedKeys
    },
    select (algorithm) {
      console.log('select', algorithm)
      this.algorithm = algorithm
    },
    recommendTableChange (pagination) {
      console.log('recommendTableChange')
      console.log(pagination)
      const qs = require('qs')
      this.loading = true
      if (!this.loggedIn) {
        this.$axios.post('/law/recommend', qs.stringify({
          algorithm: this.algorithm,
          lawTitles: this.lawTitles,
          start: (pagination.current - 1) * pagination.pageSize,
          count: pagination.pageSize
        }, {indices: false})).then(res => {
          console.log(res.data)
          this.laws = res.data.data.lawPOs
          this.count = res.data.data.count
          this.start = res.data.data.start
          this.total = res.data.data.total
          this.pagination = {
            current: this.start / this.count + 1,
            total: this.total,
            pageSize: this.count
          }
          this.loading = false
        })
      } else {
        this.$axios.post('/law/personalRecommend', qs.stringify({
          username: this.$store.state.username,
          start: (pagination.current - 1) * pagination.pageSize,
          count: pagination.pageSize
        }, { indices: false })).then(res => {
          console.log(res.data)
          this.laws = res.data.data.lawPOs
          this.count = res.data.data.count
          this.start = res.data.data.start
          this.total = res.data.data.total
          this.pagination = {
            current: this.start / this.count + 1,
            total: this.total,
            pageSize: this.count
          }
          this.loading = false
        })
      }
    },
    getPersonalRecommendExplanation (qs) {
      console.log('personalRecommendExplanation', this.$store.state.username)
      this.explanationLoading = true
      this.$axios.get('/law/personalRecommendExplanation', {
        params: {
          username: this.$store.state.username
        }
      }).then(res => {
        console.log(res.data)
        this.lawsOfRelatedCases = res.data.data.lawPOs
        this.explanationLoading = false
      })
    },
    getRecommendExplanation (qs, checkedKeys) {
      this.explanationLoading = true
      this.$axios.post('law/recommendExplanation', qs.stringify({
        lawTitles: checkedKeys
      }, {indices: false})).then(res => {
        console.log(res.data)
        this.lawsOfRelatedCases = res.data.data.lawPOs
        this.explanationLoading = false
      })
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
