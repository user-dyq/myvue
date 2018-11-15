import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage/HomePage'
import Line from '@/components/Line/Line'
import Add from '@/components/Add/Add'
import Action from '@/components/Action/Action'
import Mine from '@/components/Mine/Mine'
import Login from '@/components/Mine/login/Login'
import LineDetail from '@/components/Line/LineDetail/LineDetail'
import AAPartner from '@/components/Line/LineDetail/AApartner/AApartner'
import AAPartnerDetail from '@/components/Line/LineDetail/AApartner/AApartnerDetail'
import PubAApartner from '@/components/Line/LineDetail/AApartner/PubAApartner'
import MyLine from '@/components/Mine/MyLine/MyLine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/homePage',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/line',
      name: 'Line',
      component: Line
    },
    {
      path: '/add',
      name: 'Add',
      component: Add
    },
    {
      path: '/action',
      name: 'Action',
      component: Action
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/',
      redirect: '/homePage'//  默认
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/lineDetail',
      name: 'LineDetail',
      component: LineDetail
    },
    {
      path: '/aaPartner',
      name: 'AAPartner',
      component: AAPartner
    },
    {
      path: '/aaPartnerDetail',
      name: 'AAPartnerDetail',
      component: AAPartnerDetail
    },
    {
      path: '/pubAApartner',
      name: 'PubAApartner',
      component: PubAApartner
    },
    {
      path: '/myLine',
      name: 'MyLine',
      component: MyLine
    }
  ]
})
