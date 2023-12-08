<template>
  <div class="App">
    <!-- 头部组件 -->
    <hmHeader></hmHeader>
    <!-- 主体组件 -->
    <hm-main></hm-main>
    <!-- 底部组件 -->
    <hm-footer></hm-footer>
  </div>
</template>

<script>
import hmHeader from "./components/hmHeader.vue";
import hmMain from "./components/hmMain.vue";
import hmFooter from "./components/hmFooter.vue";
export default {
  components: {
    // '组件名'：组件对象
    hmHeader: hmHeader,
    hmMain: hmMain,
    hmFooter: hmFooter,
  },
};
</script>

<style>
.App {
  width: 600px;
  height: 700px;
  background-color: #87ceeb;
  margin: 0 auto;
  padding: 20px;
}
</style>