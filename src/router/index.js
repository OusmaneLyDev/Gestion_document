import { createRouter, createWebHistory } from 'vue-router';
import DashboardView from '../views/DashboardView.vue';
import DocumentsView from '../views/DocumentsView.vue';
import UserLogin from '../components/UserLogin.vue';

const routes = [
  {
    path: '/',
    name: 'DashboardView',
    component: DashboardView,
  },
  {
    path: '/documents',
    name: 'DocumentsView',
    component: DocumentsView,
  },
  {
    path: '/login',
    name: 'UserLogin',
    component: UserLogin,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
