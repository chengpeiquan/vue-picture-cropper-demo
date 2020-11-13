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
import { defineComponent, onMounted, ref, nextTick, onBeforeUnmount, watch } from 'vue'
import Cropper from 'cropperjs'

export let cropper = ref<any>(null);
export const myName = '程沛权';

// export default defineComponent({
const VueImageCropper = defineComponent({
  name: 'VueImageCropper',
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
    const cropperImg = ref<any>(null);

    const initCropper = (): void => {
      
      nextTick( () => {
      cropper.value = new Cropper(cropperImg.value, props.options);

      console.log('[plugin] props', props);
      console.log('[plugin] props.img', props.img);
      console.log('[plugin] cropper', cropper.value);
      });
    }

    const replace = (newImg: string, hasSameSize: boolean = false) => {
      return cropper.value.replace(newImg, hasSameSize);
    };

    watch( () => props.img, () => {
      console.log('[plugin] watch', props.img);
    });

    onMounted( () => {
      // nextTick( () => {
        initCropper();
      // });
    })

    onBeforeUnmount( () => {
      cropper.value.destroy();
    });

    return {
      // 数据
      cropperImg,

      // 方法
      initCropper,
      replace
    }
  }
});

export default VueImageCropper;
</script>

<style scoped>
@import 'cropperjs/dist/cropper.css';

.cropper-wrap img {
  display: block;
  max-width: 100%;
  max-height: 100%;
}
</style>