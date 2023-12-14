import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import MainPage from '../views/MainPage.vue';
import ArticleDetail from '../views/ArticleDetail.vue';

const routes: Array<RouteRecordRaw> = [
    { path: '/', component: MainPage },
    { path: '/:id', component: ArticleDetail, name: 'articleDetail' },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;