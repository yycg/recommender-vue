<template>
  <a-menu
    mode="inline"
    :default-selected-keys="['1']"
    :default-open-keys="['sub1']"
    :style="{ height: '100%', borderRight: 0 }"
  >    
    <a-menu-item key="1">
      <a href="/event"><a-icon type="user" /> 探索</a>
    </a-menu-item>
    <a-menu-item key="2">
      <a href="/event/search"><a-icon type="laptop" /> 搜索</a>
    </a-menu-item>
    <a-menu-item key="3">
      <a href="/event/recommend"><a-icon type="notification" /> 推荐</a>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  data() {
    return {
      current: ['2'],
    };
  },
};
</script>

<style scoped>

</style>
