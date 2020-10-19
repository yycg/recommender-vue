<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <span slot="countries" slot-scope="countries">
      <a-tag
        v-for="tag in countries"
        :key="tag"
        color="geekblue"
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
    <span slot="genres" slot-scope="genres">
      <a-tag
        v-for="tag in genres"
        :key="tag"
        color="green"
      >
        {{ tag.toUpperCase() }}
      </a-tag>
    </span>
  </a-table>
</template>

<script>
const columns = [
  {
    title: '片名',
    dataIndex: 'title',
    key: 'title',
    width: '20%',
  },
  {
    title: '原名',
    dataIndex: 'originalTitle',
    key: 'originalTitle',
    width: '20%',
  },
  // {
  //   title: '又名',
  //   dataIndex: 'aka',
  //   key: 'aka',
  // },
  {
    title: '评分',
    dataIndex: 'rating',
    key: 'rating',
  },
  {
    title: '年份',
    dataIndex: 'year',
    key: 'year',
  },
  {
    title: '国家',
    dataIndex: 'countries',
    key: 'countries',
    scopedSlots: { customRender: 'countries' },
  },
  {
    title: '类型',
    dataIndex: 'genres',
    key: 'genres',
    scopedSlots: { customRender: 'genres' },
  },
  // {
  //   title: '剧情简介',
  //   dataIndex: 'summary',
  //   key: 'summary',
  // },
  // {
  //   title: '评分人数',
  //   dataIndex: 'ratingsCount',
  //   key: 'ratingsCount',
  // },
  // {
  //   title: '短评人数',
  //   dataIndex: 'commentsCount',
  //   key: 'commentsCount',
  // },
  // {
  //   title: '长评人数',
  //   dataIndex: 'reviewsCount',
  //   key: 'reviewsCount',
  // },
  // {
  //   title: '长评人数',
  //   dataIndex: 'reviewsCount',
  //   key: 'reviewsCount',
  // },
  // {
  //   title: '电影/电视',
  //   dataIndex: 'subtype',
  //   key: 'subtype',
  // },
]

export default {
  props: ["movies", "count", "start", "total", "year", "country", "genre", "subtype", "pagination", "loading"],
  data() {
    return {
      loading: false,
      columns
    };
  },
  computed: {
    data: {
      get: function () {
        var movies = []
        for (let i = 0; i < this.movies.length; i++) {
          movies.push(this.movies[i])
          movies[i].key = i.toString()
          movies[i].countries = movies[i].countries.split(",")
          movies[i].genres = movies[i].genres.split(",")
        }
        console.log("getData", movies)
        return movies
      },
      set: function (newValue) {
      }
    }
  },
  methods: {
    handleTableChange (pagination, filters, sorter) {
      console.log(pagination);
      this.loading = true
      this.$axios.get('/movie/condition', {
        params: {
          year: this.year,
          country: this.country,
          genre: this.genre,
          subtype: this.subtype,
          start: (pagination.current - 1) * pagination.pageSize,
          count: pagination.pageSize
        }
      }).then(res => {
        console.log(res.data)
        this.$emit('select', res.data.data, this.year, this.country, this.genre, this.subtype)
      })
    }
  }
};
</script>
