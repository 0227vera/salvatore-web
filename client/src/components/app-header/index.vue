<template>
  <div class="index">
    <div class="index-bg"></div>
    <ul class="index-content">
      <li v-for="(item,index) in nav" :key="item.path + index" @click="login ? active=index : null">
        <router-link :to="item.path">
          <img :src="require(`@/assets/img/nav-icon/${item.path.slice(1)}${active === index ? '-active' : ''}.png`)">
          <span :class="{active:active === index}">{{item.name}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'index',
  data () {
    return {
      nav: [
        { name: '首页', path: '/home' },
        { name: '数据统计', path: '/chars' },
        { name: '内容页面', path: '/content' },
        { name: '管理员', path: '/admin' },
        { name: '登陆/注册', path: '/login' }
      ],
      active: this.login ? 0 : 4
    }
  },
  computed: {
    ...mapState({
      login: state => state.login
    })
  },
  watch: {
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
