<template>
  <div class="nav">
    <div class="container">
      <div class="header-logo">
        <a href="/#/index"></a>
      </div>
      <div class="message">
        <h2>{{title}} <slot name="biao"></slot></h2>
        <div class="username">{{username}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  name: 'navbar',
  props: {
    title: {
      type: String,
      default:''
    }
  },
  computed: {
    ...mapGetters([
      'username'
    ])
  }
}
</script>

<style lang="scss" scoped>
.nav{
  border-bottom: 2px solid red;
  height: 117px;
  line-height: 117px;
 .container{
    justify-content: flex-start;
    .message{
      display: flex;
      justify-content: space-around;
      h2{
        font-size: 30px;
        margin-left: 35px;
        span{
          font-size: 15px;
          font-weight: 200;
          display: inline-block;
          margin-left: 20px;
          color: #999999;
        }
      }
      .username{
        display: inline-block;
        margin-left: 400px;
        font-size: 20px;
        color: #666666;
      }
    }
  }
}

 
</style>