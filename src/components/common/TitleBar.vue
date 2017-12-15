<template>
  <div>
    <header class="headerindex">
      <button type="button" class="headerindex-back" v-if="hasBackBtn" @click="clickBack"></button>
      <h1 class="headerindex-title">{{ title }}</h1>
      <slot name="more"></slot>
      <button type="button" class="headerindex-more" v-if="hasSearchBtn"></button>
      <button type="button" class="headerindex-search" v-if="hasMoreBtn"></button>
    </header>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  },
  props: {
    title: {
      default: ''
    },
    hasBackBtn: {
      default: false
    },
    hasSearchBtn: {
      default: false
    },
    hasMoreBtn: {
      default: false
    },
    clickBack: {
      default: () => {}
    }
  },
  methods: {},
  computed: {},
  components: {}
}
</script>
