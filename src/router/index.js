import { createRouter, createWebHistory } from 'vue-router'
import Main from '../views/Main.vue'
import Convert from '../views/Convert.vue'

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/convert',
    name: 'convert',
    component: Convert
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
