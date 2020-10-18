<template>
  <a-table :columns="columns" :data-source="data">
<!--    <a slot="name" slot-scope="text">{{ text }}</a>-->
<!--    <span slot="customTitle"><a-icon type="smile-o" /> Name</span>-->
<!--    <span slot="tags" slot-scope="tags">-->
<!--      <a-tag-->
<!--        v-for="tag in tags"-->
<!--        :key="tag"-->
<!--        :color="tag === 'loser' ? 'volcano' : tag.length > 5 ? 'geekblue' : 'green'"-->
<!--      >-->
<!--        {{ tag.toUpperCase() }}-->
<!--      </a-tag>-->
<!--    </span>-->
<!--    <span slot="action" slot-scope="text, record">-->
<!--      <a>Invite 一 {{ record.name }}</a>-->
<!--      <a-divider type="vertical" />-->
<!--      <a>Delete</a>-->
<!--      <a-divider type="vertical" />-->
<!--      <a class="ant-dropdown-link"> More actions <a-icon type="down" /> </a>-->
<!--    </span>-->
  </a-table>
</template>

<script>
export default {
  props: ["movies", "count", "start", "total"],
  data() {
    return {
      //data: this.movies,
      columns: [
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
    }
  },
};
</script>
