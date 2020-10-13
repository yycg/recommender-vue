<template>
  <div>
    <a-pagination
      show-quick-jumper
      show-size-changer
      :current="current"
      :total="total"
      :pageSize="pageSize"
      @showSizeChange="onShowSizeChange"
      @change="onChange"
    />
  </div>
</template>

<script>
export default {
  props: ['count', 'start', 'total', 'categoryList'],
  computed: {
      pageSize () {
        return this.count
      },
      current () {
        return this.start/this.count + 1
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

    },
    onChange(pageNumber) {
      console.log('Page: ', pageNumber)
    }
  }
}
</script>
