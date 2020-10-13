<template>
  <a-menu
    mode="inline"
    :style="{ height: '100%', borderRight: 0 }"
    :selectedKeys="selectedKeys"
  >
    <a-menu-item v-for="(item, i) in sideMenuList" :key="i">
      <a :href="item.href"><a-icon :type="item.type" /> {{item.name}}</a>
    </a-menu-item>
  </a-menu>
</template>

<script>
export default {
  props: ['sideMenuList', 'selectedKeys']
}
</script>

<style scoped>

</style>
