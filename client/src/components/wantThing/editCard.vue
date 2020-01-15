<template>
  <div class="editCard">
    <el-scrollbar wrap-style="max-height: 100%;" :native="false">
      <div class="editCard-todo">
        <h2>想做还没有做的事情</h2>
        <draggable
          class="list-group"
          tag="ul"
          v-model="todo"
          v-bind="dragOptions"
          :move="onMove"
          @start="isDragging=true"
          @end="isDragging=false"
        >
          <transition-group type="transition" :name="'flip-list'">
          <li class="list-group-item" v-for="(item,index) in todo" :key="index">
              <div>
                <p>
                  <span>事情：</span><el-input placeholder="做什么" v-model="item.text" clearable></el-input>
                </p>
                <p>
                  <span>人物：</span><el-input placeholder="和谁做" v-model="item.people" clearable></el-input>
                </p>
                <p>
                  <span>地点：</span><el-input placeholder="去哪做的" v-model="item.place" clearable></el-input>
                </p>
                <p>
                  <span>时间：</span>
                  <el-date-picker
                    v-model="item.time"
                    type="datetime"
                    placeholder="什么时间做"
                    align="right"
                    value-format="timestamp"
                    clearable
                    :picker-options="pickerOptions"
                  />
                </p>
              </div>
              <i class="add" v-if="index===0" @click="todo.push({...itemDemo})"></i>
              <i class="reduce" v-else @click="todo.splice(index,1)"></i>
            </li>
          </transition-group>
        </draggable>
      </div>
      <div class="editCard-done">
        <h2>做过觉得好玩的事情</h2>
        <draggable
          element="span"
          v-model="done"
          v-bind="dragOptions"
          :move="onMove"
        >
          <transition-group name="no" class="list-group" tag="ul">
            <li class="list-group-item" v-for="(item,index) in done" :key="index">
            <div>
                <p>
                  <span>事情：</span><el-input placeholder="做了什么" v-model="item.text" clearable></el-input>
                </p>
                <p>
                  <span>人物：</span><el-input placeholder="和谁做的" v-model="item.people" clearable></el-input>
                </p>
                <p>
                  <span>地点：</span><el-input placeholder="在哪做的" v-model="item.place" clearable></el-input>
                </p>
                <p>
                  <span>时间：</span>
                  <el-date-picker
                    v-model="item.time"
                    type="datetime"
                    placeholder="什么时间做的"
                    align="right"
                    value-format="timestamp"
                    clearable
                    :picker-options="pickerOptions"
                  />
                </p>
              </div>
              <i class="add" v-if="index===0" @click="done.push({...itemDemo})"></i>
              <i class="reduce" v-else @click="done.splice(index,1)"></i>
            </li>
          </transition-group>
        </draggable>
      </div>
      <el-button type="primary" @click="save">保存</el-button>
    </el-scrollbar>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
export default {
  name: 'editCard',
  components: {
    draggable
  },
  data () {
    return {
      todo: [
        { text: '', time: '', people: '', place: '' }
      ],
      itemDemo: {
        text: '', time: '', people: '', place: ''
      },
      done: [{ text: '', time: '', people: '', place: '' }],
      editable: true,
      isDragging: false,
      delayedDragging: false,
      pickerOptions: {
        shortcuts: [{
          text: '今天',
          onClick (picker) {
            picker.$emit('pick', new Date())
          }
        }, {
          text: '昨天',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24)
            picker.$emit('pick', date)
          }
        }, {
          text: '一周前',
          onClick (picker) {
            const date = new Date()
            date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
            picker.$emit('pick', date)
          }
        }]
      }
    }
  },
  methods: {
    onMove ({ relatedContext, draggedContext }) {
      const relatedElement = relatedContext.element
      const draggedElement = draggedContext.element
      return (
        (!relatedElement || !relatedElement.fixed) && !draggedElement.fixed
      )
    },
    save () {
      console.log(this.todo, this.done)
    }
  },
  computed: {
    dragOptions () {
      return {
        animation: 0,
        group: 'description',
        disabled: !this.editable,
        ghostClass: 'ghost'
      }
    }
  },
  watch: {
    isDragging (newValue) {
      if (newValue) {
        this.delayedDragging = true
        return
      }
      this.$nextTick(() => {
        this.delayedDragging = false
      })
    }
  }
}
</script>
<style lang="scss" scoped>
.editCard{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;
  overflow: hidden;
  /deep/ .el-scrollbar{
    height: 100%;
    .el-scrollbar__wrap{
      overflow-x: hidden;
    }
  }
  &-todo,&-done{
    min-height: 100px;
    ul{
      background: #fff;
      margin: 10px 0;
      border-radius: 10px;
      min-height: 20px;
      overflow: hidden;
      li{
        cursor: move;
        background: #F2F6FC;
        position: relative;
        margin: 10px 5px;
        padding: 5px;
        box-sizing: border-box;
        overflow: hidden;
        &>div{
          width: 80%;
          &>p{
            margin: 5px 0;
            &>span{
              display: inline-block;
              width: 60px;
              text-align: right;
            }
          }
          /deep/ .el-input{
            width: calc(100% - 60px);
          }
        }
        .add,.reduce{
          display: block;
          width: 40px;
          height: 40px;
          position: absolute;
          right: 5%;
          top: 50%;
          margin-top: -20px;
          margin-right: 10px;
          border-radius: 20px;
          background: #fff;
          cursor: pointer;
        }
        .add{
          &:before{
            content: "";
            width: 80%;
            height: 2px;
            background: #000;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -1px;
            margin-left: -40%;
          }
          &:after{
            content: "";
            height: 80%;
            width: 2px;
            background: #000;
            position: absolute;
            left: 50%;
            top: 50%;
            margin-left: -1px;
            margin-top: -40%;
          }
        }
        .reduce{
           &:before{
            content: "";
            width: 80%;
            height: 2px;
            background: #000;
            position: absolute;
            top: 50%;
            left: 50%;
            margin-top: -1px;
            margin-left: -40%;
          }
        }
      }
    }
  }
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>
