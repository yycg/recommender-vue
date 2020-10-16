<template>
  <a-input-search style="margin-bottom: 8px" placeholder="请输入活动关键词" @search="onSearch" />
</template>

<script>
export default {
  methods: {
    onSearch (value) {
      console.log(value)
      this.$axios.get('/event/search', {
        params: {
          keyword: value,
          start: 0,
          count: 10
        }
      }).then(res => {
        console.log(res.data)
        this.$emit('search', res.data.data, value)
      })
    }
  }
}
</script>
