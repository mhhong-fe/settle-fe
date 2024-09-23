import { createRouter, createWebHistory } from 'vue-router';

import Bill from '../pages/bill/index.vue';
import Order from '../pages/order/index.vue';
import NotFound from '../pages/notFound/index.vue';

const routes = [
    { path: '/settle', redirect: '/settle/bill' },
    { path: '/settle/order', component: Order },
    { path: '/settle/bill', component: Bill },
    { path: '/:pathMatch(.*)*', component: NotFound },
];

const router = createRouter({
    // 这个值可以从基座传下来
    history: createWebHistory('fe'),
    routes,
});

export default router;
