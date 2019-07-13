import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false
// 导入全局样式
import './assets/base.css'
// 导入路由相关
import VueRouter from 'vue-router'

// 导入登录页
import login from './components/01.login.vue'
Vue.use(VueRouter)
const routes= [
  // 重定向
  // {
  //   path:'/',
  //   redirect:'login'
  // },
  // 登录页  
  {
    path:'/login',
    component:login
  }
]
const router = new VueRouter({
  routes
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
