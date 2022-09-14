import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import DFSView from '../views/DFSView.vue'
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
      name: 'DFS',
      component: DFSView
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
