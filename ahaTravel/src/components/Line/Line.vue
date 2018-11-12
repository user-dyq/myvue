<template>
    <div>
      <div class="line-search">
        <img src="" alt="">
        <input type="text" placeholder="请输入景点/目的地">
      </div>
      <LineFiltrate></LineFiltrate>
      <ul class="line-list">
        <li class="line-item" v-for="item in this.lineList" :key="item.id">
          <div class="line-title">{{item.caption}}</div>
          <div class="line-img">
            <img :src="item.pic" alt="">
          </div>
          <div class="line-bootom">
            <span>作者</span>

            <span class="line-price">2</span>
          </div>
        </li>
      </ul>
    </div>

</template>

<script>
  import LineFiltrate from './pages/FineFiltrate.vue'
    export default {
      components:{
        LineFiltrate,
      },
      
      data(){
        return{
          lineList:[]
        }
      },
      mounted(){
        this.$http.get('phone.php?m=line&a=getlist',{
//        username:this.ruleForm.username,
//        password:this.ruleForm.password
        },{
          emulateJSON:true
        }).then(function(data){

          this.lineList = data.data.data.freeline
          console.log(this.lineList);
        }).catch(function(){
          alert('error')
        });
      },

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~css/var.styl"
  .line-search{
    position relative
    width 90%
    height 3rem
    background-color: $backColor
    border-radius .5rem
    margin .5rem auto
    margin-top 2.5rem

  }
  .line-search img{
    position absolute
    width 2rem
    height 2rem
    top .5rem
    left 1rem
    background-color: red;
  }
  .line-search input{
    position absolute
    left 3rem
    line-height 3rem
  }
  .line-item{
    border-bottom: 1rem solid $backColor;
  }

  .line-title{
    margin-left 1rem
    font-size 1.3rem
    margin-top 1rem
    margin-bottom 1rem
  }
  .line-img{
    padding-left 1rem
    padding-right 1rem
    box-sizing: border-box
    width 100%
    height 10rem
    overflow hidden
  }
  .line-img img{
    width 100%
  }
  .line-bootom{
    margin 1rem
  }
  .line-price{
    float right
  }
</style>
