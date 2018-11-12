<template>
    <div class="login">
      <div class="login-back">
        <img src="@/assets/img/icon_arrow_back@3x.png" alt="">
      </div>
      <div class="login-logo border-bottom">
        <img src="@/assets/img/prompt_air1@3x.png" alt="">
      </div>
      <div class="login-message border-bottom">
        <img src="" alt="">
        <input type="text" placeholder="手机号" v-model="username">
      </div>
      <div class="login-message">
        <img src="" alt="">
        <input type="text" placeholder="密码" v-model="pwd">
      </div>
      <div class="loginbtn" @click="loginAction">
        登录
      </div>
      <div class="login-msg">
        <span class="login-forget">忘记密码?</span>
        <span class="login-register">注册</span>
      </div>

    </div>
</template>

<script>
    export default {
      data(){
        return{
          username:'',
          pwd:''
        }
      },
      methods:{
        loginAction(){
          //登录
          let msg
          if(!this.username){
            msg = "请填写手机号"
          }else if(!this.username){
            msg = "密码"
          }

        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">

  .login-back{
    position absolute
    top: 3rem
    left 1.2rem
    width 1rem
    height 1rem
  }
  .login-back img{
    width 100%
  }
  .login-logo{
    margin 10rem auto 3rem auto
    width 10rem
    height 8.5rem
   }
  .login-logo img{
    width 100%
  }
  .login-message{
    width 80%
    height 5rem
    margin 0 auto
    border-bottom: 1px solid #e0e0e0;
  }
  .login-message img{
    display inline-block
    width 1.6rem
    height 1.6rem
    margin-left 1.6rem
    background-color: red;
  }
  .login-message input{
    flex 1
    font-size 1.5rem
    line-height 3rem
    margin-top 1rem
    margin-left 1rem
    display inline-block
  }
  .loginbtn{
    width 80%
    height 4rem
    font-size 1.5rem
    color white
    background-color: red;
    margin 2.5rem auto
    text-align center
    line-height 4rem
    border-radius .5rem
  }
  .login-msg span{
    font-size 1.3rem
    color #707070

    display  inline-block
  }
  .login-forget{
    float left;
    margin-left 2rem
  }
  .login-register{
    float right;
    margin-right 2rem
  }

</style>
