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
  </a-layout>
</template>

<script>
export default {
  name: 'LawDetail',
  data() {
    return {
      law: {}
    }
  },
  mounted: function () {
    this.getdata()
  },
  methods: {
    getdata() {
      this.$axios.get('law/' + this.$route.params.id).then(res => {
        console.log(res.data)
        this.law = res.data.data.lawPO
      })
    }
  }
}
</script>

<style scoped>

</style>
