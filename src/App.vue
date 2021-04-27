<template>
  <div class="container">
    <div class="title">
      <h2>当前使用 {{ curSyntax }} 语法</h2>
      <a @click="switchComponent">[切换到 {{ anotherSyntax }} ]</a>
    </div>

    <component :is="curComponent" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import Dialog from '@/components/Dialog.vue'
import DialogWithOptionsAPI from '@/components/DialogWithOptionsAPI.vue'

export default defineComponent({
  components: {
    Dialog,
    DialogWithOptionsAPI
  },
  setup() {
    const curComponent = ref<string>('Dialog');
    const curSyntax = ref<string>('Vue 3.0 组合式 API');
    const anotherSyntax = ref<string>('2.0');

    const switchComponent = (): void => {
      switch (curComponent.value) {
        case 'Dialog':
          curComponent.value = 'DialogWithOptionsAPI';
          curSyntax.value = 'Vue 2.0 选项式 API';
          anotherSyntax.value = '2.0';
          break;

        case 'DialogWithOptionsAPI':
          curComponent.value = 'Dialog';
          curSyntax.value = 'Vue 3.0 组合式 API';
          anotherSyntax.value = '3.0';
          break;
      }
    }

    return {
      // 数据
      curComponent,
      curSyntax,
      anotherSyntax,

      // 方法
      switchComponent
    }
  }
})
</script>

<style lang="stylus" scoped>
.container
  padding 40px
  .title
    display flex
    justify-content center
    align-items center
    margin-bottom 1em
    h2
      font-size 20px
      margin-bottom 0
      margin-right .5em
</style>