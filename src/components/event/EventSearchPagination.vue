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
  props: ['count', 'start', 'total', 'keyword'],
  data () {
    return {
      countProp: this.count,
      startProp: this.start,
      totalProp: this.total,
      keywordProp: this.keyword
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
      console.log(this.keywordProp)
      this.$axios.get('/event/search', {
        params: {
          keyword: this.keywordProp,
          start: this.startProp,
          count: this.countProp
        }
      }).then(res => {
        console.log(res.data)
        this.$emit('search', res.data.data, this.keywordProp)
      })
    }
  }
}
</script>
