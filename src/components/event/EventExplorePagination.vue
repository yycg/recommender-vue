<template>
  <div>
    <a-pagination
      show-quick-jumper
      show-size-changer
      :current="current"
      :total="total"
      :pageSize="count"
      @showSizeChange="onShowSizeChange"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  props: ['count', 'start', 'total', 'categoryList'],
  computed: {
    current: {
      get: function () {
        return this.start / this.count + 1
      },
      set: function (newValue) {
        this.start = (newValue - 1) * this.count;
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
      this.count = pageSize
      this.current = 1
      this.queryEventList()
    },
    onChange(pageNumber) {
      console.log('Page: ', pageNumber)
      this.current = pageNumber
      this.queryEventList()
    },
    queryEventList() {
      console.log(this.categoryList)
      if (this.categoryList.length == 0) {
        this.$emit('selectCategory')
      } else {
        this.$axios.get('/event/category', {
          params: {
            category: this.categoryList[0],
            subcategory: this.categoryList.length > 1 ? this.categoryList[1] : null,
            start: this.start,
            count: this.count
          }
        }).then(res => {
          console.log(res.data)
          this.$emit('selectCategory', res.data.data, this.categoryList)
        })
      }
    }
  }
}
</script>
