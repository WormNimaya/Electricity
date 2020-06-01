<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="">
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javaScript:;">河畔一角主页</a><span>|</span>
      <a href="javaScript:;">Vue全栈课程</a><span>|</span>
      <a href="javaScript:;">React全家桶课程</a><span>|</span>
      <a href="javaScript:;">微信支付专项课程（H5+小程序+Node+Mongo）</a>
      <p>Copyright ©2019 <span class="mai">mi.futurefe.com</span> All Rights Reserved.</p>
    </div>
  </div>
</template>


<script>
export default {
 name: 'nav-footer'
}
</script>

<style lang="scss">
.footer {
  height: 234px;
  text-align: center;
  border-top: 4px solid #FF6600;
  background-color: #333333;
  .footer-logo{
    margin-top: 40px;
    margin-bottom: 40px;
    img{
      width: 53px;
      height: 36px;
    }
    p{
      color: #ffffff;
      font-size:16px;
      margin-top: 20px;
    }
  }
  .footer-link{
    color: #ffffff;
    a{
       color:#999999;
       font-size: 16px;
    }
    span{
      display: inline-block;
      color:#999999;
      margin: 0px 5px;
      font-size: 16px;
    }
    p{
      margin-top: 20px;
      color:#999999;
      font-size: 16px;
      .mai{
        color: #FF6600;
      }
    }
  }
}
</style>