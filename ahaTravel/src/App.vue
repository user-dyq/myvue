<template>
  <div>
    <router-view class="bodyview"/>
    <mt-header class="nav-title" fixed :title=this.navtitle v-if="this.navtitle">
      <router-link to="/" slot="left">
        <mt-button  icon="back"></mt-button>
      </router-link>
      <mt-button slot="right"></mt-button>
    </mt-header>
    <FootBar/>
  </div>
</template>

<script>
  import FootBar from './components/FootBar/FootBar.vue'

  export default {
    
    components:{
      FootBar
    },
    data () {
      return {
        navtitle:'title'
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .bodyview{
    margin-top 3rem
  }
</style>
