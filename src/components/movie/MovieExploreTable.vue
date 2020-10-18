<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
  </a-table>
</template>

<script>
const columns = [
  {
    title: '片名',
    dataIndex: 'title',
    key: 'title'
  },
  {
    title: '原名',
    dataIndex: 'originalTitle',
    key: 'originalTitle',
  },
  {
    title: '又名',
    dataIndex: 'aka',
    key: 'aka',
  },
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
  },
  {
    title: '类型',
    dataIndex: 'genres',
    key: 'genres',
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
  props: ["movies", "count", "start", "total", "year", "country", "genre", "subtype"],
  data() {
    return {
      pagination: {
        current: this.start / this.count + 1,
        total: this.total,
        pageSize: this.count
      },
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
        }
        console.log("getData", movies)
        return movies
      },
      set: function (newValue) {
      }
    },
    current: {
      get: function () {
        return this.start / this.count + 1
      },
      set: function (newValue) {
        this.start = (newValue - 1) * this.count;
      }
    }
  },
  mounted () {
    console.log("mounted", this.current, this.total, this.count)
  },
  methods: {
    handleTableChange (pagination, filters, sorter) {
      console.log(pagination);
      this.$axios.get('/movie/condition', {
        params: {
          year: this.year,
          country: this.country,
          genre: this.genre,
          subtype: this.subtype,
          start: this.start,
          count: this.count
        }
      }).then(res => {
        console.log(res.data)
        this.$emit('select', res.data.data, this.year, this.country, this.genre, this.subtype)
      })
    }
  }
};
</script>
