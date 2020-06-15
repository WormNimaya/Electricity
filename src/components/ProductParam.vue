<template>
  <div class="param" :class="{'fixed':isFixed}">
   <div class="container">
     <div class="title">{{title}}</div>
     <div class="message">
       <a href="">概念</a><span>|</span>
       <a href="">参数</a><span>|</span>
       <a href="">用户评价</a>
       <slot name="buy"></slot>
     </div>
   </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isFixed: false
    }
  },
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  mounted() {
    window.addEventListener('scroll', this.initHeight)
  },
  methods: {
    initHeight(){
      let scrollTop = window.pageYOffset ||document.documentElement.scrollTop ||document.body.scrollTop
      this.isFixed = scrollTop > 152 ? true : false
    }
  },
  destroyed() {
    window.removeEventListener('scroll', this.initHeight, false)
  }
}
</script>

<style lang="scss">
.param {
  width: 100%;
  height: 70px;
  line-height: 70px;
  background: #ffffff;
  border: 1px solid #e5e5e5;
  &.fixed{
    position: fixed;
    top: 0px;
    left: 0px;
  }
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .message{
    color: #666666;
    font-size: 16px;
    span{
      display: inline-block;
      margin: 0 8px;
    }
    a{
      color: #666666;
    }
  }
}
</style>