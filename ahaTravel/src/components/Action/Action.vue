<template>
    <div>
      <div class="action-search">
        <img src="" alt="">
        <input type="text" placeholder="输入关键词搜索目的地">
      </div>
      <ul>
        <li class="action-item" v-for="item in actionList" :key="item.id">
          <div class="action-title">{{item.caption}}</div>
          <div class="action-img">
            <img :src="item.pic" alt="">
          </div>

          <div class="action-msg">
            <div class="action-time textcolor">{{item.starttime}} <span v-if="item.city">{{item.city}}</span></div>
            <div class="action-leader textcolor">
              <span>领队:{{item.username}}</span>
              <div class="action-checknum">
                <img src="" alt="">
                <span>{{item.click_num}}</span>
              </div>
              <span v-if="item.totaldistance" class="action-distance">全程:{{item.totaldistance}}</span>
            </div>
            <div class="action-bottom">
              <span class="action-price">
                ￥<span>{{item.minprice}}</span>起
              </span>
              <span class="textcolor">剩余名额</span>
            </div>
          </div>
        </li>
      </ul>
     
    </div>
</template>

<script>
    export default {
      data (){
        return{
          city:'',
          actionList:[]
        }
      },
      mounted() {
        //请求活动列表数据
        this.$http.get('phone.php?m=activity&a=getlist',{
//        username:this.ruleForm.username,
//        password:this.ruleForm.password
        },{
          emulateJSON:true
        }).then(function(data){
          console.log(data.data.data.list);
          this.actionList = data.data.data.list

        }).catch(function(){
          alert('error')
        });
      },
  }
  </script>

  <style lang="stylus" rel="stylesheet/stylus">
  @import "~css/var.styl"
  .action-search{
    width 90%
    height 3rem
    background-color: $backColor
    border-radius .5rem
    margin .5rem auto
    margin-top 2.5rem
  }
  .action-search input{
    line-height 3rem
  }
  .action-item{
    position relative
    overflow hidden
    margin-left 1.5rem
    border-bottom: 1px solid #e0e0e0;
    padding-bottom  1rem
  }
  .action-title{
    font-size 1.5rem
    margin-top 1rem
    margin-bottom 1rem

  }
  .action-img{
    float left
  }
  .action-img img{
    border-radius .3rem
    width 10rem
    height 8rem
  }
  .action-msg{
    overflow hidden//加完之后左边距离就显示出来了(不清楚为啥)
    padding-left 1rem

  }

  .action-leader{
    color #777070
    font-size 1.2rem
    margin-top 2rem
    margin-bottom 1rem
    flex 1
  }

  .action-checknum{
    display inline-block
  }
  .action-distance{
    float right
  }
  .action-bottom{
    position absolute
    bottom 1rem
  }
  .action-price{
    color #f40
    font-size 1.2rem
  }
  .action-price span{
    color #f40
    font-size 1.5rem
    font-weight bold
  }
  .textcolor{
    color #777070
    font-size 1.2rem
  }
</style>
