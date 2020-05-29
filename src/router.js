import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Index from './pages/index.vue'
import Product from './pages/product.vue'
import Detail from './pages/detail.vue'
import Home from './pages/home.vue'
import Order from './pages/order.vue'
import OrderList from './pages/orderList.vue'
import OrderConfirm from './pages/orderConfirm.vue'
import OrderPay from './pages/orderPay.vue'
import AliPay from './pages/alipay.vue'
import Cart from './pages/cart.vue'
import Login from './pages/login.vue'
export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: Home,
      name: 'home',
      children: [
        {
          path: '/index',
          component: Index,
          name: 'index'
        },
        {
          path: '/product/:id',
          component: Product,
          name: 'product'
        },
        {
          path: '/detail',
          component: Detail,
          name: 'detail'
        }
      ]
    },
    {
      path: '/order',
      component: Order,
      name: 'order',
      children: [
        {
          path: 'list',
          component: OrderList,
          name: 'order-list'
        },
        {
          path: 'pay',
          component: OrderPay,
          name: 'order-pay'
        },
        {
          path: 'confirm',
          component: OrderConfirm,
          name: 'order-confirm'
        },
        {
          path: 'alipay',
          component: AliPay,
          name: 'alipay'
        }
      ]
    },
    {
      path: '/login',
      component: Login,
      name: 'login'
    },
    {
      path: '/cart',
      component: Cart,
      name: 'cart'
    }
  ]
}
)