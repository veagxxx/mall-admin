import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router'
const Layout = () => import('@/layout/Layout.vue')
const Home = () => import('@/pages/home/index.vue')
// 路由菜单
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/index',
  },
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    children: [
      { path: '/index', name: 'index', component: Home },
    ]
  }
]

const router: Router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router 