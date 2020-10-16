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
  props: ['count', 'start', 'total', 'algorithm'],
  data () {
    return {
      countProp: this.count,
      startProp: this.start,
      totalProp: this.total,
      algorithmProp: this.algorithm
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
      console.log(this.algorithmProp)
      this.$axios.get('/event/recommend', {
        params: {
          algorithm: this.algorithmProp,
          start: this.startProp,
          count: this.countProp
        }
      }).then(res => {
        console.log(res.data)
        this.$emit('recommend', res.data.data, this.algorithmProp)
      })
    }
  }
}
</script>
