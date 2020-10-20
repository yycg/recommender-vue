<template>
  <a-input-search style="margin-bottom: 8px" placeholder="请输入法规关键词" @search="onSearch" />
</template>

<script>
export default {
  methods: {
    onSearch (value) {
      console.log(value)
      this.$emit('load')
      const qs = require('qs')
      this.$axios.post('/law/search', qs.stringify({
        keyword: value,
        start: 0,
        count: 10
      }, { indices: false })).then(res => {
        console.log(res.data)
        this.$emit('search', res.data.data, value)
      })
    }
  }
}
</script>
