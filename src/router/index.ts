import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/dialog'
  },
  {
    path: '/dialog',
    name: 'dialog',
    component: () => import(/* webpackChunkName: "dialog" */ '@views/dialog.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
