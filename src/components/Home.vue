<template>
  <div>
    <nav-bar></nav-bar>
    <router-view/>
  </div>
</template>

<script>
import NavBar from '@/components/common/NavBar'
export default {
  components: {NavBar}
}
</script>

<style scoped>
</style>
