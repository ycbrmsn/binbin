<template>
  <div class="mainfragment">
    <title-bar :title="title" :hasSearchBtn="true" :hasMoreBtn="true">

    </title-bar>
    <div class="titlebody">
      
    </div>
  </div>
</template>

<script>
import TitleBar from '@/components/common/TitleBar'

export default {
  data () {
    return {
      title: '消息'
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
