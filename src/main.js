import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'

import App from './App.vue'

const mock = true
if(mock) {
  require('./mock/api')
}

// import env from './env'
// 是否开启生产环境提示
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
// 请求基本路径
axios.defaults.baseURL ='/api'

// 如果请求花费了超过 `timeout` 的时间，请求将被中断
axios.defaults.timeout = 8000

axios.interceptors.response.use(function(response) {
  let res = response.data
  if (res.status === 0) {
    return res.data
  }else if(res.status === 10) {
    window.location.href = '/#/login'
  }else{
    alert(res.msg)
  }
})
new Vue({
  render: h => h(App),
  router
}).$mount('#app')
