import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login'
import StockRegiter from '../views/StockRegister'
import Stock from '../views/Stock'
import InventaryMovimentation from  '../views/InventaryMovimentation'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
   path: '/',
   name: 'Login',
   component: Login
  },
  {
    path: '/stockregister',
    name: 'StockRegister',
    component: StockRegiter
   },
   {
    path: '/stock',
    name: 'Stock',
    component: Stock,
   },
   {
    path: '/inventory',
    name: 'InventaryMovimentation',
    component: InventaryMovimentation,
   },
   
]

const router = new VueRouter({
  routes
})

export default router
