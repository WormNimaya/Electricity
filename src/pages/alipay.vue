<template>
  <div class="alipay">
    <div class="container">
      <loading v-if="!content"></loading>
      <div class="form" v-html="content"></div>
    </div>
  </div>
</template>

<script>
import Loading from '../components/Loading'

export default {
 name: 'alipay',
 data() {
   return{
     orderId: this.$route.query.orderNo,
     content: ''
   }
 },
 components: {
   Loading
 },
 mounted() {
     this.alipay()
 },
 methods: {
   alipay() {
     this.axios.post('/pay' ,{
       orderId: this.orderId,
       orderName: '高仿小米商城支付',
       amount: 0.01,
       payType: 1
     }).then((res) => {
       this.content = res.content
       setTimeout(() => {
         document.getElementById('bestPayForm').submit()
       },500)
     })
   }
 } 
}
</script>

<style>

</style>