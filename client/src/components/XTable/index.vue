<template>
  <div class="index">
    <div class="index-table">
      <el-table
        height="100%"
        highlight-current-row
        :data="data"
        @selection-change="handleSelectionChange"
      >
        <el-table-column type="selection" width="60" v-if="showSelect" align="center" />
        <el-table-column label="序号" type="index" width="60" v-if="showIndex" align="center" />
        <el-table-column
          v-for="(item,index) in header"
          :key="item.id + index"
          :label="item.name"
          :prop="item.id"
          align="center"
        >
          <template slot-scope="scope">
            <div v-if="item.id === 'opt'">
              <slot name="opt" :item="scope.row"></slot>
            </div>
            <div v-else>
              {{scope.row[item.id]}}
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="index-page">
      <div class="index-page-opt">
        <el-button type="text" @click="refresh">刷新</el-button>
        <el-button type="text" @click="exportSelectData">选中导出数据</el-button>
      </div>
      <el-pagination
        v-if="showPage"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 50, 100, 200, 300, 400]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  props: {
    // 表头
    header: {
      type: Array,
      default: () => []
    },
    // 表体数据
    data: {
      type: Array,
      default: () => []
    },
    // 是否需要分页
    showPage: {
      type: Boolean,
      default: true
    },
    // 是否需要显示序号
    showIndex: {
      type: Boolean,
      default: true
    },
    // 是否显示选中框
    showSelect: {
      type: Boolean,
      default: true
    },
    // 总共有多少数据
    total: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentPage: 1,
      pageSize: 50,
      selectData: []
    }
  },
  mounted () {
  },
  methods: {
    handleSizeChange (val) {
      this.pageSize = val
      this.$emit('page-change', { size: this.pageSize, current: this.currentPage })
    },
    handleCurrentChange (val) {
      this.currentPage = val
      this.$emit('page-change', { size: this.pageSize, current: this.currentPage })
    },
    refresh () {
      this.$emit('page-change', { size: this.pageSize, current: this.currentPage })
    },
    handleSelectionChange (val) {
      this.selectData = val
    },
    exportSelectData () {
      console.log(this.header, this.selectData)
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.index{
  height: 100%;
  width: 100%;
  background: #fff;
  &-page{
    height: 40px;
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
    &-opt{
      float: left;
    }
    /deep/ .el-pagination{
      margin-top: 4px;
      float: right;
    }
  }
  &-table{
    height: calc(100% - 40px);
    width: 100%;
  }
}
</style>
