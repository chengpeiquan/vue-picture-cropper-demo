<template>
  <!-- 选择图片 -->
  <section class="section">
    <h2>这是一个使用 Vue 2.0 选项式 API 语法的组件</h2>
    <p>请先点击按钮选择图片，会进入裁切处理环节</p>

    <!-- 设置一个按钮 -->
    <a-button class="select-picture">
      <template #icon><UploadOutlined /></template>
      <span>选择图片</span>
      <input
        ref="uploadInput"
        type="file"
        accept="image/jpg, image/jpeg, image/png, image/gif"
        @change="selectFile"
      >
    </a-button>
    <!-- 设置一个按钮 -->

    <a
      href="https://github.com/chengpeiquan/vue-picture-cropper-demo/blob/main/src/components/DialogWithOptionsAPI.vue"
      target="_blank"
    >
      查看该 DEMO 组件的源码
    </a>
  </section>
  <!-- 选择图片 -->

  <!-- 结果预览区 -->
  <section class="section" v-if="result">
    <p>裁切后的Base64图片预览：</p>
    <div class="preview" ref="preview">
      <img :src="result" alt="">
    </div>
    <p>可以按 F12 查看打印的 base64 / blob 结果</p>
  </section>
  <!-- 结果预览区 -->

  <!-- 用于裁切的弹窗 -->
  <a-modal
    v-model:visible="isShowDialog"
    title="图片裁切"
    :maskClosable="false"
  >
    <template #footer>
      <a-button @click="isShowDialog = false">取消</a-button>
      <a-button @click="clear">清除</a-button>
      <a-button @click="reset">重置</a-button>
      <a-button type="primary" @click="getResult">裁切</a-button>
    </template>

    <!-- 图片裁切插件 -->
    <vue-picture-cropper
      :boxStyle="{
        width: '100%',
        height: '100%',
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
    />
    <!-- 图片裁切插件 -->
  </a-modal>
  <!-- 用于裁切的弹窗 -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { UploadOutlined } from '@ant-design/icons-vue'
import VuePictureCropper, { cropper } from 'vue-picture-cropper'

export default defineComponent({
  components: {
    VuePictureCropper,
    UploadOutlined
  },
  data() {
    return {
      preview: '',
      pic: '',
      result: '',
      isShowDialog: false
    }
  },
  methods: {
    /** 
     * 选择图片
     */
    selectFile(e: Event): void {
      // 获取选取的文件
      const target = e.target as HTMLInputElement;
      const { files } = target;
      if (!files) return;
      const file: File = files[0];

      // 转换为base64传给裁切组件
      const reader: FileReader = new FileReader();
      console.log(reader);
      
      reader.readAsDataURL(file);
      reader.onload = (): void => {
        // 更新裁切弹窗的图片源
        this.pic = String(reader.result);

        // 显示裁切弹窗
        this.isShowDialog = true;

        // 清空已选择的文件
        (this.$refs.uploadInput as HTMLInputElement).value = '';
      };
    },

    /** 
     * 获取裁切结果
     */
    getResult(): void {
      // 获取生成的base64图片地址
      const base64: string = cropper.getDataURL();

      // 获取生成的blob文件信息
      const blob: Blob = cropper.getBlob();

      console.log({base64, blob});

      // 把base64赋给结果展示区
      this.result = base64;

      // 隐藏裁切弹窗
      this.isShowDialog = false;
    },

    /** 
     * 清除裁切框
     */
    clear(): void {
      cropper.clear();
    },

    /** 
     * 重置默认的裁切区域
     */
    reset(): void {
      cropper.reset();
    }
  }
})
</script>

<style lang="stylus" scoped>
.section
  display flex
  flex-direction column
  align-items center
  width 100%
  max-width 1200px
  margin 0 auto 40px
  &:last-child
    margin-bottom 0
  // 选图按钮
  .select-picture
    position relative
    margin-bottom 1em
    input
      position absolute
      top 0
      left 0
      width 100%
      height 100%
      opacity 0
  // 预览区
  .preview
    display flex
    justify-content center
    width 100%
    max-width 800px
    margin-bottom 1em
    img
      width auto
      height auto
      max-width 100%
      max-height 100%
</style>