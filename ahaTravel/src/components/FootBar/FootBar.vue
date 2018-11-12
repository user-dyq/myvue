<template>

  <div class="footer_guide">
    <div>
      顶顶顶顶
    </div>
    <span class="guide_item" >
      <router-link exact :to="{'path':'/homePage'}">
        <span class="item_icon">
          <img src="@/assets/img/bar/tab_activity_pre@3x.png" alt="">
        </span>
        <span>首页</span>
      </router-link>
    </span>

      <span class="guide_item" >
      <router-link exact :to="{'path':'/line'}">
        <span class="item_icon">
          <img src="@/assets/img/bar/tab_activity_pre@3x.png" alt="">
        </span>
        <span>路书</span>
      </router-link>
    </span>
      <span class="guide_item" >
      <router-link exact :to="{'path':'/action'}">
        <span class="item_icon">
          <img src="@/assets/img/bar/tab_activity_pre@3x.png" alt="">
        </span>
        <span>活动</span>
      </router-link>
    </span>
      <span class="guide_item" >
      <router-link exact :to="{'path':'/mine'}">
        <span class="item_icon">
          <img src="@/assets/img/bar/tab_activity_pre@3x.png" alt="">
        </span>
        <span>我的</span>
      </router-link>
    </span>
  </div>
 
</template>

<script>
  export default {
    methods:{
      goTo(path){
        this.$router.replace(path)//点击tabbar实现路由跳转
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~css/var.styl"
  /*@import "~css/reset.css"*/
  .footer_guide {
    top-border-1px(#e4e4e4)
    position fixed
    z-index 100
    left 0
    right 0
    bottom 0
    background-color #fff
    width 100%
    height 50px
    display flex
  }
  .guide_item{
    display flex
    flex 1
    text-align center
    flex-direction column
    align-items center
    margin 5px
    color #999999
  }
  .guide_item span{
    font-size 1.2rem
    margin-bottom 2px

    display block
  }
  .guide_item img{
    width 1.3rem
    height 1.3rem
  }
  .router-link-active{
    color: $bgColor
  }
  .guide_item:child(0) img{
    src: "@/assets/img/bar/tab_activity_nor@3x.png"
  }

  .router-link-active:child(0) img{
    src: "@/assets/img/bar/tab_activity_pre@3x.png"
  }



</style>
