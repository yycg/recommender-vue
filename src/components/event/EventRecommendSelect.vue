<template>
  <div>
    请选择推荐算法：
    <a-radio-group button-style="solid" v-model="value" @change="onChange">
      <a-radio-button value="mf">
        MF
      </a-radio-button>
      <a-radio-button value="bpr">
        BPR
      </a-radio-button>
    </a-radio-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 'mf'
    }
  },
  methods: {
    onChange (e) {
      console.log(`checked = ${e.target.value}`)
      this.$axios.get('/event/recommend', {
        params: {
          algorithm: this.value,
          start: 0,
          count: 10
        }
      }).then(res => {
        console.log(res.data)
        this.$emit('recommend', res.data.data, this.value)
      })
    },
  }
}
</script>
