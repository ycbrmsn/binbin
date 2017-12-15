<template>
  <div class="mainfragment">
    <title-bar :title="title">

    </title-bar>
    <div class="titlebody">
      <dl class="list">
        <dd class="list-item">
          <router-link to="" class="list-itema icon-newfriend">新的朋友</router-link>
        </dd>
        <dd class="list-item">
          <router-link to="" class="list-itema icon-groupchat">群聊</router-link>
        </dd>
      </dl>
    </div>
  </div>
</template>

<script>
import TitleBar from '@/components/common/TitleBar'

export default {
  data () {
    return {
      title: '联系人'
    }
  },
  props: {},
  methods: {},
  computed: {},
  components: {
    TitleBar
  }
}
</script>
