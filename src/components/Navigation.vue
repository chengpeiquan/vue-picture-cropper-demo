<template>
  <div class="navigation">
    <nav class="nav" v-if="navList.length">
      <router-link
        class="item"
        v-for="(item, index) in navList"
        :key="index"
        :to="item.path"
        exact
      >
        {{ item.meta.title }}
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { computed } from '@vue/reactivity'
import { useRouter } from 'vue-router'

const router = useRouter()
const routes = computed(() => router.options.routes)
const navList = routes.value.filter((r) => r.name !== 'home')
</script>

<style lang="less" scoped>
.navigation {
  display: flex;
  flex-shrink: 0;
  width: 200px;
  height: calc(100vh - 60px);
  box-sizing: border-box;
  border-right: 1px solid @color-gray;
  overflow-x: hidden;
  overflow-y: auto;
  user-select: none;
  .nav {
    display: flex;
    flex-direction: column;
    width: 100%;
    list-style: none;
    padding: 0;
    .item {
      position: relative;
      display: flex;
      align-items: center;
      height: 48px;
      font-size: 15px;
      color: @color-black;
      text-decoration: none;
      box-sizing: border-box;
      padding: 0 @margin;
      border-bottom: 1px solid @color-gray;
      transition: all 0.2s ease-in-out;
      &.cur {
        color: @color-blue;
        background-color: lighten(@color-blue, 40%);
        &::after {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 1px;
          height: 100%;
          background-color: lighten(@color-blue, 10%);
        }
      }
    }
  }
}
</style>
