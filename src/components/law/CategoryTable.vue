<template>
  <a-table
    :columns="columns"
    :data-source="data"
    :scroll="{ x: 1500, y: 400 }"
    :pagination="pagination"
    :loading="loading"
    @change="handleTableChange"
  >
    <a slot="action" slot-scope="text" :href="text">查看</a>
  </a-table>
</template>

<script>
export default {
  props: ['laws', 'count', 'start', 'total', 'pagination', 'loading', 'specialtyList'],
  data () {
    return {
      columns
    }
  },
  computed: {
    data: {
      get: function () {
        var laws = []
        for (let i = 0; i < this.laws.length; i++) {
          laws.push(this.laws[i])
          laws[i].key = i.toString()
          laws[i].operation = this.getLawUrl(laws[i].id)
        }
        console.log('getData', laws)
        return laws
      },
      set: function (newValue) {
      }
    }
  },
  methods: {
    handleTableChange (pagination, filters, sorter) {
      this.loading = true
      this.$axios.get('/law/specialty', {
        params: {
          specialtyId: this.specialtyList[0],
          start: (pagination.current - 1) * pagination.pageSize,
          count: pagination.pageSize
        }
      }).then(res => {
        console.log(res.data)
        this.$emit('selectTableChange', res.data.data)
      })
    },
    getLawUrl: function (lawId) {
      return '/law/detail/' + lawId
    }
  }
};

const columns = [
  {
    title: '检查内容',
    dataIndex: 'checkContent',
    key: 'checkContent',
    width: 200,
    fixed: 'left'
  },
  {
    title: '规范用语(违法事实)',
    dataIndex: 'illegalActivities',
    key: 'illegalActivities',
    width: 200,
  },
  {
    title: '监督意见',
    dataIndex: 'superviseMessage',
    key: 'superviseMessage',
    width: 200,
  },
  {
    title: '定性依据',
    dataIndex: 'accord',
    key: 'accord',
    width: 200,
  },
  {
    title: '处理依据',
    dataIndex: 'disposalAccord',
    key: 'disposalAccord',
    width: 200,
  },
  {
    title: '处理内容',
    dataIndex: 'disposalContent',
    key: 'disposalContent',
    width: 200,
  },
  {
    title: '操作',
    dataIndex: 'operation',
    key: 'operation',
    fixed: 'right',
    width: 100,
    scopedSlots: { customRender: 'action' },
  },
]
</script>
