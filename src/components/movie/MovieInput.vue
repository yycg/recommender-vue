<template>
  <a-input-search style="margin-bottom: 8px" placeholder="请输入电影关键词" @change="onSearch" />
</template>

<script>
export default {
  methods: {
    onSearch (value) {
      console.log(value)
      this.keyword = value
      this.$axios.get('/movie/search', {
        params: {
          keyword: value,
          start: 0,
          count: 10
        }
      }).then(res => {
        console.log(res.data)
        this.$emit('search', res.data.data)
      })
    }
  }
}
</script>
