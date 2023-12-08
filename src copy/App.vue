
<template>
  <!-- //有且只能有一个<div></div> -->
  <div class="App">
    <div class="box" @click="fn"></div>
  </div>
</template>

<script>
// 导出的是当前组件的配置项
//里面可以提供data（特殊），methods，computed，watch，八大周期
export default {
  created() {
    console.log("我是created");
  },
  methods: {
    fn() {
      alert("你好");
    },
  },
};
</script>


<style lang="less">
/* 让style支持less 
1.给style加上lang="less"
2.安装依赖包less less-loder
*/
.App {
  width: 400px;
  height: 400px;
  background-color: aqua;
  .box {
    width: 100px;
    height: 100px;
    background-color: aquamarine;
  }
}
</style>
