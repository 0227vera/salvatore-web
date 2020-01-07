<template>
  <div class="admin">
    <div class="admin-header">
      <el-form :inline="true" :model="form">
        <el-form-item v-for="(item,index) in formArr" :key="index" :label="item.name">
          <el-input v-if="item.type === 'text'" v-model="form[item.id]" :placeholder="item.placeholder" clearable />
          <el-date-picker
            v-else-if="item.type === 'time'"
            v-model="form[item.id]"
            type="datetimerange"
            :picker-options="pickerOptions"
            value-format="timestamp"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            align="right"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getTableData">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="admin-container">
      <x-table
        v-loading="loading"
        :header="table.header"
        :data="table.data"
        :showPage="table.showPage"
        :showIndex="table.showIndex"
        :showSelect="table.showSelect"
        :total="table.total"
        @page-change="pageChange"
      >
        <div slot="opt" slot-scope="{item}">
          <el-button size="mini" type="primary" v-if="item.type==='普通用户'">提升为管理员</el-button>
          <el-button size="mini" v-if="item.type==='普通用户'">删除此人</el-button>
        </div>
      </x-table>
    </div>
  </div>
</template>

<script>
import XTable from '@/components/XTable'
import services from '@/services'
import format from '@/utils/format'
export default {
  name: 'Admin',
  data () {
    return {
      // 数据筛选
      form: {
        user: '',
        phone: '',
        c_time: []
      },
      formArr: [
        { name: '姓名', id: 'user', type: 'text', placeholder: '可模糊查询姓名' },
        { name: '电话', id: 'phone', type: 'text', placeholder: '可模糊查询电话' },
        { name: '注册时间', id: 'c_time', type: 'time', placeholder: '选择注册时间' }
      ],
      pickerOptions: {
        shortcuts: [{
          text: '最近一周',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近一个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 30)
            picker.$emit('pick', [start, end])
          }
        }, {
          text: '最近三个月',
          onClick (picker) {
            const end = new Date()
            const start = new Date()
            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
            picker.$emit('pick', [start, end])
          }
        }]
      },
      // 表格所有数据以及相关配置
      table: {
        header: [
          { id: 'user', name: '姓名' },
          { id: 'phone', name: '电话' },
          { id: 'type', name: '类型' },
          { id: 'c_time', name: '注册时间' },
          { id: 'opt', name: '操作' }
        ],
        data: [],
        showPage: true,
        showIndex: true,
        showSelect: true,
        total: 0
      },
      loading: false,
      page: {
        size: 50,
        current: 1
      }
    }
  },
  mounted () {
    this.getTableData()
  },
  methods: {
    getTableData () {
      this.loading = true
      let cTime = this.form['c_time'].length ? this.form['c_time'].join('-') : ''
      let form = { ...this.form, 'c_time': cTime }
      let get = { ...this.page, ...form }
      services.getMembers(get)
        .then(res => {
          this.loading = false
          res.data = res.data.map(item => ({ ...item, type: item.type ? '管理员' : '普通用户', c_time: format(item.c_time) }))
          this.table.data = res.data
          this.table.total = res.total
        })
        .catch(err => {
          this.$message.error(err.msg || '获取列表数据出现错误')
        })
    },
    pageChange (data) {
      this.page = { ...this.page, ...data }
      this.getTableData()
    }
  },
  components: {
    XTable
  }
}
</script>

<style lang="scss" scoped>
.admin{
  height: 100%;
  width: 1280px;
  margin: 0 auto;
  overflow-x: hidden;
  padding: 10px;
  box-sizing: border-box;
  &-header{
    height: 50px;
    width: 100%;
  }
  &-container{
    height: calc(100% - 50px);
    width: 100%;
  }
}
</style>
