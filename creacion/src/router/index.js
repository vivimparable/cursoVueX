import { createRouter, createWebHistory } from 'vue-router'
import WelcomePresentation from '../views/WelcomePresentation.vue'
import UserView from '../Modulos/Usuario/router/index.js'
import CoursesOn from '../Modulos/Usuario/router/Courses.js'
import ContentSpecified from '../Modulos/Usuario/router/ContentSpecified.js'
import TemaSpecified from '../Modulos/Usuario/router/TemaSpecified.js'


const routes = [
  {
    path: '/',
    name: 'WelcomePresentation',
    component: WelcomePresentation
  },
  {
    path: '/LayoutUserView',
    ...UserView
  },{
    path: '/CoursesOn',
    ...CoursesOn
  },{
    path: '/:id',
    ...ContentSpecified
  },{
    path: '/:id/:tema',
    ...TemaSpecified
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
