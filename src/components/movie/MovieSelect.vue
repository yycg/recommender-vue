<template>
  <div>
    请选择电影年份：
    <a-select default-value="---" style="width: 120px" @change="handleYearChange">
      <a-select-option v-for="(item, i) in years" :key="i" :value="item">
        {{item}}
      </a-select-option>
    </a-select>
    <br><br>

    请选择国家：
    <a-select default-value="---" style="width: 120px" @change="handleCountryChange">
      <a-select-option v-for="(item, i) in countries" :key="i" :value="item">
        {{item}}
      </a-select-option>
    </a-select>
    <br><br>

    请选择电影类型：
    <a-select default-value="---" style="width: 120px" @change="handleGenreChange">
      <a-select-option v-for="(item, i) in genres" :key="i" :value="item">
        {{item}}
      </a-select-option>
    </a-select>
    <br><br>

    请选择电影或电视：
    <a-select default-value="---" style="width: 120px" @change="handleSubtypeChange">
      <a-select-option v-for="(item, i) in subtypes" :key="i" :value="item">
        {{item}}
      </a-select-option>
    </a-select>
    <br><br>

    <a-button type="primary" @click="submit">
      确定
    </a-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      years: ['---', '2020s', '2010s', '2000s', '1990s', '1980s', '1970s', '1960s', '更早'],
      countries: ['---', '中国大陆', '欧美', '美国', '中国香港', '中国台湾', '日本', '韩国', '英国', '法国', '德国', '意大利',
        '西班牙', '印度', '泰国', '俄罗斯', '伊朗', '加拿大', '澳大利亚', '爱尔兰', '瑞典', '巴西', '丹麦'],
      genres: ['---', '剧情', '喜剧', '动作', '爱情', '科幻', '动画', '悬疑', '惊悚', '恐怖', '犯罪', '同性', '音乐', '歌舞',
        '传记', '历史', '战争', '西部', '奇幻', '冒险', '灾难', '武侠', '情色', ],
      subtypes: ['---', '电影', '电视'],
      year: '---',
      country: '---',
      genre: '---',
      subtype: '---'
    }
  },
  methods: {
    handleYearChange(value) {
      console.log(`selected ${value}`)
      this.year = value
    },
    handleCountryChange(value) {
      console.log(`selected ${value}`)
      this.country = value
    },
    handleGenreChange(value) {
      console.log(`selected ${value}`)
      this.genre = value
    },
    handleSubtypeChange(value) {
      console.log(`selected ${value}`)
      this.subtype = value
    },
    submit() {
      console.log("submit", this.year, this.country, this.genre, this.subtype)
      this.$axios.get('/movie/condition', {
        params: {
          year: this.year,
          country: this.country,
          genre: this.genre,
          subtype: this.subtype,
          start: 0,
          count: 10
        }
      }).then(res => {
        console.log(res.data)
        this.$emit('select', res.data.data, this.year, this.country, this.genre, this.subtype)
      })
    }
  },
}
</script>

<style scoped>

</style>
