import Vue from 'vue'
import Vuex from 'vuex';
Vue.use(Vuex);
const store = new Vuex.Store({
  state: {
    userName: localStorage.userName,
    token: localStorage.token,
    companyName: localStorage.companyName

  },
  mutations: {
    //登录成功将, token保存在localStorage中
    LOGIN: (state, data) => {
      localStorage.token = data;
      state.token = data;
    },
    //退出登录将, token清空
    LOGOUT: (state) => {
      localStorage.removeItem('token');
      state.token = null
      state.userName = ''
    },
    USERNAME: (state, data) => {
      //把用户名存起来
      state.userName = data;
      localStorage.userName = data;
    },
    COMPANYNAME: (state, data) => {
      state.companyName = data
      localStorage.companyName = data;
    }
  },
  actions: {
    UserLogin({
      commit
    }, data) {
      commit('LOGIN', data);
    },
    UserLogout({
      commit
    }) {
      commit('LOGOUT');
    },
    UserName({
      commit
    }, data) {
      commit('USERNAME', data);
    },
    CompanyName({
      commit
    }, data) {
      commit('COMPANYNAME', data);
    }
  }
})

export default store