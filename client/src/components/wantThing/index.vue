<template>
  <div class="index">
    <h2>想做还没有做的事情</h2>
    <card :data="want" />
    <h2>做过觉得好玩的事情</h2>
    <card :data="done" />
  </div>
</template>

<script>
import card from './card'
import format from '@/utils/format'
export default {
  name: 'index',
  data () {
    return {
      want: [
        { text: '打一场全场篮球', time: format(), people: '铜锣湾全体', place: '曹妃甸梅园篮球场' },
        { text: '旅游中国', time: format(), people: '秦雪薇、廖轩', place: '四川、重庆、阳朔等' },
        { text: '欧洲旅游', time: format(), people: '秦雪薇、廖轩', place: '瑞典、法国、德国等' }
      ],
      done: [
        { text: '找一份工作', time: format(), people: '自己', place: '北京' },
        { text: '谈一场恋爱', time: format(), people: 'salvatore and vare', place: '北京' },
        { text: '学会做饭', time: format(), people: 'salvatore', place: '北京' }
      ]
    }
  },
  mounted () {
  },
  methods: {

  },
  components: {
    card
  }
}
</script>

<style lang="scss" scoped>
.index{
  width: 100%;
  height: 100%;
  overflow: hidden;
  h2{
    width: 100%;
    text-align: center;
    background: #fff;
    padding: 5px;
  }
}
</style>
