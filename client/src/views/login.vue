<template>
  <div class="login">
    <div class="login-container">
      <el-card>
        <el-form ref="form" :model="form" :rules="rules" label-width="90px">
          <div v-for="(item,index) in formArr" :key="item.id+index">
            <transition name="el-zoom-in-top">
              <el-form-item
                :label="item.name"
                :prop="item.id"
                v-if="(type === 'login' && item.show === 'all') || type === 'reg'"
              >
                <el-input
                  v-model="form[item.id]"
                  :type="item.type"
                  :class="{reduceWidth:item.id==='vai'}"
                  clearable
                  :placeholder="type==='login'?item.loginP:item.regP"
                />
                <span v-if="item.id==='vai'" @click="changeVai">{{vai}}</span>
              </el-form-item>
            </transition>
          </div>
          <div class="login-container-type">
            <span @click="changeType">{{type === 'login' ? '还没有账号，注册一个' : '已有账号，这就去登陆'}}</span>
          </div>
          <el-form-item>
            <el-button @click="submitForm()" type="primary">{{type === 'login' ? '登陆' : '注册'}}</el-button>
            <el-button @click="resetForm()">重新填写</el-button>
          </el-form-item>
        </el-form>
      </el-card>
    </div>
  </div>
</template>

<script>
import randomCode from '@/utils/random-code.js'
import md5 from '@/utils/md5.js'
import services from '@/services'
export default {
  name: 'login',
  data () {
    const validateAgain = (rule, value, callback) => {
      if (value !== this.form.pass) {
        callback(new Error('两次输入密码不一致'))
      }
    }
    const validatePhone = (rule, value, callback) => {
      if (!/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/.test(value)) {
        callback(new Error('请输入合法手机号码'))
      }
    }
    const validateVil = (rule, value, callback) => {
      if (value.toLocaleLowerCase() !== this.vai.toLocaleLowerCase()) {
        callback(new Error('验证码不正确'))
        this.changeVai()
      }
    }
    return {
      form: {
        user: '',
        pass: '',
        again: '',
        phone: '',
        vai: ''
      },
      formArr: [
        { name: '用户名', id: 'user', show: 'all', type: 'text', loginP: '用户名/手机号', regP: '用户名长度在 2 到 20 个字符' },
        { name: '密码', id: 'pass', show: 'all', type: 'password', loginP: '请输入密码', regP: '密码长度在 8 到 20 个字符' },
        { name: '确认密码', id: 'again', show: 'reg', type: 'password', loginP: '请重新输入密码', regP: '请重新输入密码' },
        { name: '手机号码', id: 'phone', show: 'reg', type: 'text', loginP: '请输入合法手机号', regP: '请输入合法手机号' },
        { name: '验证码', id: 'vai', show: 'reg', type: 'text', loginP: '请输入右边验证码', regP: '请输入右边验证码' }
      ],
      rules: {
        user: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 2, max: 20, message: '用户名长度在 2 到 20 个字符', trigger: 'blur' }
        ],
        pass: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 8, max: 20, message: '密码长度在 8 到 20 个字符', trigger: 'blur' }
        ],
        again: [
          { required: true, message: '请重新输入密码', trigger: 'blur' },
          { min: 8, max: 20, message: '密码长度在 8 到 20 个字符', trigger: 'blur' },
          { validator: validateAgain, trigger: 'blur' }
        ],
        phone: [
          { required: true, message: '请输入手机号码', trigger: 'blur' },
          { validator: validatePhone, trigger: 'blur' }
        ],
        vai: [
          { required: true, message: '请输入验证码', trigger: 'blur' },
          { validator: validateVil, trigger: 'blur' }
        ]
      },
      vai: randomCode(),
      type: 'login'
    }
  },
  mounted () {
  },
  methods: {
    changeType () {
      this.type = this.type === 'login' ? 'reg' : 'login'
      this.changeVai()
    },
    changeVai () {
      this.vai = randomCode()
      this.form.vai = ''
    },
    submitForm () {
      this.$refs.form.validate(valid => {
        if (!valid) {
          this.changeVai()
          return false
        }
      })
      this.$nextTick(() => {
        let isPass = document.querySelectorAll('.el-form-item__error').length === 0
        if (isPass) {
          let data = {}
          if (this.type === 'reg') {
            data = {
              user: this.form.user,
              pass: md5.md5(this.form.pass),
              type: this.type,
              phone: this.form.phone
            }
          } else {
            data = {
              user: this.form.user,
              pass: md5.md5(this.form.pass),
              type: this.type
            }
          }
          services.user(data)
            .then(res => {
              console.log(res.data)
              if (res.data.type) { // 管理员
                this.$router.replace({ name: 'admin' })
              } else {
                this.$router.replace({ name: 'home' })
              }
            })
            .catch(err => {
              this.$message.error(err.msg)
            })
        }
      })
    },
    resetForm () {
      this.$refs.form.resetFields()
    }
  },
  components: {

  }
}
</script>

<style lang="scss" scoped>
.login{
  width: 100%;
  height: 100%;
  overflow: hidden;
  background: url(../assets/img/bg/login.jpg) no-repeat center center;
  background-size: 100%;
  position: relative;
  &-container{
    width: 450px;
    overflow: hidden;
    position: absolute;
    top: 0;
    right: calc((100% - 1280px) / 2);
    &-type{
      text-align: center;
      overflow: hidden;
      margin-top: -5px;
      margin-bottom: 20px;
      span{
        font-size: 14px;
        text-decoration: underline;
        color: #409eff;
        cursor: pointer;
      }
    }
  }
  .reduceWidth{
    width: 200px;
    &~span{
      margin-left:20px;
      letter-spacing: 5px;
      padding: 10px;
      padding-left: 15px;
      text-align: center;
      background: #F2F6FC;
      border-radius: 5px;
      cursor: pointer;
    }
  }
}
</style>
