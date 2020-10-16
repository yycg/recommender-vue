<template>
  <div>
    <a-pagination
      show-quick-jumper
      show-size-changer
      :current="current"
      :total="totalProp"
      :pageSize="countProp"
      @showSizeChange="onShowSizeChange"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  props: ['count', 'start', 'total', 'categoryList'],
  data () {
    return {
      countProp: this.count,
      startProp: this.start,
      totalProp: this.total,
      categoryListProp: this.categoryList
    }
  },
  computed: {
    current: {
      get: function () {
        return this.startProp / this.countProp + 1
      },
      set: function (newValue) {
        this.startProp = (newValue - 1) * this.countProp;
      }
    }
  },
  watch: {
    pageSize(val) {
      console.log('pageSize', val)
    },
    current(val) {
      console.log('current', val)
    }
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize)
      this.countProp = pageSize
      this.current = 1
      this.queryEventList()
    },
    onChange(pageNumber) {
      console.log('Page: ', pageNumber)
      this.current = pageNumber
      this.queryEventList()
    },
    queryEventList() {
      console.log(this.categoryListProp)
      if (this.categoryListProp.length == 0) {
        this.$emit('selectCategory')
      } else {
        this.$axios.get('/event/category', {
          params: {
            category: this.categoryListProp[0],
            subcategory: this.categoryListProp.length > 1 ? this.categoryListProp[1] : null,
            start: this.startProp,
            count: this.countProp
          }
        }).then(res => {
          console.log(res.data)
          this.$emit('selectCategory', res.data.data, this.categoryListProp)
        })
      }
    }
  }
}
</script>
