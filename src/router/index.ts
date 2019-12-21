import Vue from 'vue'
import Router from 'vue-router'

import AppRoutes from '@/views/routes';

import isloggedin from '@/middleware/isloggedin'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '',
      redirect: '/signin'
    },
    {
      path: '/signin',
      component: () => import('../views/auth/signin.vue')
    },
    ...AppRoutes
  ]
})

// router.beforeEach(isloggedin);

export default router;
