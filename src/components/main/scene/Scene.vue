<template>
  <div class="mainfragment">
    <title-bar :title="title" :hasSearchBtn="true" :hasMoreBtn="true">

    </title-bar>
    <div class="titlebody">
      <section class="imageswitcher">
        <el-carousel height="16rem">
          <el-carousel-item v-for="item in 4" :key="item">
            <h3>{{ item }}</h3>
          </el-carousel-item>
        </el-carousel>
      </section>
      <dl class="grid4">
        <dd class="grid4-item" v-for="(item, index) in categories">
          <a href="" class="grid4-a">
            <img src="../../../assets/fx_default_useravatar.png" class="grid4-img">
            {{ item.txt }}
          </a>
        </dd>
      </dl>
      <h1 class="title1 linegap">足迹</h1>
      <dl class="grid4">
        <dd class="grid4-item" v-for="(item, index) in footprints">
          <a href="" class="grid4-a">
            <img src="../../../assets/fx_default_useravatar.png" class="grid4-img">
            {{ item.txt }}
          </a>
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
      title: '场景',
      categories: [
        {
          src: '',
          txt: '会议'
        },
        {
          src: '',
          txt: '仲裁'
        },
        {
          src: '',
          txt: '餐饮'
        },
        {
          src: '',
          txt: '旅游'
        },
        {
          src: '',
          txt: '团队'
        },
        {
          src: '',
          txt: '单位'
        },
        {
          src: '',
          txt: '直播'
        },
        {
          src: '',
          txt: '其他'
        }
      ],
      footprints: [
        {
          src: '',
          txt: '场景一'
        },
        {
          src: '',
          txt: '场景二124234234234'
        }
      ]
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
