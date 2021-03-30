<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Recommender</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav>
          <b-nav-item
            v-for="(item, i) in navList"
            :key="i"
            :href="item.href"
            :class="{ active: currentPath == item.href }"
          >
            {{ item.name }}
          </b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item v-if="loggedIn === false"
              v-for="(item, i) in rightNavList"
              :key="i"
              :href="item.href"
              :class="{ active: currentPath == item.href }"
            > {{ item.name }}
            </b-nav-item>
            <b-nav-item v-if="loggedIn === true"
              @click="logout"
            >
              退出
            </b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      navList: [
        { href: '/index', name: '首页' },
        { href: '/law', name: '法规' },
        // { href: '/medical', name: '医疗' },
        { href: '/movie', name: '电影' },
        { href: '/event', name: '活动' }
      ]
    }
  },
  computed: {
    currentPath () {
      var x = this.$route.path.indexOf('/', 1)
      if (x !== -1) {
        return this.$route.path.substring(0, x)
      } else {
        return this.$route.path
      }
    },
    loggedIn () {
      var username = this.$store.state.username
      console.log('state username:', username)
      // return username ? true : false
      return !!username
    },
    rightNavList () {
      return [
        { href: '/login', name: '登录' },
        { href: '/register', name: '注册' }
      ]
    }
  },
  methods: {
    logout () {
      console.log("退出")
      var _this = this
      this.$axios.get('/logout').then(resp => {
        if (resp && resp.data.code === 200) {
          _this.$store.commit('logout')
          _this.$router.replace('/index')
        }
      }).catch(failResponse => {})
    }
  }
}
</script>

<style scoped>
/* Change background color to navbar in bootstrap-vuejs
  https://stackoverflow.com/questions/56827797/change-background-color-to-navbar-in-bootstrap-vuejs */
.navbar.navbar-dark.bg-dark {
  background-color: #563d7c !important;
}
</style>
