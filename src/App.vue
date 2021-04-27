<template>
  <div class="container">
    <Dialog />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dialog from '@cp/dialog.vue'

export default defineComponent({
  components: {
    Dialog
  }
})
</script>

<style lang="stylus" scoped>
.container
  padding 40px
</style>