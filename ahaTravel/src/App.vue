<template>
  <div>

      <router-view/>
      <FootBar/>


  </div>
</template>

<script>
  import FootBar from './components/FootBar/FootBar.vue'

  export default {
    components:{
      FootBar
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .app
    color: read
</style>
