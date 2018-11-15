<template>
 <div>
   <!-- 约伴详情 -->
   <PaetnerItem :parnerInfo="partnerInfo"></PaetnerItem>

   <!-- 最近加入 -->
   <div>
     <div class="recently-join">
       <span>最近加入</span>
     </div>
     
     <div class="recently-join-user">
       <ul class="recently-join-userheard">
         <li v-for="user in  this.partnerDetail.enrollList" :key="user.uid">
           <img :src="user.pic" alt="">
         </li>
       </ul>
     </div>
   </div>
  
  <!-- 评论 -->
   <div class="partner-comment">
     <ul class="partner-comment-list">
       <li class="partner-comment-item" v-for="(item, index) in this.commentList" :key="index">
         <img :src="item.user.pic" alt="">
         <span>{{item.user.nickname}}：</span>
         <span v-if="item.reuser.uid">
           <span>回复</span>
           <span>{{item.reuser.nickname}}：</span>
         </span>
         <span>{{item.content}}</span>
       </li>
     </ul>
   </div>
 </div>
</template>

<script>
import PaetnerItem from './AApartnerItem'
 export default {
   data () {//参数
     return {
         partnerid:'',
         partnerDetail:{},
         partnerInfo:{},
         commentList:[]
     }
   },
  
   created(){
    this.partnerid = this.$route.query.partnerid;
    this.$http.post('phone.php?m=appointment&a=view',{
  //        username:this.ruleForm.username,
          id:this.partnerid
        },{
          emulateJSON:true
        }).then(function(data){
          this.partnerDetail = data.data.data
          console.log('partnerDetail' , this.partnerDetail);
          var info = this.partnerDetail.detail
          info.isDetail = true
          this.$set(info, 'userInfo', this.partnerDetail.userInfo);
          this.partnerInfo = info
        }).catch(function(){
          alert('error')
        });

        this.$http.post('phone.php?m=comment&a=getList',{
          captionId:this.partnerid,
          sortId:'5'
        },{
          emulateJSON:true
        }).then(function(data){
          this.commentList = data.data.data.list
          console.log('commentListcommentList' , this.commentList);
        }).catch(function(){
          alert('error')
        });
   },
   components: {//挂载子组件
    PaetnerItem
   },
   mounted(){//方法
        
   }
 }
</script>
<style lang="stylus" rel="stylesheet/stylus">

@import "~css/var.styl"
  .recently-join{
    width 100%
    height 4rem
    border-top: 1rem solid #e0e0e0;
    display: flex;
    // justify-content:space-between;//横向居中
    align-items:Center;//垂直居中
  }
  .recently-join >span {
    display inline-block
    line-height 4rem
    width 100%
    padding-left 1rem
    font-weight bold
    font-size 1.3rem
    border-bottom .1rem solid #e0e0e0;
  }
  .recently-join-userheard{
    display flex
    width 100%
    overflow scroll
    white-space nowrap
    overflow-y hidden
    border-bottom  1rem solid #e0e0e0
  }
  .recently-join-userheard >li{
    float left
    margin 1rem 0 1rem 1rem
  }
  .recently-join-userheard >li >img {
    width 3rem
    height 3rem
    border-radius 1.5rem
    background-color red
  }
  .partner-comment-item{
    display flex
    align-items center
    border-bottom .1rem solid #e0e0e0
  }
  .partner-comment-item >img {
    width 3rem
    height 3rem
    border-radius 1.5rem
    margin 1rem
    
  }
</style>
