import Vue from 'vue'
import vuex from 'vuex'
Vue.use(vuex)
export default new vuex.Store({
  state: {
  },
  computed: {
    // 计算属性的 getter
    token: function () {
      let msg = this.state.token
      msg = JSON.parse(window.localStorage.getItem('token') || null)
      return msg
    }
  },
  mutations: {
    settoken (state, value) {
      alert(222)
      this.token = value
      window.localStorage.setItem('token', JSON.stringify('items'))
    }
  }
})
// export default new Vuex.Store({
//     state: {
//         loginInfo: null,//当前用户简要信息
//     },
//     getters: {
//         GET_LOGININFO(state) {
//             //先从state里面获取用户登录信息
//             let loginInfo = state.loginInfo;
//             //如果 state 里面获取不到，那么从localStorage里面获取
//             if(!loginInfo){
//                 loginInfo = JSON.parse(window.localStorage.getItem('loginInfo') || null)
//             }
//             return loginInfo;
//         },
//     },
//     mutations: {
//         SET_LOGININFO(state, data){
//             state.userInfo = data.data;
//         }
//     },
//     actions: {
//         Login(context, data) {
//             axios.post('/api/login', {
//                 userName: 'admin',
//                 pwd: '123456'
//             })
//             .then((res) => {
//                 //登录成功，保存当前用户信息到 state 里面，以便其他组建获取
//                 context.commit('SET_LOGININFO', res.data);
//                 //保存到localStorage里面
//                 window.localStorage.setItem('loginInfo', JSON.stringify(items));
//                 return res;                
//             })
//             .catch(function (error) {});
//         },
//     }
// })