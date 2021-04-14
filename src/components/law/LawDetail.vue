<template>
  <a-layout style="padding: 0 24px 24px">
    <a-card title="法规详情" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
      <a-descriptions title="" bordered>
        <a-descriptions-item label="检查内容" :span="3">
          {{ law.checkContent }}
        </a-descriptions-item>
        <a-descriptions-item label="规范用语(违法事实)" :span="3">
          {{ law.illegalActivities }}
        </a-descriptions-item>
        <a-descriptions-item label="监督意见" :span="3">
          {{ law.superviseMessage }}
        </a-descriptions-item>
        <a-descriptions-item label="定性依据" :span="3">
          {{ law.accord }}
        </a-descriptions-item>
        <a-descriptions-item label="处理依据" :span="3">
          {{ law.disposalAccord }}
        </a-descriptions-item>
        <a-descriptions-item label="处理内容" :span="3">
          {{ law.disposalContent }}
        </a-descriptions-item>
        <a-descriptions-item label="调查制度违法事实" :span="3">
          {{ law.reportIllegalActivities }}
        </a-descriptions-item>
        <a-descriptions-item label="操作时间" :span="3">
          {{ law.operateTime }}
        </a-descriptions-item>
      </a-descriptions>
    </a-card>
    <br>

<!--    <a-card title=相关案例 :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">-->
<!--      <div v-for="(item, i) in relatedCases" :key="item.id">-->
<!--        <a-descriptions :title="getCaseName(i)" bordered>-->
<!--          <a-descriptions-item label="企业名称" :span="3">-->
<!--            {{ item.compName }}-->
<!--          </a-descriptions-item>-->
<!--          <a-descriptions-item label="地址" :span="3">-->
<!--            {{ item.busAddr }} {{ item.regAddr }}-->
<!--          </a-descriptions-item>-->
<!--          <a-descriptions-item label="文档编号" :span="3">-->
<!--            {{ item.documentNo }}-->
<!--          </a-descriptions-item>-->
<!--          <a-descriptions-item label="允许机构" :span="3">-->
<!--            {{ item.allowOrg }}-->
<!--          </a-descriptions-item>-->
<!--          <a-descriptions-item label="实际罚金" :span="3">-->
<!--            {{ item.actualPenalty }}-->
<!--          </a-descriptions-item>-->
<!--          <a-descriptions-item label="展示名称" :span="3">-->
<!--            {{ item.disName }}-->
<!--          </a-descriptions-item>-->
<!--          <a-descriptions-item label="处罚基础" :span="3">-->
<!--            {{ item.punishimentbasis }}-->
<!--          </a-descriptions-item>-->
<!--        </a-descriptions>-->
<!--        <br>-->
<!--      </div>-->
<!--    </a-card>-->
<!--    <br>-->

    <a-card title=相似法规 :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
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
      <recommend-explanation-table :laws="lawsOfRelatedCases"></recommend-explanation-table>
    </a-card>
  </a-layout>
</template>

<script>
import RecommendExplanationTable from './RecommendExplanationTable'
import RecommendTable from './RecommendTable'
export default {
  name: 'LawDetail',
  components: {
    RecommendExplanationTable,
    RecommendTable
  },
  data () {
    return {
      law: {},
      relatedCases: [],
      lawsOfRelatedCases: [],
      laws: [],
      count: 0,
      start: 0,
      total: 0,
      pagination: {},
      algorithm: 'Item2Vec',
      checkedKeys: [this.$route.params.id],
      loading: false
    }
  },
  mounted: function () {
    this.getdata()
    // this.getRelatedCases()
    this.getLawsOfRelatedCases()
    this.getSimilarLaws()
  },
  methods: {
    getdata () {
      this.$axios.get('law/' + this.$route.params.id).then(res => {
        console.log(res.data)
        this.law = res.data.data.lawPO
      })
    },
    getRelatedCases () {
      this.$axios.get('law/relatedCases/' + this.$route.params.id).then(res => {
        console.log(res.data)
        this.relatedCases = res.data.data.lawCaseDTOs
      })
    },
    getCaseName (i) {
      return '案例' + i
    },
    getLawsOfRelatedCases () {
      this.$axios.get('law/lawsOfRelatedCases/' + this.$route.params.id).then(res => {
        console.log(res.data)
        this.lawsOfRelatedCases = res.data.data.lawPOs
      })
    },
    getSimilarLaws () {
      console.log('getSimilarLaws', this.algorithm, this.checkedKeys)
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
    recommendTableChange (pagination) {
      console.log('recommendTableChange')
      console.log(pagination)
      const qs = require('qs')
      this.loading = true
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
    }
  }
}
</script>

<style scoped>

</style>
