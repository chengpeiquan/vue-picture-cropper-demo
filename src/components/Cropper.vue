<template>
  <div
    class="cropper-wrap"
    :style="boxStyle"
  >
    <img
      ref="cropperImg"
      :src="img"
      alt=""
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref, nextTick, onBeforeUnmount, watch } from 'vue-demi'
import Cropper from 'cropperjs'
import 'cropperjs/dist/cropper.css'

export default defineComponent({
  props: {
    boxStyle: {
      type: Object,
      required: false
    },
    img: String,
    options: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },
  setup (props) {
    const cropper = ref<any>(null);
    const cropperImg = ref<any>(null);

    const initCropper = (): void => {
      cropper.value = new Cropper(cropperImg.value, props.options);

      console.log('props', props);
      console.log(props.img);
      
      console.log('cropper', cropper.value);
    }

    const replace = (newImg: string, hasSameSize: boolean = false) => {
      return cropper.value.replace(newImg, hasSameSize);
    };

    watch( () => props.img, () => {
      console.log('watch', props.img);
    });

    onMounted( () => {
      nextTick( () => {
        initCropper();
      });
    })

    onBeforeUnmount( () => {
      cropper.value.destroy();
    });

    return {
      // 数据
      cropper,
      cropperImg,

      // 方法
      initCropper,
      replace
    }
  }
})
</script>

<style lang="stylus" scoped>
.cropper-wrap
  img
    display block
    max-width 100%
    max-height 100%
</style>