<template>
  <div class="animationbox bg__white">
    <title-bar :title="title" :hasBackBtn="true" :clickBack="clickBack">

    </title-bar>
    <div class="titlebody__s">
      <dl class="list2">
        <dd class="list2-title">
          <a class="list2-titlea">新消息提醒</a>
        </dd>
        <dd class="list2-item">
          <a href="javascript:;" class="list2-itema" @click="change('recieveMessageNotice')">
            接收新消息通知
          </a>
          <el-switch v-model="recieveMessageNotice"></el-switch>
        </dd>
        <dd class="list2-item">
          <a href="javascript:;" class="list2-itema" @click="change('voice')">声音</a>
          <el-switch v-model="voice"></el-switch>
        </dd>
        <dd class="list2-item">
          <a href="javascript:;" class="list2-itema" @click="change('vibrate')">震动</a>
          <el-switch v-model="vibrate"></el-switch>
        </dd>
      </dl>
      <dl class="list2">
        <dd class="list2-title">
          <a class="list2-titlea">聊天设置</a>
        </dd>
        <dd class="list2-item">
          <a href="javascript:;" class="list2-itema" @click="change('useSpeaker')">使用扬声器播放语音</a>
          <el-switch v-model="useSpeaker"></el-switch>
        </dd>
        <dd class="list2-item">
          <a href="javascript:;" class="list2-itema" @click="change('deleteMsgWhenExitGroup')">退出群组时删除聊天数据</a>
          <el-switch v-model="deleteMsgWhenExitGroup"></el-switch>
        </dd>
        <dd class="list2-item">
          <a href="javascript:;" class="list2-itema" @click="change('adaptiveVideoEncode')">视频自适应码率编码</a>
          <el-switch v-model="adaptiveVideoEncode"></el-switch>
        </dd>
      </dl>
      <div class="linegapbox">
        <el-button type="primary" class="matchbutton">退出登录</el-button>
      </div>
    </div> 
  </div>
</template>

<script>
import TitleBar from '@/components/common/TitleBar'

export default {
  data () {
    return {
      title: '设置',
      recieveMessageNotice: true,
      voice: true,
      vibrate: true,
      useSpeaker: true,
      deleteMsgWhenExitGroup: true,
      adaptiveVideoEncode: false
    }
  },
  props: {},
  methods: {
    clickBack () {
      this.$router.push('/profile')
    },
    change (flag) {
      let that = this
      that[flag] = !that[flag]
    }
  },
  computed: {},
  components: {
    TitleBar
  }
}
</script>
