<template>
  <div class="serve">
    <div class="container">
      <ul>
        <li><span class="icon-setting"></span> 预约维修服务</li>
        <li><span class="icon-7days"></span> 7天无理由退货</li>
        <li><span class="icon-15days"></span> 15天免费换货</li>
        <li><span class="icon-post"></span> 满150元包邮</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
 name: 'serve-bar'
}
</script>

<style lang="scss">
// @import '../assets/scss/base.scss';
.serve{
    padding:33px 0;
    color:#666666;
    font-size:16px;
    ul{
      width: 1226px;
      li {
        display:inline-block;
        width:24.9%;
        text-align:center;
        border-right:1px solid #E5E5E5;
        .icon-setting {
          width: 20px;
          height: 20px;
          display: inline-block;
          background:url('/imgs/icon-setting.png') no-repeat;
          background-size: contain;
          vertical-align: middle;
        }
        .icon-7days {
          width: 20px;
          height: 20px;
          display: inline-block;
          background:url('/imgs/icon-7day.png') no-repeat;
          background-size: contain;
          vertical-align: middle;
        }
        .icon-15days {
          width: 20px;
          height: 20px;
          display: inline-block;
          background:url('/imgs/icon-15day.png') no-repeat;
          background-size: contain;
          vertical-align: middle;
        }
        .icon-post {
          width: 20px;
          height: 20px;
          display: inline-block;
          background:url('/imgs/icon-post.png') no-repeat;
          background-size: contain;
          vertical-align: middle;
        }
      }
    }
}

</style>