<template>
  <div>
    请选择推荐算法：
    <a-radio-group button-style="solid" v-model="value" @change="onChange">
      <a-radio-button value="ItemCF">
        ItemCF
      </a-radio-button>
      <a-radio-button value="Item2Vec">
        Item2Vec
      </a-radio-button>
    </a-radio-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: 'Item2Vec'
    }
  },
  methods: {
    onChange (e) {
      console.log(`checked = ${e.target.value}`)
      this.$emit('select', this.value)
    },
  }
}
</script>
