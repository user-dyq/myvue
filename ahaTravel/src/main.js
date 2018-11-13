// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'css/reset.css'
import VueResource from 'vue-resource'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Viewer from 'v-viewer'
import 'viewerjs/dist/viewer.css'
// import vuex from 'vuex'
// Vue.use(vuex);

Vue.use(VueResource)
Vue.config.productionTip = false
Vue.use(VueAwesomeSwiper)
Vue.use(Viewer, {
  defaultOptions: {
      zIndex: 9999
  }
})
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
