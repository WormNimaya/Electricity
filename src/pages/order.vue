<template>
  <div>
    <nav-bar :title="title">
      <template v-slot:biao>
        <span>{{biao}}</span>
      </template>
    </nav-bar>
     <router-view></router-view>
     <serve-bar></serve-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavBar from '../components/NavBar'
import NavFooter from '../components/NavFooter'
import ServeBar from '../components/ServeBar'
export default {
  name: 'order',
  data() {
    return {
      biao: '',
      title: ''
    }
  },
  mounted() {
    let path = this.$route.path
    if(path === '/order/confirm') {
      this.title = '订单确认'
      this.biao = '请认真填写收货地址'
    }else if(path === '/order/list'){
      this.title = '订单列表'
      this.biao = '请谨防钓鱼链接或诈骗电话，了解更多'
    }else if(path === '/order/pay'){
       this.title = '订单支付'
       this.biao = '请谨防钓鱼链接或诈骗电话，了解更多'
    }else if(path === '/order/alipay'){
       this.title = '订单支付'
       this.biao = '请谨防钓鱼链接或诈骗电话，了解更多'
    }
  },
  components: {
    NavBar,
    NavFooter,
    ServeBar
  }
}
</script>

<style>

</style>