<template>
 <div>
     <div class="myLine-title">
         <img src="" alt="">
         路书
         <img src="" alt="">
     </div>
     <ul class="myLine-router">
         <li>我的</li>
         <li>收藏</li>
         <li>草稿</li>
     </ul>
 </div>
</template>

<script>
 export default {
   data () {//参数
     return {
        token:'546f537f44e6030a523535bf922ca65f'
     }
   },
   components: {//挂载子组件

   },
   mounted(){//方法
    this.$http.post('phone.php?m=myline&a=getlist',{
          token:this.token,
        },{
          emulateJSON:true
        }).then(function(data){
          this.commentList = data.data.data.list
          console.log('commentListcommentList' , this.commentList);
        }).catch(function(){
          alert('error')
        });
   }
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">

@import "~css/var.styl"
    .myLine-title{
        width 100%
        height 4.4rem
        margin-top 2.2rem
        display flex
        align-items center
        justify-content space-between
        line-height 4.4rem
        // border-bottom: .1rem solid #e0e0e0
        box-shadow: 0px .1rem #e0e0e0
    }
    .myLine-title img {
        margin 1rem
        width 2rem
        height 2rem
        background-color red
    }
    .myLine-router{
        width 100%
        height 4rem
        border-bottom: .1rem solid #e0e0e0;
    }
    .myLine-router >li {
        float left
        width 33.3333%
        text-align center
        line-height 4rem
    }
</style>
