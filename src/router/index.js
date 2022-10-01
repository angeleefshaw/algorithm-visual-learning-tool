import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DepthFirstSearchView from '../views/DepthFirstSearchView.vue'
import VersionSort from '../views/VersionSortView.vue'
import Kadanes from '../views/KadanesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/DepthFirstSearch',
      name: 'DepthFirstSearch',
      component: DepthFirstSearchView
    },
    {
      path: '/VersionSort',
      name: 'VersionSort',
      component: VersionSort
    },
    {
      path: '/Kadanes',
      name: 'Kadanes',
      component: Kadanes
    }
  ]
})

export default router
