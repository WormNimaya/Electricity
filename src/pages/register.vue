<template>
  <div class="regsiter">
    <div class="input">
      <input type="text" placeholder="请输入用户名" v-model="username">
    </div>
    <div class="input">
      <input type="password" placeholder="请输入密码" v-model="password">
    </div>
    <div class="input">
      <input type="text" placeholder="请输入邮箱" v-model="email">
    </div>
    <a href="javascript:;" class="btn" @click="register"
    >注册</a>
  </div>
</template>

<script>
export default {
  name: 'regsiter',
  data() {
    return {
      username:'',
      password:'',
      email:''
    }
  },
  methods: {
    register() {
      let {username, password, email} = this
      this.axios.post('/user/register',{
        username,
        password,
        email
      }).then(() => {
        alert('注册成功')
        this.$router.push('/personal/login')
      })
    }
  },
}
</script>

<style lang="scss">
  .regsiter{
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