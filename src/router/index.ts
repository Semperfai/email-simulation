import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../pages/HomePage.vue'
import MessagePage from '../pages/MessagePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
})

export default router
