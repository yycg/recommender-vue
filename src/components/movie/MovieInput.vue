<template>
  <a-input-search style="margin-bottom: 8px" placeholder="请输入电影关键词" @change="onSearch" />
</template>

<script>
export default {
  props: ['loading'],
  methods: {
    onSearch (value) {
      console.log('onSearch', value)
      this.loading = true
      this.keyword = value.data
      this.$axios.get('/movie/search', {
        params: {
          keyword: value.data,
          start: 0,
          count: 10
        }
      }).then(res => {
        console.log(res.data)
        this.$emit('search', res.data.data, value.data)
      })
    }
  }
}
</script>
