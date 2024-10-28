import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import DashboardView from '../views/DashboardView.vue';
import DocumentsView from '../views/DocumentsView.vue';
import UserLogin from '../views/UserLogin.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import AddDocument from '../views/AddDocument.vue';


const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomePage,
  },
  {
    path: '/add-document',
    name: 'AddDocument',
    component: AddDocument // Assurez-vous que le composant est importé
  },
  {
    path: '/dashboard',
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
