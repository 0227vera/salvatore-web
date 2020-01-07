<template>
  <div class="index">
    <div class="content">
      <p>老实人的坏，就像鸡蛋里面的骨头，给人一种不期待的痛</p>
      <p>仗义每多屠狗辈，负心多为读书人</p>
      <p>人生是自己的，不管是儿孙满堂还是孤家寡人，总要走完它</p>
      <p>希望mg既可以朝九晚五又可以浪迹天涯</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {

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
.index {
  width: 100%;
  height: 100%;
  position: relative;
  background: url(./xuan.jpg) center center;
  background-size: 100%;
  padding: 10px;
  box-sizing: border-box;
}
.content {
  /* 是否显示上层的磨砂 */
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  color: #fff;
  left: 50%;
  overflow: hidden;
  transform: translate(-50%,-50%);
  border-radius: 10px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.5);
  z-index: 100;
  opacity: .6;/* 控制文字的显示不透明度 */
  box-sizing: border-box;
  /*不会把盒子撑开*/
}
.content::before {
  content: "";
  position: absolute;
  top: 0px;
  left: 0px;
  right: 0px;
  bottom: 0px;
  z-index: -1; /* 注意x-index的使用 */
  /*-1 可以当背景*/
  -webkit-filter: blur(30px);
  filter: blur(30px);
  margin: -10px;  /*消除边缘透明*/
  background: url(./xuan.jpg) left top;/* 通过改变宽高改变下层的模糊度 */
  background-size: 100% 100%;
  background-attachment: fixed;
}
.content p {
  line-height: 1.7;
  padding: 10px;
}
.container{
  width: 100%;
  height: 100%;
  text-align: center;
  color: #fff;
}
</style>
