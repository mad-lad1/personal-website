import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:section',
      redirect: to => {
        return { path: '/', hash: `#${to.params.section}` }
      }
    }
  ]
})

// Add smooth scrolling behavior
router.beforeEach((to, from, next) => {
  if (to.hash) {
    next()
    setTimeout(() => {
      const element = document.querySelector(to.hash)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }, 100)
  } else {
    next()
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
})

export default router