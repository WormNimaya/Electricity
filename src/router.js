import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

// import Index from './pages/index.vue'
// import Home from './pages/home.vue'
// import Order from './pages/order.vue'


export default new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/index',
      component: () => import('./pages/home.vue'),
      name: 'home',
      children: [
        {
          path: '/index',
          component: () => import('./pages/index.vue'),
          name: 'index'
        },
        {
          path: '/product/:id',
          component: () => import('./pages/product.vue'),
          name: 'product'
        },
        {
          path: '/detail/:id',
          component: () => import('./pages/detail.vue'),
          name: 'detail'
        }
      ]
    },
    {
      path: '/order',
      component: () => import('./pages/order.vue'),
      name: 'order',
      children: [
        {
          path: 'list',
          component: () => import('./pages/orderList.vue'),
          name: 'order-list'
        },
        {
          path: 'pay',
          component: () => import('./pages/orderPay.vue'),
          name: 'order-pay'
        },
        {
          path: 'confirm',
          component: () => import('./pages/orderConfirm.vue'),
          name: 'order-confirm'
        },
        {
          path: 'alipay',
          component: () => import('./pages/alipay.vue'),
          name: 'alipay'
        }
      ]
    },
    {
      path: '/personal',
      redirect: '/personal/login',
      component: () =>import('./pages/personal.vue'),
      name: 'personal',
      children: [
        {
          path: 'login',
          component: () => import('./pages/login.vue'),
        },
        {
          path: 'register',
          component: () => import('./pages/register.vue'),
        }
      ]
    },
    {
      path: '/cart',
      component: () => import('./pages/cart.vue'),
      name: 'cart'
    }
  ]
}
)