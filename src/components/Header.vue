<template>
  <header class="header">
    <h2 class="title">Vue Picture Cropper DEMO</h2>

    <div class="links">
      <a
        class="item"
        href="https://github.com/chengpeiquan/vue-picture-cropper"
        target="_blank"
      >
        <span>GitHub</span>
      </a>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.header {
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 60px;
  box-sizing: border-box;
  border-bottom: 1px solid @color-gray;
  padding: 0 @margin;
  .title {
    display: flex;
    flex-shrink: 0;
    align-items: center;
    font-size: 20px;
    color: @color-black;
    margin: 0 @margin 0 0;
    user-select: none;
  }
  .links {
    display: flex;
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    .item {
      font-size: 16px;
      margin-left: @margin;
      user-select: none;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
