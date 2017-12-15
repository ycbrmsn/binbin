<template>
  <div class="mainfragment">
    <title-bar :title="title">

    </title-bar>
    <div class="titlebody">
      <dl class="list">
        <dd class="list-item">
          <router-link to="" class="list-itema icon-saoyisao">扫一扫</router-link>
        </dd>
        <dd class="list-item">
          <router-link to="" class="list-itema icon-yaoyiyao">摇一摇</router-link>
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
      title: '服务'
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
