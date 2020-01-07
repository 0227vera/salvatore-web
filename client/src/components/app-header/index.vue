<template>
  <div class="index">
    <div class="index-bg"></div>
    <ul class="index-content">
      <li v-for="(item,index) in nav" :key="item.path + index" @click="tagClick(index)">
        <router-link :to="item.path">
          <img :src="require(`@/assets/img/nav-icon/${item.path.slice(1)}${tabIndex === index ? '-active' : ''}.png`)">
          <span :class="{active:tabIndex === index}">{{item.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import services from '@/services'
export default {
  name: 'index',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      nav: state => state.nav,
      tabIndex: state => state.tabIndex,
      isLogin: state => state.isLogin
    })
  },
  watch: {
  },
  mounted () {
  },
  methods: {
    tagClick (index) {
      if (this.nav.length - 1 === index && this.isLogin) {
        let data = { type: 'logout' }
        services.user(data)
          .then(res => {
            this.$router.replace({ name: 'home' })
          })
          .catch(err => {
            this.$message.error(err.msg)
          })
      }
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.index{
  width: 100%;
  height: 50px;
  position: relative;
  &-content{
    height: 100%;
    width: 1280px;
    position: absolute;
    top: 0;
    z-index: 4;
    left: 50%;
    margin-left: -640px;
    background: #ffffff;
    li{
      float: left;
      &:hover{
        background: rgb(217, 236, 255);
        border-radius: 5px;
      }
      a{
        color: #666;
        padding: 0 20px;
        cursor: pointer;
        display: block;
        overflow: hidden;
        img{
          display: inline;
          float: left;
          margin-top: 13px;
          margin-right: 5px;
        }
        span{
          display: inline;
          float: left;
          line-height: 50px;
        }
        .active{
          color: #409EFF;
        }
      }
    }
  }
  &-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background: #F2F6FC;
    top: 0;
    z-index: 2;
  }
}
</style>
