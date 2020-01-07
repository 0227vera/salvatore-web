<template>
<div class="card">
  <el-card v-for="(item,index) in data" :key="index" class="card-item">
    <p>
      <span v-if="item.place">{{item.place}}</span>
      <span v-if="item.people">{{item.people}}</span>
      <span v-if="item.text">{{item.text}}</span>
    </p>
    <p v-if="item.time">
      <span>{{item.time}}</span>
    </p>
  </el-card>
</div>

</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      default: () => []
    }
  },
  name: 'card',
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
.card{
  width: 100%;
  height: auto;
  overflow: hidden;
  margin-top: 5px;
  margin-bottom: 10px;
  &-item{
    cursor: pointer;
    /deep/ .el-card__body{
      padding: 5px;
    }
    p{
      &:nth-child(1){
        font-size: 14px;
        overflow: hidden;
        span{
          padding: 0 5px;
          color: #333;
          background: #F2F6FC;
          margin: 0 2px;
          border-radius: 5px;
        }
      }
      &:nth-child(2){
        text-align: right;
        font-size: 12px;
        color: #666;
        margin-top: 5px;
      }
    }
  }
}
</style>
