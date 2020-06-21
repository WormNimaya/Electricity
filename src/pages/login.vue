<template>
  <div class="login">
    <div class="input">
      <input type="text" placeholder="请输入用户名" v-model="username">
    </div>
    <div class="input">
      <input type="password" placeholder="请输入密码" v-model="password">
    </div>
    <a href="javascript:;" class="btn" 
    @click="login">登录</a>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      username:'',
      password:'',
      userid:''
    }
  },
  methods: {
    login() {
      let {username, password} = this
      this.axios.post('/user/login',{
        username,
        password
      }).then((res) => {
        this.$cookie.set('userid', res.id, {expires: 'Session'})
        this.$router.push('/index')
      })
    }
  },
}
</script>

<style lang="scss">
  .login{
    margin: 0 auto;
    .input{
      width: 348px;
      height: 50px;
      border: 1px solid #E5E5E5;
      margin-bottom: 20px;
      input{
        box-sizing: border-box;
        padding-left: 10px;
        width: 348px;
        height: 50px;
        border: none;
      }
    }
    .btn{
        display: inline-block;
        width: 348px;
        height: 50px;
        background-color: #FF6600;
        color: #ffffff;
        cursor: pointer;
        line-height: 50px;
        font-size: 20px;
      }
  }
</style>