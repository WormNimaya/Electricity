<template>
  <div class="detail">
    <product-param :title="product.name"></product-param>
    <div class="container">
      <div class="mes">
        <div class="swipers">
           <swiper ref="mySwiper" :options="swiperOptions">
              <swiper-slide><img src="/imgs/detail/phone-1.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-2.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-3.jpg" alt=""></swiper-slide>
              <swiper-slide><img src="/imgs/detail/phone-4.jpg" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
        <div class="detail-mes">
          <h2>{{product.name}}</h2>
          <p>相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏小米自营</p>
          <span class="name">小米自营</span>
          <div class="price">
            <span class="sell">{{product.price}}</span>
            <span class="del">1999元</span>
          </div>
          <div class="line"></div>
          <div class="address">
            <span class="icon"></span>
            <span>北京 北京市 朝阳区 安定门街道</span>
            <p>有现货</p>
          </div>
          <h3>选择版本</h3>
          <div class="shop-mes" :class="{'check': ischeck===1}" @click="ischeck=1">6GB+64GB 全网通</div>
          <div class="shop-mes" :class="{'check': ischeck===2}" @click="ischeck=2">4GB+64GB 移动4G</div>
          <h3>选择颜色</h3>
          <div class="shop-mes check"><span></span> 深空灰</div>
          <div class="total">
            <p><span>{{product.name}} {{ischeck===1 ? '6GB+64GB 全网通' : '4GB+64GB 移动4G'}}</span>999元<span></span></p>
            <span class="price">总计：{{product.price}}元</span>
          </div>
          <button @click="addShop">加入购物车</button>
        </div>
      </div>
    </div>
    <div class="explain">
      <div class="container">
        <h2>价格说明</h2>
        <img src="/imgs/detail/item-price.jpeg" alt="">
      </div>
    </div>
    <serve-bar></serve-bar>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
import ServeBar from '../components/ServeBar'
import ProductParam from '../components/ProductParam'
import {mapMutations} from 'vuex'
export default {
 name: 'detail',
 data() {
  return {
     id: this.$route.params.id,
     ischeck:0,
     cartProduct:{},
     product: {},
     swiperOptions: {
      autoplay:true,
      loop : true,
      pagination: {
        el: '.swiper-pagination',
        clickable :true,
      }
      // Some Swiper option/callback...
    }
  }
 },
 components: {
   ServeBar,
   ProductParam,
   Swiper,
   SwiperSlide
 },
 computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
 },
 mounted() {
    this.swiper.slideTo(3, 1000, false),
    this.getProductInfo()
 },
 methods: {
   getProductInfo() {
     this.axios.get(`/products/${this.id}`).then((res) => {
       this.product = res
     })
   },
   addShop() {
     this.axios.post('carts',{
       productId:this.id,
       selected: true
     }).then((res)=> {
       this.cartProduct = res
       this.setCartCount(res.cartTotalQuantity)
       this.$router.push('/cart')
     })
   },
   ...mapMutations({
     setCartCount : 'SET_CART_COUNT'
   })
 }
}
</script>

<style lang="scss" scoped>
.detail{
  .mes{
    display: flex;
    justify-content: space-around;
    .swipers{
      box-sizing: border-box;
      width: 650px;
      height: 750px;
      img{
        width: 650px;
      }
    }
    .detail-mes{
      padding-top: 50px;
      h2{
        font-size:30px
      }
      p{
        font-size: 15px;
        margin: 5px 0 25px;
      }
      .name{
        color: red;
        font-size: 15px;
        display: inline-block;
        margin-bottom: 10px;
      }
      .price{
        .sell{
          color: red;
          font-size: 20px;
          display: inline-block;
          margin-right: 10px;
        }
        .del{
          color: #999999;
          font-size: 20px;
          text-decoration: line-through;
        }
      }
      .line{
          border-top: 1px solid  #999999;
          margin: 20px 0;
      }
      .address{
        height: 108px;
        border: 1px solid #E5E5E5;
        background-color: #FAFAFA;
        padding-top: 30px;
        padding-left: 30px;
        .icon{
          display: inline-block;
          width: 20px;
          height: 20px;
          background: url('/imgs/detail/icon-loc.png') no-repeat;
          background-size: contain;
          margin-right: 5px;
        }
        span{
          display: inline-block;
          vertical-align: middle;
        }
        p{
          color: red;
          font-size: 14px;
          padding-left: 20px;
        }
      }
      h3{
        font-size: 16px;
        margin: 20px 0;
      }
      .shop-mes{
        width: 280px;
        height: 50px;
        display: inline-block;
        border: 1px solid #E5E5E5;
        margin-right: 5px;
        line-height: 50px;
        font-size: 16px;
        text-align: center;
        span{
          display: inline-block;
          width: 14px;
          height: 14px;
          background-color: #666666;
        }
        &:last-child{
          margin-left: 0px;
        }
        &.check{
          border: 1px solid red;
          color: red;
        }
      }
      .total{
        margin-top: 20px;
        height: 108px;
        border: 1px solid #E5E5E5;
        background-color: #FAFAFA;
        padding-top: 30px;
        padding-left: 30px;
        p{
          display: flex;
          justify-content: space-around;
        }
        .price{
          font-size: 30px;
          color: red;
          display: inline-block;
          margin-left: 38px;
        }
      }
      button{
        width: 300px;
        height: 54px;
        border: none;
        margin: 20px 0;
        background: #FF6600;
        color: #ffffff;
        font-size: 16px;
      }
      
    }
  }
  .explain{
    height: 340px;
    background: #f3f3f3;
    h2{
      margin: 40px 0;
      font-size: 25px;
    }
  }
}
</style>