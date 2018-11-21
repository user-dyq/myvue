<template>
    <div class="home">
      <HomeHeader :swiperList="swiperList" :homedata="homedata"></HomeHeader>
    </div>
</template>

<script>
  import HomeHeader from './pages/HomeHeader.vue'
   
    export default {
      components:{
        HomeHeader
      },
      data(){
        return{
          swiperList:[],
          homedata:{}
        }
      },
      mounted(){

        this.$http.get('phone.php?m=default&a=recommend',{
  //        username:this.ruleForm.username,
  //        password:this.ruleForm.password
        },{
          emulateJSON:true
        }).then(function(data){
          this.homedata = data.data.data
          console.log(this.homedata);
        }).catch(function(){
          alert('error')
        });

        this.$http.get('phone.php?m=default&a=banner',{
          sortid:'1'
        },{
          emulateJSON:true
        }).then(function(data){

          this.swiperList = data.data.data

        }).catch(function(){
          alert('error')
        });

      },
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .home{
    width 100%
  }
</style>
