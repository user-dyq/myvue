<template>
    <div class="mine-heard">
      <div class="mine-login">
        <span>您还未登录阿哈自驾</span>
        <router-link to="/login" >
          <button  >登录/注册</button>
        </router-link>

      </div>
      <ul class="mile-title-class">
        <li @click="goMyline">
          <img src="@/assets/img/mine/btn_activity@3x.png" alt="">
          路书
        </li>
        <li>
          <img src="@/assets/img/mine/btn_activity@3x.png" alt="">
          活动
        </li>
        <li>
          <img src="@/assets/img/mine/btn_activity@3x.png" alt="">
          约游</li>
        <li>
          <img src="@/assets/img/mine/btn_activity@3x.png" alt="">
          订单
        </li>
      </ul>

    </div>
</template>

<script>
    export default {
      methods:{
        loginaction(){
          this.$store.commit("setTransition", "turn-on");
        },
        goMyline(){
          
          this.$router.push(
            {
              path: '/myLine',
            }
          )
        }
      },

    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .mine-login{
    width 100%
    height 10rem
    background-color: #fff;
    background-color: rgb(96,107,128)

  }
  .mine-login span{
    display block
    text-align center
    color white
    font-size 1.5rem
    padding-top  3rem
  }
  .mine-login button {
    display block
    text-align center
    margin 0 auto
    height 3rem
    margin-top 1.5rem
    padding 0 1rem
    border: 1px solid white;
    color white
    font-size 1.7rem
    background-color: rgb(96,107,128)
    border-radius 1.5rem
  }
  .mile-title-class{
    width 100%
    height 7rem
    border-bottom: 1rem solid lightgray;

  }
  .mile-title-class li{
    width 25%
    float left
    text-align center
  }
  .mile-title-class li img{
    display block
    margin 1rem auto
    width 3rem
  }


</style>
