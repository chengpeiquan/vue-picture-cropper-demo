<template>
  <div class="multiple-wrap">
    <div class="item">
      <Crop1 imgId="crop1" />
    </div>
    <div class="item">
      <Crop2 imgId="crop2" />
    </div>
  </div>
</template>

<script setup lang="ts">
import Crop1 from './composition.vue'
import Crop2 from './composition.vue'
</script>

<style lang="less" scoped>
.multiple-wrap {
  display: flex;
  .item {
    display: flex;
    flex: 1;
    flex-direction: column;
    overflow: hidden;
  }
}
</style>
