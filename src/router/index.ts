import { createRouter, createWebHistory } from 'vue-router';

import Home from '../pages/home/index.vue';
import About from '../pages/about/index.vue';

const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    { path: '/about', component: About },
];

const router = createRouter({
    // 这个值可以从基座传下来
    history: createWebHistory('fe'),
    routes,
});

export default router;
