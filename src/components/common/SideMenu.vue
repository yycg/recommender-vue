<template>
  <a-menu
    mode="inline"
    :default-selected-keys="['1']"
    :default-open-keys="['sub1']"
    :style="{ height: '100%', borderRight: 0 }"
  >
    <a-sub-menu key="sub1">
      <span slot="title"><a-icon type="user" />探索</span>
    </a-sub-menu>
    <a-sub-menu key="sub2">
      <span slot="title"><a-icon type="laptop" />搜索</span>
    </a-sub-menu>
    <a-sub-menu key="sub3">
      <span slot="title"><a-icon type="notification" />推荐</span>
    </a-sub-menu>
  </a-menu>
</template>

<script>
export default {

};
</script>

<style scoped>

</style>
