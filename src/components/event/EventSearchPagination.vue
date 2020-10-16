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
  props: ['count', 'start', 'total', 'keyword'],
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
      console.log(this.keyword)
      this.$axios.get('/event/search', {
        params: {
          keyword: this.keyword,
          start: this.start,
          count: this.count
        }
      }).then(res => {
        console.log(res.data)
        this.$emit('search', res.data.data, this.keyword)
      })
    }
  }
}
</script>
