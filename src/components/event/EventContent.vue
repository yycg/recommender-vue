<template>
  <div>
  <div id="wrapper" class="fwrap">
    <div id="content">
      <!-- <div class="grid-free clearfix"> -->
      <div class="article">
        <ul class="events-list events-list-2col events-list-pic75">
          <li class="list-entry" v-for="(event, i) in events" :key="i">
            <div class="pic">
              <a tabindex="-1" href="#..." title="!确定不感兴趣了？">
                <img
                  alt=""
                  :data-lazy="event.image"
                  :src="event.image"
                  width="75"
                />
              </a>
            </div>
            <div class="info">
              <div class="title">
                <a href="#..." title="!确定不感兴趣了？">
                  {{ event.title }}
                </a>
              </div>
              <div class="datetime">
                {{ event.begin_time }} 至 {{ event.end_time }}
              </div>
              <address :title="event.address">{{ event.address }}</address>
              <div>{{ event.wisher_count }} 人关注</div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- </div> -->
  </div>

  <a-card hoverable style="width: 240px">
    <img
      slot="cover"
      alt="example"
      src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
    />
    <a-card-meta title="Europe Street beat">
      <template slot="description">
        www.instagram.com
      </template>
    </a-card-meta>
  </a-card>

  </div>
</template>

<script>
export default {
  data () {
    return {
      events: new Array(10).fill({
        id: 30241572,
        title: '天津方特欢乐游乐世界特价【打包价119全含】奔跑吧，兄弟！',
        content:
          '活动咨询微信：blueeye918<br><br>查看近期活动请扫码关注页面底部“泡泡圈公众号”<br>承接企业团建及场地租赁服务<br>报名请扫码关注“泡泡圈”报名！切记！切记！切记！<br><br><br>天津方特欢乐世界坐落于天津滨海新区中新生态城生态岛内，是京津冀地区独一无二的第四代高科技主题公园。天津方特欢乐世界以科幻和互动体验为最大特色，绝大部分项目代表着当今全球主题公园项目的顶级水平，可与世界最先进的主题公园相媲美，有“东方梦幻乐园”、“亚洲科幻神奇”之美誉。<br><br>天津方特欢乐世界由飞越极限、魔法城堡、熊出没历险、蓝色地球、东方神韵、海螺湾、唐古拉雪山、津门大峡谷等27个主题项目区组成，涉及主题项目、游乐项目、休闲及景观项目200多项，其中绝大多数项目老少皆宜。<br><br>这里有世界上独一无二的高空飞翔体验项目“飞越极限”；世界上最先进的动感DARK RIDE 魔幻表演项目“魔法城堡”；中国原创动感卡通射击游戏项目“熊出没历险”；世界顶级悬挂式过山车“火流星”；中国独创的大型雪山探险模拟项目“唐古拉雪山”；色彩斑斓、如梦似幻的4D剧场项目“海螺湾”；妙趣诙谐的卡通表演项目“熊出没舞台”……<br><br>【行程计划】<br><br>07：30 地铁惠新西街南口B出口，准时出发，过时不候。<br><br>09：30 到达景区，合影留念，购票进场。<br><br>10：00欢乐从这一刻开始，各种娱乐设备，小伙伴们敞开了玩耍吧。<br><br>12：00午餐自理，景区内很多美食，各种特色小吃快餐等等。。<br><br>14：30 小伙伴们玩了多少项目了，有没有被吓哭的哈哈，继续疯狂吧。<br><br>17：30到达集合返京，小伙伴们玩累了车上休息会吧。<br><br>19：30左右到达地点解散，有缘下次再见。<br><br>注：以上时间为正常安排时间、如遇天气、道路堵车等外在因素领队有权调整行程。<br><br>【装备建议】<br>舒适的鞋子、手机、相机、多带一身衣服、泳衣哦，拖鞋哦 。<br><div class="middle"><img src="https://img3.doubanio.com/view/page_note/large/public/p53883734-1.jpg" alt=""><br><span class="pic-title"></span></div><div class="middle"><img src="https://img3.doubanio.com/view/page_note/large/public/p53883734-2.jpg" alt=""><br><span class="pic-title"></span></div><div class="middle"><img src="https://img3.doubanio.com/view/page_note/large/public/p53883734-3.jpg" alt=""><br><span class="pic-title"></span></div><div class="middle"><img src="https://img3.doubanio.com/view/page_note/large/public/p53883734-4.jpg" alt=""><br><span class="pic-title"></span></div>',
        begin_time: '2019-05-01 08:00:00',
        end_time: '2019-07-30 18:30:00',
        wisher_count: 8,
        address:
          '北京 北京市朝阳区小关街道樱花园西街元大都城垣遗址公园 惠新西街南口',
        image:
          'https://img3.doubanio.com/pview/event_poster/median/public/592ba40463f5c86.jpg'
      })
    }
  }
}
</script>

<style scoped>
@import "https://img3.doubanio.com/f/loc/6516dfea7e8ece9e37c50fe8e12113ef4e500820/css/loc/base.css";
</style>
