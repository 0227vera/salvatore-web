<template>
  <div class="Home">
    <div class="Home-left">
      <div class="Home-left-first">
        <vague-img />
      </div>
      <div class="Home-left-second">
        <swiper />
      </div>
      <div class="Home-left-third">
        <hover-follow />
      </div>
    </div>
    <div class="Home-container">
    </div>
    <div class="Home-right">
      <want-thing />
    </div>
  </div>
</template>

<script>
import HoverFollow from '@/components/hoverFollow'
import VagueImg from '@/components/vagueImg'
import swiper from '@/components/swiper'
import WantThing from '@/components/wantThing'
export default {
  name: 'Home',
  data () {
    return {

    }
  },
  mounted () {
  },
  methods: {

  },
  components: {
    HoverFollow,
    VagueImg,
    swiper,
    WantThing
  }
}
</script>

<style lang="scss" scoped>
.Home{
  width: 100%;
  height: 100%;
  overflow: hidden;
  &-container{
    width: 1280px;
    height: 100%;
    margin: 0 auto;
    float: left;
  }
  &-left,&-right{
    width: calc(50% - 640px);
    height: 100%;
    float: left;
    box-sizing: border-box;
    padding: 10px;
  }
  &-left{
    &-first,&-second{
      height: 30%;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
    }
    &-third{
      height: 40%;
      width: 100%;
      border-radius: 10px;
      overflow: hidden;
    }
  }
}
</style>
