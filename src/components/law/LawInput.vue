<template>
  <a-input-search style="margin-bottom: 8px" placeholder="请输入法规关键词" @change="onChange" />
</template>

<script>
export default {
  methods: {
    onSearch(value) {
      console.log(value);
    },
  },
};
</script>
