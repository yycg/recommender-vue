<template>
  <div>
    请选择法规专业：
    <a-cascader :options="options" change-on-select @change="onChange" />
  </div>
</template>

<script>
export default {
  props: ['options'],
  methods: {
    onChange (value) {
      console.log(value)
      if (value.length === 0) {
        this.$emit('selectSpecialty')
      } else {
        this.$axios.get('/law/specialty', {
          params: {
            specialtyId: value[0],
            start: 0,
            count: 10
          }
        }).then(res => {
          console.log(res.data)
          this.$emit('selectSpecialty', res.data.data, value)
        })
      }
    }
  }
}
</script>
