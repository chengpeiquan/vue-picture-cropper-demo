<template>
  <div class="multiple-wrap">
    <div class="item">
      <Crop />
    </div>
    <div class="item">
      <Crop />
    </div>
  </div>
</template>

<script setup lang="ts">
import Crop from './composition.vue'
</script>

<style lang="less" scoped>
.multiple-wrap {
  display: flex;
  .item {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
    margin-right: @margin;
  }
}
</style>
