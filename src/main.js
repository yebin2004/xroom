import Vue from 'vue'
import App from './App.vue'
import 'bootstrap'
import "bootstrap/dist/css/bootstrap.min.css";
import echarts from 'echarts'
import "./assets/css/index.css";
Vue.prototype.$echarts = echarts
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')