 import Home from './components/home/Home.vue'
 import Login from './components/Login.vue'
 import Second from './components/common/Second.vue'
 import PaperDB from './components/paper-db/PaperDB.vue'
 import PaperList from './components/paper-db/PaperList.vue'
 import Paper from './components/paper-db/Paper.vue'
 import Integration from './components/integration/Integration.vue'
 import CoreCompat from './components/core-compat/CoreCompat.vue'
 import EnteCompat from './components/ente-compat/EnteCompat.vue'
 import Innovation from './components/innovation/Innovation.vue'
 import EnteCredit from './components/ente-credit/EnteCredit.vue'
 import Requirement from './components/requirement/Requirement.vue'
 import Park from './components/park/Park.vue'
 import Page404 from './components/common/Page404.vue'
 const routers = [{
     path: '/',
     component: Home,
     meta: {
       requiresAuth: true
     }
   },
   {
     path: '/login',
     component: Login,
     meta: {
       requiresAuth: false
     }
   },
   {
     path: '/',
     component: Second,
     meta: {
       requiresAuth: true
     },
     children: [{
       path: 'paper-db',
       name: 'paperDB',
       component: PaperDB,
       meta: {
         menuItem: '战略规划库',
         requiresAuth: true
       }
     }, {
       path: 'paper-list',
       name: 'paperList',
       component: PaperList,
       meta: {
         menuItem: '战略规划库',
         requiresAuth: true
       }
     }, {
       path: 'paper',
       name: 'paper',
       component: Paper,
       meta: {
         menuItem: '战略规划库',
         requiresAuth: true
       }
     }, {
       path: 'integration',
       name: 'integration',
       component: Integration,
       meta: {
         menuItem: '军民融合大数据',
         requiresAuth: true
       }
     }, {
       path: 'core-compat',
       name: 'coreCompat',
       component: CoreCompat,
       meta: {
         menuItem: '企业国防核心能力指数',
         requiresAuth: true
       }
     }, {
       path: 'ente-compat/:comId',
       name: 'enteCompat',
       component: EnteCompat,
       meta: {
         menuItem: '企业竞争力',
         requiresAuth: true
       }
     }, {
       path: 'innovation',
       name: 'innovation',
       component: Innovation,
       meta: {
         menuItem: '国防工业创新指数',
         requiresAuth: true
       }
     }, {
       path: 'ente-credit',
       name: 'enteCredit',
       component: EnteCredit,
       meta: {
         menuItem: '企业信用指数',
         requiresAuth: true
       }
     }, {
       path: 'requirement',
       name: 'requirement',
       component: Requirement,
       meta: {
         menuItem: '军民融合需求推荐',
         requiresAuth: true
       }
     }, {
       path: 'park/:parkId',
       name: 'park',
       component: Park,
       meta: {
         menuItem: '产业园区',
         requiresAuth: true
       }
     }, {
       path: '*',
       name: '404',
       component: Page404,
       alias: '404'
     }]
   }

 ]
 export default routers