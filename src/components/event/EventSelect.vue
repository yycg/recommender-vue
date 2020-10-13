<template>
  <div>
    请选择活动类别：
    <a-cascader :options="options" change-on-select @change="onChange" />
  </div>
</template>

<script>
export default {
  data () {
    return {
      options: [
        {
          value: '音乐',
          label: '音乐',
          children: [
            {
              value: '小型现场',
              label: '小型现场'
            },
            {
              value: '音乐会',
              label: '音乐会'
            },
            {
              value: '演唱会',
              label: '演唱会'
            },
            {
              value: '音乐节',
              label: '音乐节'
            }
          ],
        },
        {
          value: '戏剧',
          label: '戏剧',
          children: [
            {
              value: '话剧',
              label: '话剧'
            },
            {
              value: '音乐剧',
              label: '音乐剧'
            },
            {
              value: '舞剧',
              label: '舞剧'
            },
            {
              value: '歌剧',
              label: '歌剧'
            },
            {
              value: '戏曲',
              label: '戏曲'
            },
            {
              value: '其他',
              label: '其他'
            }
          ]
        },
        {
          value: '聚会',
          label: '聚会',
          children: [
            {
              value: '生活',
              label: '生活'
            },
            {
              value: '集市',
              label: '集市'
            },
            {
              value: '摄影',
              label: '摄影'
            },
            {
              value: '外语',
              label: '外语'
            },
            {
              value: '桌游',
              label: '桌游'
            },
            {
              value: '交友',
              label: '交友'
            },
            {
              value: '美食',
              label: '美食'
            },
            {
              value: '派对',
              label: '派对'
            }
          ]
        },
        {
          value: '电影',
          label: '电影',
          children: [
            {
              value: '主题放映',
              label: '主题放映'
            },
            {
              value: '影展',
              label: '影展'
            },
            {
              value: '影院活动',
              label: '影院活动'
            }
          ]
        },
        {
          value: '其他',
          label: '其他',
          children: [
            {
              value: '讲座',
              label: '讲座'
            },
            {
              value: '展览',
              label: '展览'
            },
            {
              value: '运动',
              label: '运动'
            },
            {
              value: '旅行',
              label: '旅行'
            },
            {
              value: '公益',
              label: '公益'
            },
            {
              value: '赛事',
              label: '赛事'
            },
            {
              value: '课程',
              label: '课程'
            },
            {
              value: '亲子',
              label: '亲子'
            },
            {
              value: '其他',
              label: '其他'
            }
          ]
        }
      ]
    }
  },
  methods: {
    onChange (value) {
      console.log(value)
      if (value.length == 0) {
        this.$emit('selectCategory')
      } else {
        this.$axios.get('/event/category', {
          params: {
            category: value[0],
            subcategory: value.length > 1 ? value[1] : null,
            start: 0,
            count: 10
          }
        }).then(res => {
          console.log(res.data)
          this.$emit('selectCategory', res.data.data, value)
        })
      }
    }
  }
}
</script>
