<template>
 <div>
   <ul>
     <li class="aapaetner-item" v-for="item in this.partnerList" :key='item.id' @click='goAApartnerDetail(item.id)'>
       <PartnerItem :parnerInfo="item"></PartnerItem>
     </li>
   </ul>
 </div>
</template>

<script>
import PartnerItem from './AApartnerItem'
 export default {
   data () {//参数
     return {
        partnerList:[]
     }
   },
   components: {//挂载子组件
    PartnerItem
   },
   mounted(){//方法
    
        this.$http.post('phone.php?m=appointment&a=getList',{
  //        username:this.ruleForm.username,
          lineId:'101268',
          type:'line',
          page:'1'
        },{
          emulateJSON:true
        }).then(function(data){
          this.partnerList = data.data.data
          console.log('partnerList' , this.partnerList);
        }).catch(function(){
          alert('error')
        });
         
   },
  methods:{
    goAApartnerDetail(partnerid){
      this.$router.push(
        {
          path: '/aaPartnerDetail',
          params: {   
            partnerid: partnerid, 
          },  
          query: {  
            partnerid: partnerid, 
          }
        }
      ) 
    }
  },
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "~css/var.styl"
  .aapaetner-item{
    border-bottom: 1rem solid #e0e0e0;
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
