// api.js
import {
  httpGet,
  httpPost
} from './http'

export const getrmarticlelist = (params = {}) => httpGet({
  url: '/xroom/rmarticle/list',
  params
})

//登录
export const login = (data) => {
  return httpPost({
    url: 'sys/loginonlypass',
    data
  })
}

//退出登录
export const logout = function (data) {
  console.debug('logout this', this)
  return httpPost({
    url: 'sys/logout',
    data
  })
}

//仪表盘页获取园区数据
export const getparknamelist = (params = {}) => httpGet({
  url: '/xroom/rmpark/parknamelist',
  params
})

//根据ID获取园区数据
export const getPark = (params = {}) => httpPost({
  url: '/xroom/rmpark/info/' + params.parkId
})

//根据省份获取园区数据
export const getProvinceParkList = (params = {}) => httpPost({
  url: '/xroom/rmpark/provinceparklist',
  params
})

//根据搜索园区并返回一条园区数据
export const searchPark = (params = {}) => httpPost({
  url: '/xroom/rmpark/searchpark',
  params
})

//返回营业收入最大的公司数据列表
export const getMaxIncomeList = (params = {}) => httpGet({
  url: '/xroom/rmcompet/maxincomelist',
  params
})

//根据ID获取企业竞争力数据
export const getCompet = (params = {}) => httpGet({
  url: '/xroom/rmcompet/info/' + params.comId
})

//根据搜索字搜索并返回一条企业竞争力数据
export const searchCompet = (params = {}) => httpGet({
  url: '/xroom/rmcompet/searchcompet',
  params
})

//根据企业名称返回一条企业数据
export const getCompany = (params = {}) => httpGet({
  url: '/xroom/rmcompany/getbyname',
  params
})