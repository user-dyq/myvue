<template>
    <div>
      <ul class="line-filtrate-title">
        <li>
          {{this.city}}
          <img src="" alt="">
        </li>
        <li>
          {{this.theme}}
          <img src="" alt="">
        </li>
        <li>
          {{this.numberday}}
          <img src="" alt="">
        </li>
        <li>
          {{this.sort}}
          <img src="" alt="">
        </li>
      </ul>
    </div>
</template>

<script>
    export default {
      data(){
        return{
          city:"北京",
          theme:"全部主题",
          numberday:"行程天数",
          sort:"智能排序",
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .line-filtrate-title{
    width 100%
    height 3.5rem
    z-index 100
  }
  .line-filtrate-title{

  }
  .line-filtrate-title li{
    float left
    width 25%
    text-align center
    line-height 2rem
    border-right: 1px solid #e0e0e0;
    box-sizing: border-box
    margin-top .75rem
  }
  .line-filtrate-title li:last-child{
    border-right: 1px solid white;
  }

</style>
