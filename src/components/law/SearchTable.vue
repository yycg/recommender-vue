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
export default {
  props: ["laws", "count", "start", "total", "pagination", "loading", "keyword"],
  data() {
    return {
      columns
    };
  },
  computed: {
    data: {
      get: function () {
        var laws = []
        for (let i = 0; i < this.laws.length; i++) {
          laws.push(this.laws[i])
          laws[i].key = i.toString()
        }
        console.log("getData", laws)
        return laws
      },
      set: function (newValue) {
      }
    }
  },
  methods: {
    handleTableChange (pagination, filters, sorter) {
      console.log(pagination);
      this.loading = true
      const qs = require('qs')
      this.$axios.post('/law/search', qs.stringify({
        keyword: this.keyword,
        start: (pagination.current - 1) * pagination.pageSize,
        count: pagination.pageSize
      }, { indices: false })).then(res => {
        console.log(res.data)
        this.$emit('searchTableChange', res.data.data)
      })
    }
  }
};

const columns = [
  {
    title: '检查内容',
    dataIndex: 'checkContent',
    key: 'checkContent',
    // width: '20%',
  },
  {
    title: '规范用语(违法事实)',
    dataIndex: 'illegalActivities',
    key: 'illegalActivities',
    // width: '20%',
  },
  {
    title: '监督意见',
    dataIndex: 'superviseMessage',
    key: 'superviseMessage',
  },
  {
    title: '定性依据',
    dataIndex: 'accord',
    key: 'accord',
  },
  {
    title: '处理依据',
    dataIndex: 'disposalAccord',
    key: 'disposalAccord',
  },
  {
    title: '处理内容',
    dataIndex: 'disposalContent',
    key: 'disposalContent',
  },
]
</script>
