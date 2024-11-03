import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import DashboardView from '../views/DashboardView.vue';
import DocumentsView from '../views/DocumentsView.vue';
import UserLogin from '../views/UserLogin.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import AddDocument from '../views/AddDocument.vue';
import ListeStatutDocument from '../components/ListeStatutDocument.vue'; 
import ListeTypeDocument from '../components/ListeTypeDocument.vue';
import TypeDocumentView from '../views/TypeDocumentView.vue';
import UtilisateurView from '../views/UtilisateurView.vue'; 
import AddUser from '../Utilisateur/AddUser.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/add-user',
    name: 'AddUser',
    component: AddUser
  },
  {
    path: '/add-document',
    name: 'AddDocument',
    component: AddDocument
  },
  {
    path: '/utilisateurs',
    name: 'Utilisateurs',
    component: UtilisateurView,
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
  {
    path: '/statut-document',
    name: 'StatutDocument',
    component: ListeStatutDocument,
  },
  {
    path: '/liste-type-document',
    name: 'ListeTypeDocument',
    component: ListeTypeDocument,
  },
  {
    path: '/types-document/:id',
    name: 'TypeDocumentView',
    component: TypeDocumentView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
