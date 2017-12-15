<template>
  <div class="animationbox">
    <title-bar :title="title" :hasBackBtn="true" :clickBack="clickBack"></title-bar>
    <div class="titlebody__s">
      <dl class="list3">
        <dd class="list3-item">
          <router-link to="" class="list3-itema">
            <img src="../../../assets/fx_default_useravatar.png" class="list3-img">
            场景一
          </router-link>
        </dd>
        <dd class="list3-item">
          <router-link to="" class="list3-itema">
            <img src="../../../assets/fx_default_useravatar.png" class="list3-img">
            场景二
          </router-link>
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
      title: '足迹'
    }
  },
  props: {},
  methods: {
    clickBack () {
      this.$router.push('/profile')
    }
  },
  computed: {},
  components: {
    TitleBar
  }
}
</script>
