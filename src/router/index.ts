import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/home/index.vue';
import About from '../pages/about/index.vue';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
