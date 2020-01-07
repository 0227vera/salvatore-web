<template>
<div class="card">
  <el-card v-for="(item,index) in data" :key="index">
    <p>
      <span>于</span><i>{{item.place}}</i>
      <span>和</span><span>{{item.people}}</span>
      <i>{{item.text}}</i>
    </p>
    <p>
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
}
</style>
