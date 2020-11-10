<template>
  <div class="cropper-wrap">
    <img
      ref="cropperImg"
      :src="img"
      alt=""
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

export default defineComponent({
  props: {
    img: String,
    options: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup (props) {
    const cropperImg = ref<any>(null);

    const initCropper = (): void => {
      console.log(props);
      new Cropper(cropperImg.value, props.options);
    }
    
    onMounted( () => {
      console.log(cropperImg.value);
      initCropper();
    })

    return {
      // 数据
      cropperImg,

      // 方法
      initCropper
    }
  }
})
</script>

<style lang="stylus" scoped>
.cropper-wrap
  width 600px
  height 600px
  margin 20px auto
  img
    display block
    max-width 100%
    max-height 100%
</style>