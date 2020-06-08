<template>
  <div class="index">
   <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul class="menu-wrap">
            <li class="menu-item">
              <a href="javaScript:;" class="nav" >手机 电话卡</a>
              <div class="children">
                <ul v-for="(items, i) in menuList" :key="i">
                  <a :href="'/#/product/'+ item.id " v-for="(item, j) in items" :key="j">
                    <li>
                      <img v-lazy="item ? item.img : '/imgs/item-box-1.png'" alt="">
                      <span>{{item ? item.name: '小米CC9'}}</span>
                   </li>
                  </a>
                </ul>
              </div>
            </li>
             <li class="menu-item">
              <a href="javaScript:;" class="nav">电视 盒子</a>
              <div class="children"></div>
            </li>
             <li class="menu-item">
              <a href="javaScript:;" class="nav">笔记本 平板</a>
              <div class="children"></div>
            </li>
             <li class="menu-item">
              <a href="javaScript:;" class="nav">家电 插线板</a>
              <div class="children"></div>
            </li>
             <li class="menu-item">
              <a href="javaScript:;" class="nav">出行 穿戴</a>
              <div class="children"></div>
            </li>
             <li class="menu-item">
              <a href="javaScript:;" class="nav">智能 路由器</a>
              <div class="children"></div>
            </li>
             <li class="menu-item">
              <a href="javaScript:;" class="nav">电源 配件</a>
              <div class="children"></div>
            </li>
             <li class="menu-item">
              <a href="javaScript:;" class="nav">生活 箱包</a>
              <div class="children"></div>
            </li>
          </ul>
        </div>
        <swiper :options="swiperOptions" >
          <swiper-slide 
          v-for="(item, index) in slideList" 
          :key="index">
          <a :href="'/#/product/' + item.id"><img :src="item.img" alt=""></a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="banner">
        <a href="/#/product/30">
          <img v-lazy="'/imgs/banner-1.png'" alt="">
        </a>
      </div>
    </div>
    <div class="product">
      <h2>手机</h2> 
      <div class="container">
        <div class="logo">
         <a href="/#/product/35"><img v-lazy="'/imgs/mix-alpha.jpg'" alt=""></a>
        </div>
        <div class="product-list">
          <div class="list" v-for="(items, i) in phoneList" :key="i">
            <div class="phone" v-for="(item, j) in items" :key="j">
              <span :class="['new', j%2==0 ? 'kill-pro':'new-pro']">{{j%2==0 ? '新品' : '热销' }}</span>
              <img v-lazy="item.mainImage" alt="">
              <p class="name">{{item.name}}</p>
              <span class="des">{{item.subtitle}}</span>
              <p class="price" @click='addShop'>{{item.price}}元</p>
            </div>
          </div> 
       </div>     
    </div>
   </div>
   <serve-bar></serve-bar>
   <modal 
       title="提示"
       btnCount= "1"
       sureText="查看购物车"
       :showisFlag="showisFlag"
      @goToCar="goToCar"
      @disappear="showisFlag = false"
   >
     <template v-slot:body>
       <div>
         商品添加成功
       </div>
     </template>
   </modal> 
  </div>
</template>

<script>
import ServeBar from '../components/ServeBar'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import Modal from '../components/Modal'
import 'swiper/css/swiper.css'

export default {
  name: 'index',
  data() {
    return{
       swiperOptions: {
          autoplay:true,
          pagination: {
            el: '.swiper-pagination',
            clickable :true,
          },
          loop : true,
          effect : 'cube',
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
          // Some Swiper option/callback...
        },
        slideList:[
          {
            id:'42',
            img:'/imgs/slider/slide-1.jpg'
          },
          {
            id:'45',
            img:'/imgs/slider/slide-2.jpg'
          },
          {
            id:'46',
            img:'/imgs/slider/slide-3.jpg'
          },
          {
            id:'',
            img:'/imgs/slider/slide-4.jpg'
          },
          {
            id:'',
            img:'/imgs/slider/slide-1.jpg'
          }
        ],
        menuList:[
            [
              {
                id:30,
                img:'/imgs/item-box-1.png',
                name:'小米CC9',
              },{
                id:31,
                img:'/imgs/item-box-2.png',
                name:'小米8青春版',
              },{
                id:32,
                img:'/imgs/item-box-3.jpg',
                name:'Redmi K20 Pro',
              },{
                id:33,
                img:'/imgs/item-box-4.jpg',
                name:'移动4G专区',
              }
            ],
            [0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]
          ],
          phoneList: [],
          showisFlag: false
      }
  },
  methods: {
     init(){
        this.axios.get('/products',{
          params:{
            categoryId:100012,
            pageSize:14
          }
        }).then((res)=>{
          res.list = res.list.slice(6,14);
          this.phoneList = [res.list.slice(0,4),res.list.slice(4,8)];
        })
      },
      addShop() {
        this.showisFlag = true
      },
      goToCar() {
        this.$router.push('/cart')
      }
  },
  mounted() {
    this.init()
  },
  components: {
   ServeBar,
   Swiper,
   SwiperSlide,
   Modal
 },
  
}
</script>

<style lang="scss">
@import '../assets/scss/mixin.scss';
@import '../assets/scss/base.scss';
@import '../assets/scss/config.scss';
 .index{
   .swiper-box{
     position: relative;
     .swiper-container{
       width: 1226px;
       .swiper-button-prev{
         padding-left: 260px;
       }
       img{
         width: 100%;
         height: 100%;
       }
     }
     .nav-menu{
       position:absolute;
       width: 264px;
       height: 462px;
       z-index: 8;
       background-color:#55585a7a;
       .menu-wrap{
         height: 462px;
         padding: 30px 0;
         box-sizing: border-box;
         .menu-item{
           height: 50px;
           line-height: 50px;
           &:hover{
              background-color:$colorA;
              .children{
                display: block;
              }
            }
           .nav{ 
             position: relative;
             display: block;
             font-size:16px;
             color:#ffffff;
             padding-left: 30px;
             &:before{
               content:'';
               top: 17px;
               right: 25px;
               position: absolute;
               @include bgImg(10px,15px,'/imgs/icon-arrow.png')
             }
           }
           .children {
             position: absolute;
             left: 264px;
             top: 0px;
             width: 962px;
             height: 462px;
             display: none;
             background: $colorG;
             border:1px solid $colorH;
             ul {
               display: flex;
               height: 75px;
               align-items: center;
               justify-content: space-around;
               a {
                 flex: 1;
                 li {
                 flex: 1;
                 text-align: center;
                 img {
                   width: 42px;
                   height: 35px;
                   vertical-align: middle;
                 }
                 span {
                   display: inline-block;
                   margin-left: 5px;
                   color:$colorB;
                   font-size:14px;
                 }
               }
               }
               
             }
           }
         }
       }
     }
   }
   .banner{
    margin-bottom:50px;
    img{
      width: 100%;
    }
   }
   .product{
     background: #f5f5f5;
     padding: 30px 0;
     h2{
        font-size:$fontF;
        height:21px;
        line-height:21px;
        color:$colorB;
        margin-bottom:20px;
        margin-left: 143px;;
     }
     .logo{
       width:224px;
       height:619px;
       img{
         width: 100%;
         height: 100%;
       }
     }
     .product-list{
       width: 1002px;
       height: 619px;
       .list{
          display: flex;
          margin-bottom: 15px;;
          justify-content: space-around;
          .phone{
            .new{
              display:inline-block;
              width: 67px;
              height: 24px;
              font-size: 14px;
              line-height: 24px;
              color: #ffffff;
              &.new-pro{
                background-color:#7ECF68;
              }
              &.kill-pro{
                background-color:#E82626;
              }
            }
            background: #ffffff;
            width:236px;
            height:302px;
            text-align: center;
            .name{
              margin-top: -10px;
              font-weight: bold;
              font-size: 14px;
              color: #333333;
              line-height: 14px;
            }
            .des{
              display: inline-block;
              color: #999999;
              line-height: 13px;
              margin: 6px auto 0px;
            }
            .price{
              color: red;
              &:after{
                    @include bgImg(22px,22px,'/imgs/icon-cart-hover.png');
                    content:' ';
                    margin-left:5px;
                    vertical-align: middle;
                  }
            }
            img{
              width: 100%;
            }
        }
       }
     }
   }
 }
</style>