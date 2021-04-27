<template>
  <div class="container">
    <Dialog />
    <a-divider />
    <DialogWithOptionsAPI />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Dialog from '@/components/Dialog.vue'
import DialogWithOptionsAPI from '@/components/DialogWithOptionsAPI.vue'

export default defineComponent({
  components: {
    Dialog,
    DialogWithOptionsAPI
  }
})
</script>

<style lang="stylus" scoped>
.container
  padding 40px
</style>