<template>
  <a-input-search style="margin-bottom: 8px" placeholder="请输入活动关键词" @search="onSearch" />
</template>

<script>
export default {
  methods: {
    onSearch (value) {
      console.log(value)
    }
  }
}
</script>
