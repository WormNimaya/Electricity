import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLazyload from 'vue-lazyload'
import VueCookie from 'vue-cookie'
import store from './store/index'
import App from './App.vue'
import VueStickto from 'vue-stickto'
import { Message,  Dialog, Button } from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(VueStickto)
Vue.component(Message.name, Message)
Vue.component(Dialog.name, Dialog)
Vue.component(Button.name, Button)
Vue.prototype.$message = Message;
const mock = true
if(mock) {
  require('./mock/api')
}

// import env from './env'
// 是否开启生产环境提示
Vue.config.productionTip = false
Vue.use(VueAxios, axios)
Vue.use(VueCookie)
Vue.use(VueLazyload, {
  loading: '/imgs/loading-svg/loading-bars.svg'
})
// 请求基本路径
axios.defaults.baseURL ='/api'

// 如果请求花费了超过 `timeout` 的时间，请求将被中断
axios.defaults.timeout = 8000

axios.interceptors.response.use(function(response) {
  let res = response.data
  let path = location.hash
  if (res.status === 0) {
    return res.data
  }else if(res.status === 10) {
    if(path !== '#/index') {
      window.location.href = '/#/personal/login'
    }
   
  }else{
    this.$message.warning(res.msg)
  }
})
new Vue({
  store,
  render: h => h(App),
  router
}).$mount('#app')
