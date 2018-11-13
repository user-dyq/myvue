<template>
 <div>
 
   <PaetnerItem :parnerInfo="partnerInfo"></PaetnerItem>
 </div>
</template>

<script>
import PaetnerItem from './AApartnerItem'
 export default {
   data () {//参数
     return {
         partnerid:'',
         partnerDetail:{},
         partnerInfo:{}
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
   },
   components: {//挂载子组件
    PaetnerItem
   },
   mounted(){//方法
    this.$http.post('phone.php?m=appointment&a=view',{
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
   }
 }
</script>

<style>

 
</style>
