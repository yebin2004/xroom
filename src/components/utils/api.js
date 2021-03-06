// api.js 
//模拟从后端服务获取数据，真正从后端服务获取数据的例子，请参考api copy.js
function httpGet({
  mockDataName
}) {
  return new Promise(async (resolve) => {
    if (mockDataName === '') resolve()
    const res = require('../../assets/mock/' + mockDataName + '.json')
    resolve(res)
  })
}

const httpPost = httpGet

export const getrmarticlelist = (params = {}) => httpGet({
  url: '/xroom/rmarticle/list',
  params
})

//登录
export const login = (data) => {
  console.debug("login")
  return httpPost({
    mockDataName: 'user',
    data
  })
}

//退出登录
export const logout = function (data) {
  return httpPost({
    mockDataName: '',
    data
  })
}

//仪表盘页获取园区数据
export const getparknamelist = (params = {}) => httpGet({
  mockDataName: 'park',
  params
})

//根据ID获取园区数据
export const getPark = (params = {}) => httpGet({
  mockDataName: 'park-info',
  params
})

//根据省份获取园区数据
export const getProvinceParkList = (params = {}) => httpGet({
  mockDataName: 'park-coord',
  params
})

//根据搜索园区并返回一条园区数据
export const searchPark = (params = {}) => httpGet({
  mockDataName: 'park-info',
  params
})

//返回营业收入最大的公司数据列表
export const getMaxIncomeList = (params = {}) => httpGet({
  mockDataName: 'ente-bar',
  params
})

//根据ID获取企业竞争力数据
export const getCompet = (params = {}) => httpGet({
  mockDataName: 'ente-compet',
  params
})

//根据搜索字搜索并返回一条企业竞争力数据
export const searchCompet = (params = {}) => httpGet({
  mockDataName: 'ente-compet',
  params
})

//根据企业名称返回一条企业数据
export const getCompany = (params = {}) => httpGet({
  mockDataName: 'enterprise',
  params
})