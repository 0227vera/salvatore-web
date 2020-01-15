<template>
  <div class="Set">
    <div class="Set-left">
      <left-set />
    </div>
    <div class="Set-right">
      <edit-card />
    </div>
  </div>
</template>

<script>
import editCard from '@/components/wantThing/editCard'
import leftSet from '@/components/leftSet'
export default {
  name: 'Set',
  data () {
    return {
      form: {
        left: {
          text: '',
          textBg: [],
          swiper: []
        },
        right: {
        }
      }
    }
  },
  mounted () {
  },
  methods: {
    handlePreview () {

    },
    handleRemove () {

    }
  },
  components: {
    editCard,
    leftSet
  }
}
</script>

<style lang="scss" scoped>
.Set{
  width: 1280px;
  height: 100%;
  margin: 0 auto;
  &-right,&-left{
    float: left;
    width: 50%;
    height: 100%;
    overflow: hidden;
  }
}
</style>
