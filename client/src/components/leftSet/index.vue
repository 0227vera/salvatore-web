<template>
  <div class="index">
    <el-scrollbar wrap-style="max-height: 100%;" :native="false">
      <el-form label-width="100px">
        <el-form-item label="左侧文字">
          <el-input v-model="text" placeholder="一句你喜欢的话" clearable/>
        </el-form-item>
        <el-form-item label="左侧图片">
          <el-upload
            class="upload-demo"
            action="/web/upload"
            :file-list="textBg"
            :on-remove="onRemove"
            :on-success="onSuccess"
            :limit="1"
            list-type="picture-card">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item label="左侧图片集">
          <el-upload
            class="upload-demo"
            action="/web/upload"
            :file-list="swiper"
            :on-remove="onRemoveSwiper"
            :on-success="onSuccessSwiper"
            multiple
            list-type="picture-card">
            <el-button size="small" type="primary">点击上传</el-button>
            <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="save">保存</el-button>
        </el-form-item>
      </el-form>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      text: '',
      textBg: [],
      swiper: []
    }
  },
  mounted () {
  },
  methods: {
    save () {
      let get = {
        text: this.text,
        textBg: this.textBg,
        swiper: this.swiper
      }
      console.log(get)
    },
    onSuccess (res) {
      if (res.success) {
        this.textBg = [...res.data]
      }
    },
    onSuccessSwiper (res) {
      if (res.success) {
        this.swiper = this.swiper.concat(res.data)
      }
    },
    onRemove () {
      this.textBg = []
    },
    onRemoveSwiper (file) {
      console.log(file)
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.index{
  width: 100%;
  height: 100%;
  background: #fff;
  box-sizing: border-box;
  padding: 10px;
  border-radius: 10px;
  /deep/ .el-scrollbar{
    height: 100%;
    .el-scrollbar__wrap{
      overflow-x: hidden;
    }
  }
}
</style>
