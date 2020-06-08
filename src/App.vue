<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  methods: {
    getUser() {
      this.axios.get('/user').then((res) => {
        console.log(res)
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res) => {
        console.log(res)
      })
    }
  },
  mounted() {
   this.getUser()
   this.getCartCount()
  }
}
</script>

<style lang="scss">
@import './assets/scss/reset.scss'
</style>
