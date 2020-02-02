import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routers from './routers'
import store from './store'
import "./assets/css/index.css"
import "./assets/css/common.css"
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css"
import echarts from 'echarts'
import axios from 'axios';
import VueBootstrapToasts from "vue-bootstrap-toasts";
import ReadMore from 'vue-read-more';
Vue.use(VueBootstrapToasts);
Vue.use(ReadMore);
Vue.prototype.$echarts = echarts
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  routes: routers
})

router.beforeEach((to, from, next) => {
  //matched的数组中包含$route对象的检查元字段
  //arr.some() 表示判断该数组是否有元素符合相应的条件, 返回布尔值
  if (to.matched.some(record => record.meta.requiresAuth)) {
    //判断当前是否有登录的权限
    //console.log('store.state.token', localStorage.token)
    if (localStorage.token === undefined) {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath
        }
      })
    } else {
      next()
    }
  } else {
    next() // 确保一定要调用 next()
  }
})

export const vm = new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')