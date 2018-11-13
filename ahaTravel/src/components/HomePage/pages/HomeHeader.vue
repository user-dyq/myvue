<template>
    <div class="app">
      <!--banner-->
      <div class="homeheader-swiper">
        <swiper :options="swiperOption" ref="swiperOption" v-if="swiperList.length>0" >
          <!-- slides -->
          <swiper-slide   v-for="item in swiperList" :key="item.id"><img :src="item.pic" alt=""></swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
       
      <!--路书分类-->
      <div class="home-lineclass">
        <div class="home-lineclass-title">路书分类</div>
        <ul class="home-lineclass-list">
          <li v-for="item in homedata.cateother" :key="item.cid">
            <img :src="item.pic" alt="">
            {{item.cname}}
          </li>

        </ul>
      </div>

      <!--当季推荐-->
      <div class="home-recommend">
        <ul class="home-recommend-list">
          <li v-for="item in homedata.lineDomestic" :key="item.sortid" v-on:click="lineDetail(item.aboutid)">
            <div class="home-recommendtype">当季推荐</div>
            <img :src="item.pic" alt="">
            <div class="home-recommendmsg">{{item.caption}}</div>
            <div class="home-recommendmsg">{{item.caption}}</div>
            <div class="home-recommendmsg">{{item.caption}}</div>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

    export default {
      props:['swiperList','homedata'],
      data(){
        return{
          swiperOption:{
            autoplay: {
              delay: 3000,
              disableOnInteraction: false,
            },
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            },
            observeParents:true,
            observer:true  
          }
        }

      },
      methods:{
        lineDetail(lineid){
           
          this.$router.push(
            {
              path: '/aaPartner',
              params: {   
                lineid: lineid, 
              },  
              query: {  
                lineid: lineid, 
              }
            }
          ) 
        }
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  //banner
  @import "~css/var.styl"
  .homeheader-swiper{
    background #ccc
    height 12rem
    /*padding-bottom 26.67%*///解决网上慢时页面跳动问题

  }
  .homeheader-swiper img{
    width 100%
    height 12rem
  }
  .swiper-pagination-fraction, .swiper-pagination-custom, .swiper-container-horizontal >.swiper-pagination-bullets{
    color white
    bottom .6rem
    font-size .32rem
  }

//  路书分类
  .home-lineclass-title{
    margin 1rem
    font-size 1.3rem
  }
  .home-lineclass-list{
    overflow scroll
    white-space nowrap
    overflow-y hidden
    height 5rem
  }
  .home-lineclass-list li{
    display inline-block
    padding 0 .2rem
    width 5rem
    height 5rem
    text-align center

  }
  .home-lineclass-list li img{
    width 3rem
    display block

    margin 0 auto
    margin-bottom .3rem
  }
//  当季推荐
  .home-recommend-list{
    overflow scroll
    white-space nowrap
  }
  .home-recommend-list li{
    display inline-block
    padding 0 .2rem
    width 10rem
    margin .5rem
    margin-right 0
    text-align center
    background-color: white
    position relative

  }
  .home-recommend-list li img{
    width 10rem
    height 5rem
    display block
    margin 0 auto
    margin-bottom .3rem
  }
  .home-recommendtype{
    position absolute
    background-color: red;
    left .4rem
    top .2rem
    padding .5rem
    border-radius .3rem
  }
  .home-recommendmsg{
    font-size 1.2rem
    margin-top 1rem
  }
</style>
