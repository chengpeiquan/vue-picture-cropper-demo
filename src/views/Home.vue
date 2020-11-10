<template>
  <div>
    <Cropper
      :img="require('@/assets/avatar.jpg')"
      :options="{
        aspectRatio: 16 / 9
      }"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Cropper from '@/components/Cropper.vue'

export default defineComponent({
  components: {
    Cropper
  },
  setup () {
    

    return {
    }
  }
})
</script>

<style scoped>

</style>