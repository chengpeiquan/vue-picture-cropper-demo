import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    redirect: {
      name: 'composition',
    },
  },
  {
    path: '/composition',
    name: 'composition',
    component: () =>
      import(/* webpackChunkName: "home" */ '@views/composition.vue'),
    meta: {
      title: '组合式 API 写法',
    },
  },
  {
    path: '/options',
    name: 'options',
    component: () =>
      import(/* webpackChunkName: "options" */ '@views/options.vue'),
    meta: {
      title: '选项式 API 写法',
    },
  },
  {
    path: '/fixedSize',
    name: 'fixedSize',
    component: () =>
      import(/* webpackChunkName: "fixedSize" */ '@/views/fixedSize.vue'),
    meta: {
      title: '固定尺寸模式',
    },
  },
  {
    path: '/round',
    name: 'round',
    component: () => import(/* webpackChunkName: "round" */ '@views/round.vue'),
    meta: {
      title: '圆形模式',
    },
  },
]

export default routes
