import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/WeiJun',
      name: 'home',
      component: HomeView
    },
    {
      path: '/WeiJun/About',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/WeiJun/ContactUs',
      name: 'contactUs',
      component: () => import('../components/ContactInfo.vue')
    }
  ],
  linkActiveClass: 'active violet',
  linkExactActiveClass: 'active violet'
})

export default router
