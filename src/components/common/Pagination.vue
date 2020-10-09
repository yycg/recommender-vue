<template>
  <div>
    <a-pagination
      show-quick-jumper
      show-size-changer
      :default-current="3"
      :total="500"
      @showSizeChange="onShowSizeChange"
      @change="onChange"
    />
  </div>
</template>
<script>
export default {
  data() {
    return {
      pageSize: 20,
      current: 4,
    };
  },
  watch: {
    pageSize(val) {
      console.log('pageSize', val);
    },
    current(val) {
      console.log('current', val);
    },
  },
  methods: {
    onShowSizeChange(current, pageSize) {
      console.log(current, pageSize);
    },
    onChange(pageNumber) {
      console.log('Page: ', pageNumber);
    },
  },
};
</script>