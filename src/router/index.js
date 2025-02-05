import { createRouter, createWebHistory } from 'vue-router'
import home from '@/components/test.vue'

const card = () =>import('@/components/card.vue')
const login = () =>import('@/components/login.vue')
const SignUp = () =>import('@/components/signUp.vue')


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
    {
      path:'/login',
      name:'login',
      component:login
    },
    {
      path:'/SignUp',
      name:'SignUp',
      component:SignUp
    }
    
  ],
})

export default router
