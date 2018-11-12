import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import HomePage from '@/components/HomePage/HomePage'
import Line from '@/components/Line/Line'
import Add from '@/components/Add/Add'
import Action from '@/components/Action/Action'
import Mine from '@/components/Mine/Mine'
import Login from '@/components/Mine/login/Login'
import LineDetail from '@/components/Line/LineDetail/LineDetail'

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
      path:'/',
      redirect: '/homePage'//默认
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
    }


  ]
})