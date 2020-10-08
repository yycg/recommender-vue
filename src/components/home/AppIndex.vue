<template>
  <el-container>
    <el-aside style="width: 200px; margin-top: 20px">
      <switch></switch>
      <side-menu></side-menu>
    </el-aside>
    <el-main>
      <div style="padding: 24px 48px">
        <h1>:)</h1>
        <p>
          LiveMusic 个性化现场音乐活动推荐<br />
          <span style="font-size: 30px"></span>
        </p>
        <span style="font-size: 22px">
          [<a href="release/LiveMusic-1.0.0.apk"
            >点此下载1.0.0版本安装包（仅限Android系统）</a
          >]
        </span>
      </div>
    </el-main>
  </el-container>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
export default {
  components: { SideMenu },
  data () {
    return {
      sideBarList: [
        { href: '#', name: '介绍' },
        { href: '#', name: '技术' }
      ]
    }
  }
}
</script>

<style scoped>
* {
  padding: 0;
  margin: 0;
}
.think_default_text {
  padding: 4px 48px;
}
a {
  color: #2e5cd5;
  cursor: pointer;
  text-decoration: none;
}
a:hover {
  text-decoration: underline;
}
body {
  background: #fff;
  font-family: "Century Gothic", "Microsoft yahei";
  color: #333;
  font-size: 18px;
}
h1 {
  font-size: 100px;
  font-weight: normal;
  margin-bottom: 12px;
}
p {
  line-height: 1.6em;
  font-size: 42px;
}
</style>
