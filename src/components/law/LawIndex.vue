<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-layout>
      <a-layout-sider width="200" style="background: #fff">
        <side-menu :sideMenuList="sideMenuList" :selectedKeys="selectedKeys"></side-menu>
      </a-layout-sider>
      <a-layout style="padding: 0 24px 24px">
        <a-breadcrumb style="margin: 16px 0">
          <a-breadcrumb-item>法规</a-breadcrumb-item>
          <a-breadcrumb-item>探索</a-breadcrumb-item>
        </a-breadcrumb>

        <a-card title="法规展示" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <tree></tree>
          <br>
        </a-card>
        <br>

<!--        <a-card title="热门法规" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">-->
<!--        </a-card>-->
<!--        <br>-->

        <a-card title="分类法规" :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
          <law-select :options="options" v-on:selectSpecialty="selectSpecialty"></law-select>
          <div v-if="selected">
            <CategoryTable
              v-on:selectTableChange="selectTableChange"
              :laws="laws"
              :start="start"
              :count="count"
              :total="total"
              :pagination="pagination"
              :loading="loading"
              :specialtyList="specialtyList"
            ></CategoryTable>
          </div>
        </a-card>
        <br>

      </a-layout>
    </a-layout>
  </a-layout>
</template>

<script>
import SideMenu from '@/components/common/SideMenu'
import Tree from './Tree'
import LawSelect from './LawSelect'
import CategoryTable from './CategoryTable'
export default {
  components: {
    SideMenu,
    Tree,
    LawSelect,
    CategoryTable
  },
  data () {
    return {
      sideMenuList: [
        { href: '/law', name: '探索', type: 'user' },
        { href: '/law/search', name: '搜索', type: 'laptop' },
        { href: '/law/recommend', name: '推荐', type: 'notification' }
      ],
      selectedKeys: [0],
      specialties: [],
      options: [],
      selected: false,
      count: 0,
      laws: {},
      start: 0,
      total: 0,
      specialtyList: [],
      loading: false
    }
  },
  mounted: function () {
    this.getSpecialties()
  },
  methods: {
    getSpecialties () {
      this.$axios.get('law/specialties').then(res => {
        console.log(res.data)
        this.specialties = res.data.data.lawSpecialtyPOs
        console.log(this.specialties)
        for (let i = 0; i < this.specialties.length; i++) {
          this.options.push({value: this.specialties[i].id, label: this.specialties[i].name})
          console.log(this.options)
        }
      })
    },
    selectSpecialty: function (data, specialtyList) {
      console.log('selectSpecialty', data, specialtyList)
      if (data == null) {
        this.selected = false
      } else {
        this.count = data.count
        this.laws = data.lawPOs
        this.start = data.start
        this.total = data.total
        this.selected = true
        this.specialtyList = specialtyList
        this.pagination = {
          current: this.start / this.count + 1,
          total: this.total,
          pageSize: this.count
        }
      }
    },
    selectTableChange (data) {
      console.log('selectTableChange', data)
      this.laws = data.lawPOs
      this.count = data.count
      this.start = data.start
      this.total = data.total
      this.pagination = {
        current: this.start / this.count + 1,
        total: this.total,
        pageSize: this.count
      }
      this.loading = false
    }
  }
}
</script>

<style scoped>
#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
