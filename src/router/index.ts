import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import TabsPage from '../views/TabsPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/home/',
    redirect: '/home/market'
  },
  {
    path: '/home/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: 'market'
      },
      {
        path: 'market',
        name: 'Market',
        component: () => import('@/views/Home.vue')
      },
      {
        path: 'search',
        component: () => import('@/views/Search.vue')
      },
      {
        path: 'orders',
        component: () => import('@/views/Orders.vue')
      },
      {
        path: 'profile',
        component: () => import('@/views/Profile.vue')
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/Register.vue')
  },
  {
    path: '/category/:category',
    name: 'Category',
    component: () => import('@/views/Category.vue')
  },
  {
    path: '/product/:id/detail',
    name: 'ProductDetail',
    component: () => import('@/views/ProductDetail.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('@/views/Cart.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
