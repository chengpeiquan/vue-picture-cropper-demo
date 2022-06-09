<template>
  <Header />
  <div class="container">
    <Navigation />
    <div class="router-view">
      <div class="scroll-wrap">
        <router-view :key="key" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import Header from '@cp/Header.vue'
import Navigation from '@cp/Navigation.vue'

const route = useRoute()
const key = computed(() =>
  route.name ? String(route.name) + new Date() : String(route.path) + new Date()
)
</script>

<style lang="less" scoped>
.container {
  display: flex;
  flex: 1;
  overflow: hidden;
  .router-view {
    position: relative;
    display: flex;
    flex: 1;
    overflow: hidden;
    .scroll-wrap {
      position: absolute;
      top: @margin;
      right: @margin;
      bottom: @margin;
      left: @margin;
      overflow-x: hidden;
      overflow-y: auto;
    }
  }
}
</style>
