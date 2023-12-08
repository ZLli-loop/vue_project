//文件核心作用：导入app.vue创建结构渲染index.html
// 1.导入vue核心包
import Vue from 'vue'
// 2.导入app.vue根组件
import App from './App.vue'

// 提示：当前处于什么环境（生产环境/开发环境）
Vue.config.productionTip = false

// vue实例化，提供render方法，基于app.vue创建结构渲染index.html
new Vue({
  // el:'#app',它的作用与￥mount('选择器')作用一致，用于指定vue所管理容器
  // render: h => h(App),
  render: (creatElement) => {
    // 基于app创建元素结构
    return creatElement(App)
  }
}).$mount('#app')
