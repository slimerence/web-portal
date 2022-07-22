import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/pages/layout/index';

Vue.use(Router);

let baserouter = '/';

export const constantRoutes = [
    {
        path: '/',
        name: 'Home',
        component: Layout,
        redirect: `/index`,
        children: [
            {
                path: 'index',
                name: 'index',
                component: () => import('@/pages/main/index'),
                meta: { title: 'home' },
            },
        ],
    },

]

const createRouter = (routes = constantRoutes) => new Router({
    scrollBehavior: () => ({ y: 0 }),
    routes: routes,
    base: baserouter,
    mode: 'history',
  });
  

  export default createRouter(constantRoutes);
