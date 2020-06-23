<template>
  <div class="cart">
    <nav-bar title="我的购物车">
      <template v-slot:biao>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </template>
    </nav-bar>
    <div class="shop">
      <div class="container">
        <ul class="shop-header">
          <li class="col1"><span class="checkbox" :class="{'checked': allChecked===true}" @click="toggle"></span><span>全选</span></li>
          <li class="col3">商品名称</li>
          <li class="col1">单价</li>
          <li class="col1">数量</li>
          <li class="col1">小计</li>
          <li class="col1">操作</li>
        </ul>
        <ul class="shop-body" v-for="(item,index) in list" :key="index">
          <li class="col1"><span class="checkbox" :class="{'checked': item.productSelected === true}"  @click="update(item)"></span></li>
          <li class="col3"><img v-lazy="item.productMainImage" alt=""><span class="des">{{item.productName +','+ item.productSubtitle}}</span></li>
          <li class="col1">{{item.productPrice}}</li>
          <li class="col1"><div class="count"><a href="javascript:;" class="add" @click="update(item, '+')">+</a><span>{{item.quantity}}</span><a href="javascript:;" class="jian" @click="update(item, '-')">-</a></div></li>
          <li class="col1">{{item.productTotalPrice}}</li>
          <li class="col1"><span class="cha" @click="remove(item)">×</span></li>
        </ul>
        <div class="total">
          <div class="left">
            <a href="/#/index">继续购物</a>
            <span class="num">共<span class="shu">{{list.length}}</span>件商品，已选择<span>{{checkedNum.length}}</span>件</span>
          </div>
          <div class="right">
            <span class="yuan">合计：{{cartTotalPrice}}元</span>
            <button @click="order">去结算</button>
          </div>
        </div>
      </div>
    </div>
    <serve-bar></serve-bar>
    <nav-footer></nav-footer>
  </div>
</template>

<script>
import NavFooter from '../components/NavFooter'
import ServeBar from '../components/ServeBar'
import NavBar from '../components/NavBar'
export default {
 name: 'cart',
 data() {
   return {
     list:[],
     cartTotalPrice: 0,
     allChecked: false,
     checkedNum: []
   }
 },
 components: {
   NavFooter,
   ServeBar,
   NavBar
 },
 mounted(){
   this.getCartList()
 },
 methods: {
    getCartList() {
     this.axios.get('/carts').then((res) => {
       this.assignment(res)
     })
   },
   toggle() {
     let url = this.allChecked ? '/carts/unSelectAll' : '/carts/selectAll'
     this.axios.put(url).then((res) => {
       this.assignment(res)
     })
   },
   update(item, type) {
     let quantity = item.quantity
     let productStock = item.productStock
     if(type === '-') {
       if(quantity <= 1) {
         this.$message.warning('最少添加一件商品')
         return
       }
       quantity = --quantity
     }else if(type === '+') {
       if(quantity >= productStock) {
          this.$message.warning('已超过库存数量')
          return
       }
        quantity = ++quantity
     }else{
       this.allChecked = !this.allChecked
     }
     this.axios.put(`/carts/${item.productId}`,{
      quantity,
      selected: this.allChecked
     }).then((res) => {
       this.assignment(res)
     })
   },
   remove(item) {
     this.axios.delete(`/carts/${item.productId}`).then((res) => {
       this.assignment(res)
     })
   },
   order(){
     let check = this.list.every(item => !item.productSelected)
     if(check) {
       this.$message.warning('至少选中一件商品')
       return
     }
    this.$router.push('/order/confirm');
   },
   assignment(res) {
     this.list = res.cartProductVoList
     this.checkedNum = res.cartProductVoList.filter(item => item.productSelected === true)
     this.allChecked = res.selectedAll
     this.cartTotalPrice = res.cartTotalPrice
   }
 }
}
</script>

<style lang="scss" scoped>
.cart{
  .shop{
     background-color: #F5F5F5;
    .shop-header{
      margin: 40px 0px 5px;
      background-color: #ffffff;
      width: 1200px;
      height: 79px;
      line-height: 79px;
      display: flex;
      text-align: center;
      font-size: 15px;
      .col1{
        flex: 1;
        .checkbox{
          margin-top: 5px;
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 1px solid #E5E5E5;
          margin-right: 15px;
          cursor:pointer;
          &.checked{
             background:url('/imgs/icon-gou.png') #FF6600 no-repeat center;
            background-size:16px 12px;
            border:none;
          }
        }
      }
      .col3{
        flex: 3;
      }
    }
    .shop-body{
      width: 1200px;
      height: 125px;
      background-color: #ffffff;
      display: flex;
      align-items: center;
      margin-bottom: 2px;
      font-size: 15px;
      .col1{
        flex: 1;
        text-align: center;
        .checkbox{
          margin-top: 5px;
          display: inline-block;
          width: 20px;
          height: 20px;
          border: 1px solid #E5E5E5;
          margin-right: 15px;
          cursor:pointer;
          &.checked{
             background:url('/imgs/icon-gou.png') #FF6600 no-repeat center;
            background-size:16px 12px;
            border:none;
          }
        }
        .count{
          border: 1px solid;
          width: 150px;
          height: 40px;
          .add{
            display: inline-block;
            width: 50px;
            height: 40px;
            line-height: 40px;
            margin-left: -6px;
            color: black;
            font-size: 20px;
          }
          span{
            display: inline-block;
            width: 50px;
            height: 40px;
            line-height: 40px;
          }
          .jian{
            display: inline-block;
            width: 50px;
            height: 40px;
            line-height: 40px;
            color: black;
             font-size: 20px;
          }
        }
        .cha{
          font-size: 30px;
          cursor: pointer;
        }
      }
      .col3{
        flex: 3;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: space-between;
        .des{
          font-size: 16px;
        }
        img{
          width: 100px;
        }
      }
    }
    .total{
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 1220px;
      height: 100px;
      color:#666666;
      font-size: 15px;;
      .left{
        a{
           color:#666666;
           display: inline-block;
           margin: 0px 30px;
        }
        .shu{
          color: red;
        }
      }
      .right{
        .yuan{
          color: red;
          font-size: 20px;
        }
        button{
          width: 200px;
          height: 40px;
          border: none;
          background: #FF6600;
          margin: 0px 20px;
          color: #ffffff;
        }
      }
    }
  }
}
</style>