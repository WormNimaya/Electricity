<template>
  <div class="product">
    <product-param :title="product.name">
      <template v-slot:buy>
        <button class="btn" @click="buy">立即购买</button>
      </template>
    </product-param>
    <div class="img-bg">
      <h2>{{product.name}}</h2>
      <p>{{product.subtitle}}</p>
      <div class="mes">
        <a href=""> 全球首款双频GP</a><span>|</span>
        <a href="">骁龙845</a><span>|</span>
        <a href="">AI 变焦双摄</a><span>|</span>
        <a href="">红外人脸识别</a>
      </div>
      <span class="price">￥1799</span>
    </div>
    <div class="img-bg1"></div>
    <div class="img-bg2"></div>
    <div class="swipers">
      <swiper ref="mySwiper" :options="swiperOptions">
        <swiper-slide><img src="/imgs/product/gallery-2.png" alt=""></swiper-slide>
        <swiper-slide><img src="/imgs/product/gallery-3.png" alt=""></swiper-slide>
        <swiper-slide><img src="/imgs/product/gallery-4.png" alt=""></swiper-slide>
        <swiper-slide><img src="/imgs/product/gallery-5.jpg" alt=""></swiper-slide>
        <swiper-slide><img src="/imgs/product/gallery-6.jpg" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
     </swiper>
    </div>
    <div class="item-video">
      <h2>60帧超慢动作摄影<br/>慢慢回味每一瞬间的精彩</h2>
      <p>后置960帧电影般超慢动作视频，将眨眼间的美妙展现得淋漓尽致！<br/>更能AI 精准分析视频内容，15个场景智能匹配背景音效。</p>
      <div class="video-bg" @click='isShow=true'>
      </div>
      <transition>
        <div class="video" v-show="isShow">
        <div class="mask"></div>
        <span class="icon" @click="isShow=false"></span>
        <video src="/imgs/product/video.mp4" controls autoplay muted></video>
      </div>
      </transition>
    </div>
  </div>
</template>

<script>
import ProductParam from '../components/ProductParam'
import { Swiper, SwiperSlide} from 'vue-awesome-swiper'
import 'swiper/css/swiper.css'
export default {
 name: 'product',
 data() {
   return{
     product:{},
     isShow: false,
     id : this.$route.params.id,
     swiperOptions: {
        autoplay:true,
        slidesPerView:3,
        spaceBetween: 30,
        freeMode: true,
        loop : true,
        pagination: {
          el: '.swiper-pagination',
          clickable :true
        },
        // Some Swiper option/callback...
      }
   }
 },
 computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
  },
  mounted() {
    this.swiper.slideTo(3, 1000, false)
    this.getProductInfo()
  },
  methods: {
    getProductInfo() {
      this.axios.get(`/products/${this.id}`).then((res) => {
        this.product = res
      })
    },
    buy() {
      this.$router.push(`/detail/${this.id}`)
    }
  },
 components: {
   ProductParam,
   Swiper,
   SwiperSlide
 }
}
</script>

<style lang="scss" scoped>
.product{
  .btn{
    width: 110px;
    line-height: 30px;
    margin-left: 8px;
    background: #FF6600;
    border: none;
    color: #ffffff;
  }
  .img-bg{
    background: url('/imgs/product/product-bg-1.png') no-repeat center;
    height: 718px;
    text-align: center;
    box-sizing: border-box;
    padding-top: 40px;
    h2{
      font-size: 80px;
    }
    p{
      font-size: 30px;
      font-weight: bold;
    }
    .mes{
      margin-top: 20px;
      a{
         font-size: 20px;
         color: #333;
      }
      span{
        display: inline-block;
        margin: 0px 10px;
      }
    }
    .price{
      display: inline-block;
      margin-top: 20px;
      font-size: 40px;;
    }
  }
  .img-bg1{
    background: url('/imgs/product/product-bg-2.png') center no-repeat;
    height:480px;
    background-size:1226px 397px;
  }
  .img-bg2{
     background:url(/imgs/product/product-bg-3.png) no-repeat center;
     height:638px;
     background-size:cover;
  }
  .swipers{
    img{
      width: 100%;
    }
  }
  .item-video{
    background: #000;
    text-align: center;
    padding-bottom: 40px;
    h2{
      font-size: 40px;
      color: #ffffff;
      padding: 80px 0px;
    }
    p{
      font-size: 25px;
      color: #ffffff;
      padding-bottom: 40px;;
    }
    .video-bg{
      background: url('/imgs/product/gallery-1.png');
      background-size:cover;
      width:1226px;
      height:540px;
      margin:0 auto 120px;
      cursor:pointer;
    }
    .video{
      width: 100%;
      height: 100%;
      position: fixed;
      top: 0px;
      left: 0px;
      z-index: 10;
      &.v-enter,
      &.v-leave-to{
        top: -100%;
      }
      &.v-enter-active,
      &.v-leave-active{
        transition: all 0.5s;
      }
      .mask{
        background: #333333;
        opacity: 0.9;
        z-index: 10;
        width: 100%;
        height: 100%;
        z-index: 10;
      }
      video{
        width:1000px;
        height:536px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translateX(-50%) translateY(-50%);
        z-index: 11;
        object-fit:cover;
        outline:none;
      }
      .icon{
        position: absolute;
        top: 100px;
        left: 1220px;
        background: url('/imgs/icon-close.png') center no-repeat;
        width: 20px;
        height: 20px;
        z-index: 12;
        background-size:contain;
        cursor: pointer;
      }
    }
    
  }
}
</style>