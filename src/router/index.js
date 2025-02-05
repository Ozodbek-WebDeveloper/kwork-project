import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/test.vue'

const card = () =>import('@/components/card.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path:'/',
      name:'home',
      component:home
    },
    {
      path: '/card/:id',
      name: 'card',
      component: card,
    },
    
  ],
})

export default router
