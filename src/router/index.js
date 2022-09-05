import Vue from 'vue'
import VueRouter from 'vue-router'
import AboutMeView from '../views/AboutMeView.vue'
import WorksView from '../views/WorksView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'aboutMe',
    component: AboutMeView
  },
  {
    path: '/works',
    name: 'works',
    component: WorksView  
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
