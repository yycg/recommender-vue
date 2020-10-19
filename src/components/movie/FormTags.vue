<template>
  <div>
    <label for="tags-basic">请输入电影名按Enter键：</label>
    <b-form-tags
      input-id="tags-basic"
      v-model="movieTitles"
      placeholder=""
    ></b-form-tags>
<!--    <p class="mt-2">Value: {{ movies }}</p>-->
  </div>
</template>

<script>
export default {
  props: {
    movieTitles: {
      default: ['教父']
    }
  },
  data() {
    return {
    }
  }
}
</script>
