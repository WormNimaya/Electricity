<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javaScript:;">小米商城</a>
          <a href="javaScript:;">MUI</a>
          <a href="javaScript:;">协议准则</a>
        </div>
        <div class="topbar-user">
          <a href="javaScript:;" v-if="username">{{username}}</a>
          <a href="javaScript:;" v-if="!username" @click="$router.push('/personal')">登录</a>
           <a href="javaScript:;" @click="logout" v-if="username">退出</a>
            <a href="/#/order/list">我的订单</a>
          <a href="javaScript:;" class="my-car" @click="goToCart"><span class="icon-car"></span>购物车({{cartCount}})</a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米cc9</span>
            <div class="children">
              <ul >
                <li class="product" v-for="(item, index) in productList" :key="index">
                  <a v-bind:href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img :src="item.mainImage" :alt="item.subtitle">
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.prive | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
          </div>
          <div class="item-menu">
            <span>电视</span>
            <div class="children">
              <ul>
                <li class="product">
                  <a href="javaScript:;">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-1.jpg" alt="">
                    </div>
                    <div class="pro-name">小米壁画电视 65英寸</div>
                    <div class="pro-price">6999元</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="javaScript:;">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-2.jpg" alt="">
                    </div>
                    <div class="pro-name">小米全面屏电视E55A</div>
                    <div class="pro-price">1999元</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="javaScript:;">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-3.png" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 32英寸</div>
                    <div class="pro-price">699元</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="javaScript:;">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-4.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 55英寸</div>
                    <div class="pro-price">1799元</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="javaScript:;">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-5.jpg" alt="">
                    </div>
                    <div class="pro-name">小米电视4A 65英寸</div>
                    <div class="pro-price">2699元</div>
                  </a>
                </li>
                 <li class="product">
                  <a href="javaScript:;">
                    <div class="pro-img">
                      <img src="/imgs/nav-img/nav-3-6.png" alt="">
                    </div>
                    <div class="pro-name">查看全部</div>
                    <div class="pro-price">查看全部</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keyword">
            <a href="javaScript:;"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
export default {
 name: 'nav-header',
 data() {
   return {
     productList:[]
   }
 },
 mounted() {
   this.getProductList()
   this.getUser()
   this.getCartCount()
 },
 computed: {
   ...mapGetters([
     'username',
     'cartCount'
   ])
 },
 methods: {
   getProductList() {
     this.axios.get('/products/', {
       params: {
         categoryId: '100012',
          pageSize:6
       }
     }).then((res) => {
       this.productList = res.list
     })
   },
   goToCart() {
     this.$router.push('/cart')
   },
   logout() {
     this.axios.post('/user/logout').then(() => {
       this.setUsername(''),
       this.setCartCount(0)
       this.$cookie.set('userid', '',{expires: '-1'})
       this.$message.warning('退出成功')
     })
   },
    getUser() {
      this.axios.get('/user').then((res) => {
        if(res) {
           this.setUsername(res.username)
        }
      })
    },
    getCartCount() {
      this.axios.get('/carts/products/sum').then((res) => {
       if(res) {
         this.setCartCount(res)
       }
      })
    },
    ...mapMutations({
      setUsername : 'SET_USERNAME',
      setCartCount : 'SET_CART_COUNT'
    })
 },
 filters: {
   currency(val) {
     if(!val) return '￥0.00元'
     return '￥'+val.toFixed(2)+'元'
   }
 }
}
</script>

<style lang="scss">
@import '../assets/scss/base.scss';
@import '../assets/scss/config.scss';
.header {
  .nav-topbar {
    background: #333333;
    height: 39px;
    line-height: 39px;
    color: #B0B0B0;
    .container{
      a {
        display: inline-block;
        margin-right: 17px;
        color: #B0B0B0;
      }
      .my-car{
        width: 110px;
        text-align: center;
        background: #ff6600;
        .icon-car{
          display:inline-block;
          width: 16px;
          height: 12px;
          background: url('/imgs/icon-cart-checked.png') no-repeat;
          background-size: contain;
          margin-right: 4px;
        }
      }
    }
  }
  .nav-header{
    .container{
      position: relative;
      height: 112px;
      .header-menu{
        display: flex;
        align-items: center;
        height:112px;
        margin-left: -205px;
        .item-menu {
          margin-right: 30px;
          height: 112px;
          line-height: 112px;
          span{
             cursor: pointer;
             font-weight: bold;
             font-size: 16px;
          }
          &:hover{
            color: $colorA;
            .children{
              height: 220px;
              opacity: 1;
            }
          } 
          .children{
            float: left;
            position: absolute;
            top: 112px;
            left:0px;
            width: 1226px;
            height: 0px;
            opacity: 0;
            overflow:hidden;
            transition: all 1s;
            box-shadow:0px 7px 6px 0px rgba(0, 0, 0, 0.11);
            background-color: #ffffff;
            z-index: 10;
            .product{
              position: relative;
              margin-top: 25px;
              width: 16.6%;
              float: left;
              height:220px;
              text-align: center;
              font-size:12px;
              line-height:12px;
              a{
                display:inline-block;
                img {
                  height: 137px;
                }
                .pro-name {
                  margin: 5px 0px;
                  color: black;
                  font-weight: bold;
                }
                .pro-price{
                  color: #ff822f;
                }
              }
              &:before {
                position:absolute;
                top: 22px;
                right: 0px;
                content: '';
                border-left: 1px solid $colorF;
                height:100px;
                width: 1px;
              }
              &:last-child:before{
                display: none;
              }
            }
          }  
        }
      }
      .header-search{
        width:319px;
        .wrapper{
          height:50px;
          display:flex;
          align-items: center;
          border:1px solid #E0E0E0;
          input{
            border: none;
            width:264px;
            height:50px;
            padding-left:14px;
            border-right:1px solid #E0E0E0;
          }
          a{
            display:inline-block;
            width: 18px;
            height: 18px;
            background: url('/imgs/icon-search.png') no-repeat;
            background-size: contain;
            margin-left:10px;
          }
        }
      }
    }
  }
}

</style>