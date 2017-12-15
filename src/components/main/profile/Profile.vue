<template>
  <div class="mainfragment">
    <title-bar :title="title">

    </title-bar>
    <div class="titlebody">
      <header class="profileheader">
        <img src="" class="profileheader-img">
        <br>
        <span class="profileheader-name">姓名</span>
        <span class="profileheader-authentic">
          <a class="icon-check"></a>
          实名认证
        </span>
      </header>
      <section>
        <dl class="list">
          <dd class="list-item">
            <router-link to="" class="list-itema icon-xiangce">相册</router-link>
          </dd>
          <dd class="list-item">
            <router-link to="" class="list-itema icon-qianbao">钱包</router-link>
          </dd>
          <dd class="list-item">
            <router-link to="/profile/footprint" class="list-itema icon-zuji">足迹</router-link>
          </dd>
          <dd class="list-item">
            <router-link to="/profile/setting" class="list-itema icon-shezhi">设置</router-link>
          </dd>
        </dl>
        <dl class="list listgap">
          <dd class="list-item">
            <router-link to="" class="list-itema icon-zjc">中军创</router-link>
          </dd>
          <dd class="list-item">
            <router-link to="" class="list-itema icon-zxzc">在线仲裁</router-link>
          </dd>
          <dd class="list-item">
            <router-link to="" class="list-itema icon-mlxc">美丽乡村</router-link>
          </dd>
        </dl>
      </section>
    </div>
  </div>
</template>

<script>
import TitleBar from '@/components/common/TitleBar'

export default {
  data () {
    return {
      title: '我的'
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
