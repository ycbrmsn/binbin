<template>
  <div class="animationbox">
    <router-view></router-view>
    <navigation-bar></navigation-bar>
  </div>
</template>

<script>
import NavigationBar from '@/components/common/NavigationBar'

export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {},
  computed: {},
  components: {
    NavigationBar
  }
}
</script>
