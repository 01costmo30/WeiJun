import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '',
      name: 'home',
      component: HomeView
    },
    {
      path: '/About',
      name: '認識煒鈞',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/ContactUs',
      name: '聯絡方式',
      component: () => import('../components/ContactInfo.vue')
    }
  ],
  linkActiveClass: 'active violet',
  linkExactActiveClass: 'active violet'
})

export default router
