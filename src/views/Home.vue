<template>
  <section class="section">
    <h2>传照片</h2>
    <input type="file" @change="getFile" />
    <button @click="reset">重置</button>
    <button @click="clear">清除</button>
  </section>

  <section class="section">
    <h2>裁剪区</h2>
    <tsxCropper
      ref="cropper"
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
        preview: preview
      }"
      @ready="ready"
      @crop="crop"
    />
    <!-- <Cropper
      ref="cropper"
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
        preview: preview
      }"
      @ready="ready"
      @crop="crop"
    /> -->
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
import { computed, defineComponent, reactive, ref } from 'vue-demi'
import readFile from 'js-file-reader'
import Cropper from '@/components/Cropper.vue'
import tsxCropper from '@/components/Cropper.tsx'

export default defineComponent({
  components: {
    tsxCropper,
    Cropper
  },
  setup () {
    const cropper = ref<any>(null);
    const pic = ref<any>(null);
    const preview = ref<any>(null);
    const result = ref<any>(null);
    
    const getFile = async (e: any) => {
      const files = [...e.target.files]
      const result = await readFile(files);
      cropper.value.replace(result[0].base64);

      // 获取转换结果，需要异步
      setTimeout(() => {
        getResult();
      }, 10);
    }

    /** 
     * 裁切结果
     */
    const getResult = (): void => {
      const BASE64_URL = cropper.value.cropper.getCroppedCanvas().toDataURL('image/png');

      result.value = BASE64_URL;
    }

    const ready = () => {
      // cropper.value.cropper.move(50, -100);
    }

    const replace = (newImage: string) => {
      cropper.value.replace(newImage);
    }

    const reset = () => {
      cropper.value.cropper.reset();
    }

    const clear = () => {
      cropper.value.cropper.clear();
    }

    const crop = (e: any) => {
      // cropper.value.cropper.crop();
      // console.log(e);
      
    }

    return {
      // 数据
      cropper,
      pic,
      preview,
      result,

      // 方法
      getFile,
      getResult,
      ready,
      replace,
      reset,
      clear,
      crop
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