import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import MessagePage from '../pages/MessagePage.vue'
import LoginPage from '../pages/LoginPage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: LoginPage
  },
  {
    path: '/email',
    name: 'email',
    component: () => import('../pages/template/EmailPage.vue'),
    children: [
      {
        path: '',
        name: 'home-page',
        component: HomePage
      },
      {
        path: 'message/:id',
        component: MessagePage
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
