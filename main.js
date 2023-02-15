
// #ifndef VUE3
import Vue from 'vue'
import App from './App'

// 导入请求配置
import "my_https.js"

// 自己用到的一些小方法
import "my_divMethods.js"

// 1. 导入 store 的实例对象
import store from './store/store.js'

// 关闭生产提示
Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App,
		store
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
import App from './App.vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif