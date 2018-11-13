<template>
 <div>
     <LineDetailHeard></LineDetailHeard>    
     ddddd
 </div>
</template>

<script>
import LineDetailHeard from './LineDetailHeard'
 export default {
   data () {//参数
     return {
       lineid:'',
       lineDetail:{}
     }
   },
    created() {
    //这边接收上个组件传递过来的arry数组，赋值给data中定义的workTask
      this.lineid = this.$route.query.lineid;
      // alert(this.lineid)
      this.$http.post('phone.php?m=linetool&a=getLineDetail',{
  //        username:this.ruleForm.username,
          lineId:this.lineid
        },{
          emulateJSON:true
        }).then(function(data){
          this.lineDetail = data.data.data
          console.log('linedetali'+this.lineid , data);
        }).catch(function(){
          alert('error')
        });
    },
   components: {//挂载子组件
    LineDetailHeard
   },
   mounted(){//方法
  //       this.$http.get('phone.php?m=linetool&a=getLineDetail',{
  // //        username:this.ruleForm.username,
  //         lineId:this.lineid
  //       },{
  //         emulateJSON:true
  //       }).then(function(data){
  //         this.lineDetail = data.data.data
  //         console.log(data);
  //       }).catch(function(){
  //         alert('error')
  //       });
   }, 

 }
</script>

<style>

 
</style>
