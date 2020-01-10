<template>
  <div class="Set">
    <el-form ref="form">
      <el-form-item label="左侧一文字">
        <el-input></el-input>
      </el-form-item>
      <el-form-item label="左侧一图片">
        <el-upload
          class="upload-demo"
          action="/web/upload"
          :on-preview="handlePreview"
          :on-remove="handleRemove"
          :file-list="fileList"
          list-type="picture">
          <el-button size="small" type="primary">点击上传</el-button>
          <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
        </el-upload>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Set',
  data () {
    return {
      fileList: []
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

  }
}
</script>

<style lang="scss" scoped>
.Set{
  width: 1280px;
  height: 100%;
  margin: 0 auto;
}
</style>
