<template>
  <div class="index">
    <el-carousel :interval="3000" type="card" indicator-position=false>
      <el-carousel-item v-for="(item,index) in img" :key="index">
        <img :src="item.img" alt="">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      img: [
        { img: require(`@/assets/img/swiper/img0.png`) },
        { img: require(`@/assets/img/swiper/img1.jpg`) },
        { img: require(`@/assets/img/swiper/img2.png`) },
        { img: require(`@/assets/img/swiper/img3.jpg`) },
        { img: require(`@/assets/img/swiper/img4.jpg`) },
        { img: require(`@/assets/img/swiper/img5.jpg`) },
        { img: require(`@/assets/img/swiper/img6.jpg`) },
        { img: require(`@/assets/img/swiper/img7.jpg`) },
        { img: require(`@/assets/img/swiper/img8.png`) },
        { img: require(`@/assets/img/swiper/img9.jpg`) }
      ]
    }
  },
  mounted () {
  },
  methods: {

  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.index{
  width: 100%;
  height: 100%;
  /deep/ .el-carousel{
    height: 100%;
    width: 100%;
    overflow: hidden;
    .el-carousel__container{
      height: calc(100% - 30px);
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
    .el-carousel__button{
      width: 12px;
    }
  }
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
</style>
