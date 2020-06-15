<template>
<transition>
 <div class="dialog" v-show="showisFlag">
    <div class="mask"></div>
    <div class="modal">
      <div class="dialog-header">
        <span class="title">{{title}}</span>
        <a href="javascript:;" class="cha" @click="$emit('disappear')"></a>
      </div>
      <div class="dialog-body">
        <slot name="body"></slot>
      </div>
      <div class="dialog-footer">
        <a href="javascript:;" class="sure" v-if="btnCount==1" @click="$emit('goToCar')">{{sureText}}</a>
        <a href="javaScript:;" class="cancel" v-if="btnCount==2"
        @click="$emit('disapper')"
        >{{cancelText}}</a>
        <div v-if="btnCount==3">
          <a href="javascript:;" class="sure" @click="$emit('goToCar')">{{sureText}}</a>
          <a href="javaScript:;" class="cancel"
          @click="$emit('disapper')"
          >{{cancelText}}</a>
        </div>
      </div>
    </div>
  </div>
</transition>
  
</template>

<script>
export default {
  name: 'modal',
  props: {
    title: {
      type: String,
      default: '提示'
    },
    dialogType: {
      type: String,
      default: 'form'
    },
    btnCount: {
      type: String,
      default: "1"
    },
    sureText: {
      type: String,
      default: '确认'
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    showisFlag: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="scss">
  @import '../assets/scss/mixin.scss';
  @import '../assets/scss/config.scss';
  .dialog{
    z-index: 10;
    @include position(fixed);
    &.v-enter,
    &.v-leave-to{
      top:-100%;
     }
    &.v-enter-active,
    &.v-leave-active{
       transition: all 0.5s ease;
     }
    .mask{
      @include position(fixed);
      background-color: $colorI;
      opacity: 0.5;
    }
    .modal{
      @include position(absolute, 20%, 50%,660px, auto);
      background-color: blanchedalmond;
      transform: translate(-50%);
      .dialog-header{
        height: 60px;
        background-color: #F5F5F5;
        .title{
          display: inline-block;
          line-height: 60px;
          font-size: 16px;
          padding-left: 30px;
        }
        .cha{
           @include positionImg(absolute,23px,25px,14px,14px,'/imgs/icon-close.png');
           transition: all .3s;
           &:hover{
             transform: scale(1.2);
           }
        }
      }
      .dialog-body{
        background-color: #ffffff;
        padding:42px 40px 54px;
        font-size:14px;
      }
      .dialog-footer{
         height: 82px;
         line-height: 82px;
         text-align: center;
         background-color: $colorJ;
        a{
          display: inline-block;
          width: 110px;
          line-height: 30px;
          text-align: center;
          color: #ffffff;
          cursor: pointer;
          margin-right: 15px;
          &:last-child {
            margin-right: 0px;
          }
          &.sure{
            background: #FF6600;
          }
          &.cancel{
            background: #B0B0B0;
          }
        }
      }
    }
  }
</style>