<template>
  <div class="App" id="app">
    <app-header></app-header>
    <div class="App-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import appHeader from '@/components/app-header/index.vue'
export default {
  name: 'App',
  data () {
    return {

    }
  },
  mounted () {
    // 调用接口判断一些当前的信息
    this.$store.dispatch('auth')
  },
  methods: {

  },
  components: {
    appHeader
  }
}
</script>

<style lang="scss">
@import url('./assets/css/normalize.css');
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  width: 100%;
  height: 100%;
}
.App-container{
  width: 100%;
  height: calc(100% - 50px);
  overflow: hidden;
}
</style>
