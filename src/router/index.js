import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/layout'

Vue.use(Router)


const Login = () => import(/* webpackChunkName: "Login" */ '@/views/login/index');
const Dashboard = () => import(/* webpackChunkName: "Dashboard" */ '@/views/dashboard/index');

export const constantRoutes = [{
  path: '/login',
  name: 'login',
  component: Login
}, {
  path: '/',
  component: Layout,
  redirect: '/dashboard',
  children: [
    {
      path: 'dashboard',
      component: Dashboard,
      name: 'Dashboard',
      meta: { title: 'Dashboard', icon: 'dashboard', affix: true }
    }
  ]
}];

const createRouter = () => new Router({
  scrollBehavior: () => ({
      y: 0
  }),
  routes: constantRoutes
});

const router = createRouter();

export default router;
