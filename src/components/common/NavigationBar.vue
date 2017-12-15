<template>
  <div>
    <nav class="navbottom">
      <dl class="navbottom-box">
        <dd class="navbottom-item">
          <router-link :to="'/conversation'" class="navbottom-item__conversation" @click="alert('msg')">消息</router-link>
        </dd>
        <dd class="navbottom-item">
          <router-link :to="'/scene'" class="navbottom-item__scene">场景</router-link>
        </dd>
        <dd class="navbottom-item">
          <router-link to="/service" class="navbottom-item__service">服务</router-link>
        </dd>
        <dd class="navbottom-item">
          <router-link to="/contact" class="navbottom-item__contact">联系人</router-link>
        </dd>
        <dd class="navbottom-item">
          <router-link to="/profile" class="navbottom-item__profile">我的</router-link>
        </dd>
      </dl>
    </nav>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {},
  methods: {},
  computed: {},
  components: {}
}
</script>
