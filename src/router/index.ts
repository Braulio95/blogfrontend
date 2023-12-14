import { createRouter, createWebHistory } from 'vue-router';
import MainPage from '../modules/MainPage.vue';
import ArticleDetail from '../modules/ArticleDetail.vue';
import Dashboard from '../modules/Dashboard.vue'

const routes = [
    { path: '/', component: MainPage },
    { path: '/:id', name: 'articleDetail', component: ArticleDetail },
    { path: '/dashboard', name: 'Dashboard', component: Dashboard },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;