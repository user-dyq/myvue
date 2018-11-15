<template>
 
 <div>
  <div class="aapaetner-title">
   <img src="" alt="">
   <span>AA约伴</span>
   <img src="" alt="" @click='goPubPartner'> 
  </div>
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
        partnerList:[],
        lineId:'101268'
     }
   },
   components: {//挂载子组件
    PartnerItem
   },
   mounted(){//方法
    
        this.$http.post('phone.php?m=appointment&a=getList',{
  //        username:this.ruleForm.username,
          lineId:this.lineId,
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
    },
    goPubPartner(){
      this.$router.push(
        {
          path: '/pubAApartner',
          params: {   
            lineId: this.lineId, 
          },  
          query: {  
            lineId: this.lineId, 
          }
        }
      ) 
    }

  },
 }
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import "~css/var.styl"
  .aapaetner-title{
    display flex
    justify-content space-between
    align-items center
    height 4.4rem
    padding 0 1rem
  }
  .aapaetner-title >img {
    width 2rem
    height 2rem
    background-color green
  }
  .aapaetner-item{
    border-bottom: 1rem solid #e0e0e0;
  }
</style>
