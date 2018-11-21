<template>
<keep-alive>
 
  <mt-tabbar v-model="selected" fixed  v-show="$route.meta.navShow">
    <mt-tab-item id="homePage">
      <img slot="icon" src="../../assets/img/bar/tab_rec_pre@3x.png" v-if="this.selected == 'homePage'" >
      <img slot="icon" src="../../assets/img/bar/tab_rec_nor@3x.png" v-else>
      <span v-if="this.selected == 'homePage'" class="selectedItem">主页</span>
      <span v-else>主页</span>
    </mt-tab-item>
    <mt-tab-item id="line">
      <img slot="icon" src="../../assets/img/bar/tab_route_pre@3x.png" v-if="this.selected == 'line'" >
      <img slot="icon" src="../../assets/img/bar/tab_route_nor@3x.png" v-else>
      <span v-if="this.selected == 'line'" class="selectedItem">路书</span>
      <span v-else>路书</span>
    </mt-tab-item>
    <mt-tab-item id="action">
      <img slot="icon" src="../../assets/img/bar/tab_activity_pre@3x.png" v-if="this.selected == 'action'" >
      <img slot="icon" src="../../assets/img/bar/tab_activity_nor@3x.png" v-else>
      <span v-if="this.selected == 'action'" class="selectedItem">活动</span>
      <span v-else>活动</span>
    </mt-tab-item>
    <mt-tab-item id="mine">
      <img slot="icon" src="../../assets/img/bar/tab_i_pre@3x.png" v-if="this.selected == 'mine'">
      <img slot="icon" src="../../assets/img/bar/tab_i_nor@3x.png" v-else>
      <span v-if="this.selected == 'mine'" class="selectedItem">我的</span>
      <span v-else>我的</span>
    </mt-tab-item>
  </mt-tabbar>
</keep-alive>
 
</template>
<script>
export default {
  data(){
    return{
    //选中的tabbar值message为外面页面传入的值selected
       selected:'homePage',
    }
  },
   
  watch: {
    selected: function (val, oldVal) {
      // 这里就可以通过 val 的值变更来确定去向
      this.selected = val;
      
      this.$router.push('/'+val);
    }
  },
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.selectedItem{
  color #d20202
}
</style>
