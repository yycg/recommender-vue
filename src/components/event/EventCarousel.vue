<template>
  <a-carousel autoplay arrows dots-class="slick-dots slick-thumb">
    <div
      slot="prevArrow"
      slot-scope="props"
      class="custom-slick-arrow"
      style="left: 10px;zIndex: 1"
    >
      <a-icon type="left-circle" />
    </div>
    <div slot="nextArrow" slot-scope="props" class="custom-slick-arrow" style="right: 10px">
      <a-icon type="right-circle" />
    </div>
    <a slot="customPaging" slot-scope="props">
      <img :src="getImgUrl(props.i)" />
    </a>
    <div v-for="(url, i) in urls" :key="i">
      <img :src="url">
    </div>
  </a-carousel>
</template>

<script>
export default {
  data () {
    return {
      urls: [
        'https://img1.doubanio.com/pview/event_poster/raw/public/592ba40463f5c86.jpg',
        'https://img1.doubanio.com/pview/event_poster/raw/public/2f29b84beda8a6c.jpg'
      ]
    }
  },
  methods: {
    getImgUrl (i) {
      return this.urls[i]
    }
  }
}
</script>
<style scoped>
/* For demo */
.ant-carousel >>> .slick-dots {
  height: auto;
}
.ant-carousel >>> .slick-slide img {
  border: 5px solid #fff;
  display: block;
  margin: auto;
  max-width: 80%;
}
.ant-carousel >>> .slick-thumb {
  bottom: -45px;
}
.ant-carousel >>> .slick-thumb li {
  width: 60px;
  height: 45px;
}
.ant-carousel >>> .slick-thumb li img {
  width: 100%;
  height: 100%;
  filter: grayscale(100%);
}
.ant-carousel >>> .slick-thumb li.slick-active img {
  filter: grayscale(0%);
}

/* For demo */
.ant-carousel >>> .slick-slide {
  /* text-align: center;
  height: 160px;
  line-height: 160px;
  background: #364d79;
  overflow: hidden; */
}

.ant-carousel >>> .custom-slick-arrow {
  width: 25px;
  height: 25px;
  font-size: 25px;
  color: #563d7c;
  background-color: rgba(31, 45, 61, 0.11);
  opacity: 0.3;
}
.ant-carousel >>> .custom-slick-arrow:before {
  display: none;
}
.ant-carousel >>> .custom-slick-arrow:hover {
  opacity: 0.5;
}

.ant-carousel >>> .slick-slide h3 {
  color: #fff;
}
</style>
