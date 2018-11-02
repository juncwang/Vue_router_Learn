import Vue from 'vue'
// 引入 vue-router
import VueRouter from 'vue-router'
import App from './App.vue'
// 引入所需要的组建
import Home from './components/Home'
import Menu from './components/Menu'
import Admin from './components/Admin'
import About from './components/about/About'
import Login from './components/Login'
import Register from './components/Register';

// 二级 router
import Contact from './components/about/Contact'
import Delivery from './components/about/Delivery'
import History from './components/about/History'
import OrderingGuide from './components/about/OrderingGuide'

// vue 需要使用 vue-router
Vue.use(VueRouter)

// vue-router 跳转组建配置表
const routes = [
  // path 输出路径 name 跳转路径名称 component 路径下所展示的组建
  { path: "/", name: "homeLink", component: Home },
  { path: "/menu", name: "menuLink", component: Menu },
  // 使用组建独享守卫
  { path: "/admin", name: "adminLink", component: Admin,
    // beforeEnter: (to,from,next) => {
    // alert("非登录状态, 无法进入该页面")
    // next("/login")
    // }
  },
  // 添加二级 router 属性为 children
  { path: "/about", name: "aboutLink", redirect: "/contact", component: About, children: [
    { path: "/contact", name: "contactLink", component: Contact },
    { path: "/history", name: "historyLink", component: History },
    { path: "/delivery", name: "deliveryLink", component: Delivery },
    { path: "/orderingGuide", name: "orderingGuideLink", component: OrderingGuide }
  ] },
  { path: "/login", name: "loginLink", component: Login },
  { path: "/register", name: "registerLink", component: Register },
  // 如果用户输入错误路径, 我们希望让错误路径跳转到我们指定路径上,则加入一下路径配置
  // path 匹配所有路径, redirect 跳转到目标路径
  { path: "*", redirect: "/" }
]

// 配置 vue-router 
const router = new VueRouter({
  // 将配置表引入
  routes,
  // 访问组建无需 # 标签
  mode: "history"
})

// router 全局守卫
// router.beforeEach((to, from, next) => {
  
//   if(to.path == '/login' || to.path == '/register'){
//     next()
//   }else{
//     alert("还没有登录, 请先登录!")
//     next('/login')
//   }
// })

// router 后置钩子
// router.afterEach((to, from) => {
//   alert("after each")
// })

new Vue({
  // 使用 vue-router
  router,
  el: '#app',
  render: h => h(App)
})
