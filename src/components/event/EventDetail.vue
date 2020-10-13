<template>
  <a-layout id="components-layout-demo-top-side-2">
    <a-card style="width: 800px; margin: auto">
      <div class="article">
        <div
          class="eventwrap"
          itemscope
          itemtype="http://data-vocabulary.org/Event"
        >
          <div class="poster">
            <a
              :href="event.imageHlarge"
            >
              <img
                id="poster_img"
                itemprop="image"
                :src="event.image"
                title="点击查看大图"
                width="175"
                height="260"
              />
            </a>
          </div>
          <div id="event-info">
            <div class="event-info">
              <h1 itemprop="summary">
                {{event.title}}
              </h1>
              <div class="event-detail">
                <span class="pl">时间:&nbsp;&nbsp;</span>
                <ul class="calendar-strs">
                  <li class="calendar-str-item">{{event.timeStr}}</li>
                </ul>
                <time
                  itemprop="startDate"
                  datetime="2020-10-16T20:00:00"
                ></time>
                <time itemprop="endDate" datetime="2020-10-16T21:30:00"></time>
              </div>
              <div
                class="event-detail"
                itemprop="location"
                itemscope
                itemtype="http://data-vocabulary.org/Organization"
              >
                <span class="pl">地点:&nbsp;</span>
                <span
                  itemprop="address"
                  itemscope
                  itemtype="http://data-vocabulary.org/Address"
                  class="micro-address"
                >
                  <!-- <span itemprop="region" class="micro-address"
                    >北京&nbsp;</span
                  >
                  <span itemprop="locality" class="micro-address"
                    >朝阳区&nbsp;</span
                  > -->
                  <span itemprop="street-address" class="micro-address"
                    >{{event.address}}</span
                  >
                </span>
                <span
                  itemprop="geo"
                  itemscope
                  itemtype="http://data-vocabulary.org/Geo"
                  class="micro-address"
                >
                  <meta itemprop="latitude" content="39.966358" />
                  <meta itemprop="longitude" content="116.398659" />
                </span>
              </div>
              <div class="event-detail">
                <span
                  class="pl"
                  itemprop="ticketAggregate"
                  itemscope
                  itemtype="http://data-vocabulary.org/Offer-aggregate"
                  >费用:&nbsp;&nbsp; {{event.feeStr}}
                </span>
              </div>
              <div class="event-detail">
                <span class="pl">类型:&nbsp;&nbsp;</span
                ><a
                  href="https://beijing.douban.com/events/future-music"
                  itemprop="eventType"
                  >{{event.categoryName}}-{{event.subcategoryName}}</a
                >
              </div>
              <!-- <div
                class="event-detail"
                itemscope
                itemtype="http://data-vocabulary.org/Organization"
              >
                <span class="pl">场地方:&nbsp;&nbsp;</span>
                <a
                  href="https://site.douban.com/202906/"
                  target="_blank"
                  itemprop="name"
                  >蜗牛的家</a
                >
              </div> -->
              <div class="interest-attend pl">
                <span class="num">{{event.wisherCount}} </span><span>人感兴趣 &nbsp; </span>
                <span class="num">{{event.participantCount}} </span><span>人要参加 &nbsp;</span>
              </div>
            </div>
            <div id="event-act">
              <a
                data-interest="wish"
                class="collect_btn redbutt j a_show_login"
                href="/register?reason=visit"
                rel="nofollow"
                ><span>感兴趣</span></a
              >
              <a
                data-interest="do"
                class="collect_btn redbutt j a_show_login"
                href="/register?reason=visit"
                rel="nofollow"
              >
                <span>要参加</span>
              </a>
            </div>
          </div>
        </div>

        <div class="related_info">

          <div class="mod" id="link-report">
            <h2>活动详情</h2>

            <div id="edesc_s" class="wr">
              <p v-html="event.content"></p>
            </div>
          </div>
        </div>
      </div>
    </a-card>
  </a-layout>
</template>

<script>
export default {
  data () {
    return {
      event
    }
  },
  mounted: function () {
    this.getdata()
  },
  methods: {
    getdata () {
      this.$axios.get('/event/' + this.$route.params.id).then(res => {
        console.log(res.data)
        this.event = res.data.data.eventDTO
      })
    }
  }
}
</script>

<style scoped>
@import "https://img3.doubanio.com/f/shire/859dba5cddc7ed1435808cf5a8ddde5792cd6e0c/css/douban.css";
@import "https://img3.doubanio.com/f/loc/6516dfea7e8ece9e37c50fe8e12113ef4e500820/css/loc/base.css";
@import "https://img3.doubanio.com/f/loc/b44c6774804b07beb8d416b8b8143d4f75b58907/css/loc/event/subject_home.css";

#link-report img {
  max-width: 100%;
}

#edesc_s.wr .middle {
  text-align: center;
}

#components-layout-demo-top-side-2 .logo {
  width: 120px;
  height: 31px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px 28px 16px 0;
  float: left;
}
</style>
