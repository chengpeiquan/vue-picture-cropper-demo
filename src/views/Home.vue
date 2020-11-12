<template>
  <section class="section">
    <h2>传照片</h2>
    <input
      type="file"
      accept="image/jpg, image/jpeg, image/png, image/gif"
      @change="getFile"
    />
    <button @click="reset">重置</button>
    <button @click="clear">清除</button>
    <button @click="getResult">裁剪</button>
  </section>

  <section class="section">
    <h2>裁剪区</h2>
    <ImageCropper
      :boxStyle="{
        width: '360px',
        height: '360px',
        backgroundColor: '#f8f8f8',
        margin: 'auto'
      }"
      :img="pic"
      :options="{
        viewMode: 1,
        dragMode: 'crop',
        aspectRatio: 16 / 9,
        preview: preview,
      }"
      @ready="ready"
    />
  </section>

  <section class="section">
    <h2>预览区</h2>
    <div class="preview" ref="preview"></div>
  </section>

  <section class="section">
    <h2>结果区</h2>
    <div class="result">
      <img :src="result" alt="">
    </div>
  </section>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, reactive, ref, nextTick } from 'vue-demi'
import readFile from 'js-file-reader'
import Cropper from '@/components/Cropper.vue'
import ImageCropper, { cropper } from '@/components/Cropper.tsx'

export default defineComponent({
  components: {
    ImageCropper,
    Cropper
  },
  setup () {
    let pic = ref<any>(null);
    const preview = ref<any>(null);
    const result = ref<any>(null);
    
    const getFile = async (e: any) => {
      const files = [...e.target.files]
      const result = await readFile(files);

      pic.value = result[0].base64;
    }

    /** 
     * 裁切结果
     */
    const getResult = (): void => {
      const BASE64_URL = cropper.value.getCroppedCanvas().toDataURL('image/png');
      result.value = BASE64_URL;
    }

    const ready = () => {
      console.log('ready');
      console.log(cropper.value);
    }

    const clear = (): void => {
      cropper.value.clear()
    }

    const reset = (): void => {
      cropper.value.reset()
    }


    onMounted( () => {
      // console.log('cropperPlugin.value', cropperPlugin.value);
    })

    return {
      // 数据
      pic,
      preview,
      result,

      // 方法
      getFile,
      getResult,
      ready,
      clear,
      reset
    }
  }
})
</script>

<style lang="stylus" scoped>
.section
  margin-bottom 40px
  .preview
    width 200px
    height @width
    overflow hidden
    margin auto
  .result
    width 200px
    height @width
    margin auto
    img
      width 100%
      object-fit cover
</style>