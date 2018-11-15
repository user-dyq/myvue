<template>
 <div class="aapaetner-item">
       <!-- 用户信息 -->
       <div class="aapaetner-userinfo">
         <img class="aapaetner-userpic" :src="parnerInfo.userInfo.pic" alt="">
         <span class="aapaetner-username">{{parnerInfo.userInfo.nickname}}</span>
         <img class="aapaetner-usersex" src="" alt="">
         <span class="aapaetner-max_num">期望邀约{{parnerInfo.max_num}}个小伙伴</span>
       </div>

       <!-- 内容 -->
       <div class="aapaetner-msg">
         <ul class="aapaetner-label">
           <li  v-for="label in parnerInfo.label" :key='label'>{{label}}</li>
         </ul>
         <span>{{'['+parnerInfo.starttime+']'}}</span>
         {{parnerInfo.description}}
       </div>

       <!-- 图片 -->
      <viewer class="aapaetner-images">
	      <img v-for="imagemsg in parnerInfo.album" :src="imagemsg.min" :key="imagemsg.min" >
	    </viewer>

      <!-- 地址 -->
      <div class="aapaetner-address">
        <img src="" alt="">
        <span>{{parnerInfo.address}}</span>
      </div>
      <!-- 底部试图 -->
      <ul v-if="!parnerInfo.isDetail" class="aapaetner-bottom">
        <li>分享</li>
        <li>评论</li>
        <li>预定</li>
        <li>取消</li>
      </ul>
      
 </div>
</template>

<script>
 export default {
    props:['parnerInfo'],
    
    data () {//参数
      return {
        
      }
    },
   components: {//挂载子组件

   },
   mounted(){//方法
      console.log('parnerInfoparnerInfoparnerInfo',this.parnerInfo)
   }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "~css/var.styl"
  .aapaetner-item{
    overflow hidden
  }
  .aapaetner-userinfo{
    display: flex;
    justify-content:space-between;//横向居中
    align-items:Center;//垂直居中
    margin-top 1.5rem
  }
  .aapaetner-userpic{
    width 4rem
    height 4rem
    margin-left 1rem
    border-radius 2rem
    background-color red
  }
  .aapaetner-username{
    font-weight bold
    // line-height 7rem
    margin-left 1rem
  }
  .aapaetner-usersex{
    margin-left .5rem
    width 2rem
    height 1rem
    background-color red
  }
  .aapaetner-max_num{
     margin-right 1rem
  }
  .aapaetner-msg {
    margin 1rem 0
  }
  .aapaetner-label{
    display block
    overflow hidden
    margin-bottom 1rem
  }
  .aapaetner-label >li{
    float left
    margin-left 1rem
    border-radius .3rem
    border  1px solid #e0e0e0
    color #707070
    padding .3rem
  }
  .aapaetner-msg >span {
    color red
    margin-left 1rem
  }
  .aapaetner-images{
    width 100%
    padding-left 1rem
    display flex
     
  }
  .aapaetner-images img {
    width 33%
    flex 0.3  
    height 7rem
    padding-right 1rem
  }
  .aapaetner-images img + .aapaetner-images img{
    padding-left 1rem 
  }
  .aapaetner-address{
    margin 1rem 
  }

  .aapaetner-bottom{
    width 100%
    height 4.5rem
    display: flex;
    align-items:Center
    border-top: 1px solid #e0e0e0;
  }
  .aapaetner-bottom >li{
    float left
    flex 1
    text-align center
    height 3.5rem
    line-height 3.5rem
    border-left  1px solid #e0e0e0;
  }
  .aapaetner-bottom >li:nth-child(1){
    border-left  0px
    
  }
</style>
