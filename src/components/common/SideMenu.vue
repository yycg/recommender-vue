<template>
  <a-menu
    mode="inline"
    :default-selected-keys="['1']"
    :default-open-keys="['sub1']"
    :style="{ height: '100%', borderRight: 0 }"
  >
    <a-menu-item key="1">
      <a-icon type="user" />探索
    </a-menu-item>
    <a-menu-item key="2">
      <a-icon type="laptop" />搜索
    </a-menu-item>
    <a-menu-item key="3">
      <a-icon type="notification" />推荐
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {

};
</script>

<style scoped>

</style>
