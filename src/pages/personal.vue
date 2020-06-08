<template>
  <div class="personal">
    <div class="header">
      <div class="container">
        <a href="/#/index"><img src="/imgs/login-logo.png"></a>
      </div>
    </div>
    <div class="body">
      <div class="container">
        <div class="form">
          <router-link to="/personal/login" class="nav">登录</router-link>
           <span>|</span>
          <router-link to="/personal/register" class="nav">注册</router-link>
          <router-view></router-view>
        </div>
      </div>
    </div>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '../components/NavFooter'
export default {
 name: 'personal',
 components: {
   NavFooter
 }
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';
@import '../assets/scss/base.scss';
.personal{
  .body {
    height:576px;
    background: url('/imgs/login-bg.jpg') center;
    margin: 0px auto;
    .container{
       position: relative;
       height: 510px;
      .form{
        box-sizing: border-box;
        position: absolute;
        width: 410px;
        height: 510px;
        background-color: #ffffff;
        right: 0px;
        top: 25px;
        padding: 40px 31px;
        text-align: center;
        margin: 0 auto;
        .nav{
          display: inline-block;
          font-size: 24px;
          color: #000000;
          font-weight: bold;
          margin-bottom: 20px;
        }
        span{
          margin: 0px 25px;
          font-size: 24px;
        }
      }
    }
  }
}

</style>