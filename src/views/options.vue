<template>
  <!-- 选择图片 -->
  <section class="section">
    <div class="desc">
      <p>
        如果你不习惯 Composition API 的写法，你可以先用 Vue 2.0 的 Options API
        写法来写组件
      </p>

      <a
        href="https://github.com/chengpeiquan/vue-picture-cropper-demo/blob/main/src/views/options.vue"
        target="_blank"
      >
        <span>查看本 DEMO 源码</span>
      </a>
    </div>

    <p>请先点击按钮选择图片，会进入裁切处理环节</p>

    <!-- 设置一个按钮 -->
    <Button class="select-picture">
      <template #icon><UploadOutlined /></template>
      <span>选择图片</span>
      <input
        ref="uploadInput"
        type="file"
        accept="image/jpg, image/jpeg, image/png, image/gif"
        @change="selectFile"
      />
    </Button>
    <!-- 设置一个按钮 -->
  </section>
  <!-- 选择图片 -->

  <!-- 结果预览区 -->
  <section class="section" v-if="result.dataURL && result.blobURL">
    <p>裁切后的Base64图片预览：</p>
    <div class="preview">
      <img :src="result.dataURL" alt="选项式 API" />
    </div>
    <p>裁切后的 Blob 图片预览：</p>
    <div class="preview">
      <img :src="result.blobURL" alt="组合式 API" />
    </div>
    <p>可以按 F12 查看打印的 base64 / blob / file 结果</p>
  </section>
  <!-- 结果预览区 -->

  <!-- 用于裁切的弹窗 -->
  <Modal v-model:visible="isShowDialog" title="图片裁切" :maskClosable="false">
    <template #footer>
      <Button @click="isShowDialog = false">取消</Button>
      <Button @click="clear">清除</Button>
      <Button @click="reset">重置</Button>
      <Button type="primary" @click="getResult">裁切</Button>
    </template>

    <!-- 图片裁切插件 -->
    <VuePictureCropper
      :boxStyle="{
        width: '100%',
        height: '100%',
        backgroundColor: '#f8f8f8',
        margin: 'auto',
      }"
      :img="pic"
      :options="{
        viewMode: 1,
        dragMode: 'crop',
        aspectRatio: 16 / 9,
      }"
    />
    <!-- 图片裁切插件 -->
  </Modal>
  <!-- 用于裁切的弹窗 -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { Button, Modal } from 'ant-design-vue'
import { UploadOutlined } from '@ant-design/icons-vue'
import VuePictureCropper, { cropper } from 'vue-picture-cropper'

export default defineComponent({
  components: {
    Button,
    Modal,
    VuePictureCropper,
    UploadOutlined,
  },
  data() {
    return {
      pic: '',
      result: {
        dataURL: '',
        blobURL: '',
      },
      isShowDialog: false,
    }
  },
  methods: {
    /**
     * 选择图片
     */
    selectFile(e: Event): void {
      // 重置上一次的结果
      this.result.dataURL = ''
      this.result.blobURL = ''

      // 获取选取的文件
      const target = e.target as HTMLInputElement
      const { files } = target
      if (!files) return
      const file: File = files[0]

      // 转换为base64传给裁切组件
      const reader: FileReader = new FileReader()
      reader.readAsDataURL(file)
      reader.onload = (): void => {
        // 更新裁切弹窗的图片源
        this.pic = String(reader.result)

        // 显示裁切弹窗
        this.isShowDialog = true

        // 清空已选择的文件
        ;(this.$refs.uploadInput as HTMLInputElement).value = ''
      }
    },

    /**
     * 获取裁切结果
     */
    async getResult(): Promise<void> {
      // 获取生成的base64图片地址
      const base64: string = cropper.getDataURL()

      // 获取生成的blob文件信息
      const blob: Blob = await cropper.getBlob()

      // 获取生成的file文件信息
      const file = await cropper.getFile({
        fileName: '测试文件名，可不传',
      })

      console.log({ base64, blob, file })

      // 把base64赋给结果展示区
      this.result.dataURL = base64
      this.result.blobURL = URL.createObjectURL(blob)

      // 隐藏裁切弹窗
      this.isShowDialog = false
    },

    /**
     * 清除裁切框
     */
    clear(): void {
      cropper.clear()
    },

    /**
     * 重置默认的裁切区域
     */
    reset(): void {
      cropper.reset()
    },
  },
})
</script>

<style scoped></style>
