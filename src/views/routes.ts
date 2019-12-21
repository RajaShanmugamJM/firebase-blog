import { RouteConfig } from 'vue-router';

const routes: Array<RouteConfig> = [
    {
        path: '/gallery',
        component: () => import('./app/home/Home.vue')
    },
    {
        path: '/new-post',
        component: () => import('./app/post/addedit/addedit.vue')
    },
    {
        path: '/post/:id/:title',
        component: () => import('./app/post/view/view.vue')
    }
];

export default routes;