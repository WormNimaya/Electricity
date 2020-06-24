<template>
  <div class="order-list">
    <div class="wrapper">
      <div class="container">
         <div class="order-box">
            <div class="order" v-for="(items, index) in list" :key="index">
              <div class="order-title">
                <div class="item-info fl">
                  {{items.createTime}}
                  <span>|</span>
                  {{items.receiverName}}
                  <span>|</span>
                  订单号：{{items.orderNo}}
                  <span>|</span>
                  在线支付
                </div>
                <div class="item-money fr">
                  <span>应付金额：</span>
                  <span class="money">{{items.payment}}</span>
                  <span>元</span>
                </div>
              </div>
              <div class="order-content clearfix" v-for="(item, index) in items.orderItemVoList" :key="index">
                <div class="good-box fl">
                  <div class="good-list">
                    <div class="good-img">
                      <img v-lazy="item.productImage">
                    </div>
                    <div class="good-name">
                      <div class="p-name">{{item.productName}}</div>
                      <div class="p-money">{{item.currentUnitPrice}}元 X {{item.quantity}}</div>
                    </div>
                  </div>
                </div>
                <div class="good-state fr" v-if="items.status === 20">
                  <a href="javascript:;">{{items.statusDesc}}</a>
                </div>
                <div class="good-state fr" v-else>
                  <a :href="`/#/order/pay?orderNo=${items.orderNo}`">{{items.statusDesc}}</a>
                </div>
              </div>
            </div>
            <mugen-scroll :handler="fetchData" :should-handle="!loading" scroll-container="order-box">
            </mugen-scroll>
          </div>
        <loading v-if="showList"></loading>
        <no-data v-if="noData"></no-data>
      </div>
    </div>
  </div>
</template>
<script>
 import Loading from '../components/Loading'
 import NoData from '../components/NoData'
//  import infiniteScroll from 'vue-infinite-scroll'
 import MugenScroll from 'vue-mugen-scroll'
  export default{
    name:'order-list',
    data() {
      return {
        list:[],
        showList: true,
        noData: false,
        loading: false,
        page: 1,
      }
    },
    mounted() {
      this.getOrderList()
    },
    components: {
      Loading,
      NoData,
      MugenScroll
    },
    methods: {
      getOrderList() {
        this.scrollShow = true
        this.axios.get('/orders',{
          params: {
            pageSize: 1,
            pageNum: this.page
          }
        }).then((res) => {
          this.showList = false
          this.list = this.list.concat(res.list)
          if(!this.list.length) {
            this.noData = true
          }
        })
      },
      fetchData() {
        this.loading = true
        this.page++
        this.getOrderList()
        this.loading = false
      }
    }
  }
</script>
<style lang="scss">
  @import './../assets/scss/config.scss';
  @import './../assets/scss/mixin.scss';
  .order-list{
    .wrapper{
      background-color:$colorJ;
      padding-top:33px;
      padding-bottom:110px;
      .order-box{
        width: 100%;
        .order{
          @include border();
          background-color:$colorG;
          margin-bottom:31px;
          &:last-child{
            margin-bottom:0;
          }
          .order-title{
            display: flex;
            justify-content: space-between;
            @include height(74px);
            background-color:$colorK;
            padding:0 43px;
            font-size:16px;
            color:$colorC;
            .item-info{
              span{
                margin:0 9px;
              }
            }
            .money{
              font-size:26px;
              color:$colorB;
            }
          }
          .order-content{
            display: flex;
            justify-content: space-between;
            padding:0 43px;
            .good-box{
              width:88%;
              .good-list{
                display: flex;
                align-items: center;
                height:145px;
                .good-img{
                  width:112px;
                  img{
                    width:100%;
                  }
                }
                .good-name{
                  font-size:20px;
                  color:$colorB;
                }
              }
            }
            .good-state{
              @include height(145px);
              font-size: 20px;
              color:$colorA;
              a{
                color:$colorA;
              }
            }
          }
        }
        .pagination{
          text-align:right;
        }
        .el-pagination.is-background .el-pager li:not(.disabled).active{
          background-color: #FF6600;
        }
        .el-button--primary{
          background-color: #FF6600;
          border-color: #FF6600;
        }
        .load-more,.scroll-more{
          text-align:center;
        }
      }
      .scroll {
        width: 1226px;
        text-align: center;
      }
    }
  }
</style>