// http.js
import axios from 'axios'
import {
  vm
} from '../../main.js'

// 环境的切换
if (process.env.NODE_ENV === 'development') {
  axios.defaults.baseURL = '/api'
} else if (process.env.NODE_ENV === 'production') {
  //axios.defaults.baseURL = 'http://war-room.qdefense.cn:8080'
  axios.defaults.baseURL = 'http://war-room.qdefense.cn:8080'
}

// 请求拦截器
axios.interceptors.request.use(
  config => {
    console.log('axios token', localStorage.token)
    localStorage.token && (config.headers.token = localStorage.token)
    return config
  },
  error => {
    return Promise.error(error)
  })

axios.defaults.timeout = 10000

axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.post['Access-Control-Allow-Headers'] = "Origin, X-Requested-With, Content-Type, Accept"

// 响应拦截器
axios.interceptors.response.use(function (response) {
  console.log('response', response);
  if (response.status === 200) {
    if (response.data.code === 401) {
      // 未登录跳转登录页
      vm.$toast.warning('即将跳转到登录页面...');
      setTimeout(() => {
        window.location.href = '/login';
      }, 3000)
      return Promise.reject(checkStatus(response))
    } else {
      return Promise.resolve(checkStatus(response));
    }
  } else if ((status > 200 && status < 300) || status === 304) {
    return Promise.resolve(checkStatus(response));
  } else {
    return Promise.reject(checkStatus(response))
  }
}, error => {
  console.log('error', error);
  // 对响应错误做处理...
  if (error.response) {
    return Promise.reject(checkStatus(error.response));
  } else if (
    error.code == "ECONNABORTED" &&
    error.message.indexOf("timeout") != -1
  ) {
    return Promise.reject({
      msg: "请求超时"
    });
  } else {
    return Promise.reject({
      msg: "未知错误"
    });
  }

})

function checkStatus(response) {
  const status = response.status || -1000; // -1000 自己定义，连接错误的status
  if ((status >= 200 && status < 300) || status === 304) {
    // 如果http状态码正常，则直接返回数据
    return response.data;
  } else {
    let errorInfo = '';
    switch (status) {
      case -1:
        errorInfo = '远程服务响应失败,请稍后重试';
        break;
      case 400:
        errorInfo = '400：错误请求';
        break;
      case 401:
        errorInfo = '401：访问令牌无效或已过期';
        break;
      case 403:
        errorInfo = '403：拒绝访问';
        break;
      case 404:
        errorInfo = '404：资源不存在';
        break;
      case 405:
        errorInfo = '405：请求方法未允许'
        break;
      case 408:
        errorInfo = '408：请求超时'
        break;
      case 500:
        errorInfo = '500：访问服务失败';
        break;
      case 501:
        errorInfo = '501：未实现';
        break;
      case 502:
        errorInfo = '502：无效网关';
        break;
      case 503:
        errorInfo = '503：服务不可用'
        break;
      default:
        errorInfo = `连接错误`
    }
    return {
      status,
      msg: errorInfo
    }
  }
}

// get 请求
export function httpGet({
  url,
  params = {}
}) {
  return new Promise((resolve, reject) => {
    axios.get(url, {
      params
    }).then((res) => {
      handleResult(res, resolve, reject)
    }).catch(function (err) {
      vm.$toast.error(err.msg || err || '未知错误')
    })
  })
}

// post请求
export function httpPost({
  url,
  data = {},
  params = {}
}) {
  return new Promise((resolve, reject) => {
    axios({
      url,
      method: 'post',
      transformRequest: [function (data) {
        let ret = ''
        for (let it in data) {
          ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
        }
        return ret
      }],
      // 发送的数据
      data,
      // url参数
      params

    }).then(res => {
      handleResult(res, resolve, reject)
    }).catch(function (err) {
      vm.$toast.error(err.msg || '未知错误')
    })
  })
}

const handleResult = function (res, resolve, reject) {
  if (res.code === 0) {
    resolve(res)
  } else {
    if (res.code === 1) {
      vm.$toast.warning(res.msg || '未知问题')
      reject(res)
    } else {
      throw new Error(res.msg)
    }
  }
}