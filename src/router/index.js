import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import DashboardView from '../views/DashboardView.vue';
import DocumentsView from '../views/DocumentsView.vue';
import UserLogin from '../views/UserLogin.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import AddDocument from '../views/AddDocument.vue';
import ListeStatutDocumentView from '../views/ListeStatutDocumentView.vue'; 
import ListeTypeDocumentView from '../views/ListeTypeDocumentView.vue';
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
    component: AddDocument // Assurez-vous que le composant est importé
  },
  {
    path: '/utilisateurs',
    name: 'Utilisateurs',
    component: UtilisateurView, // Route vers le composant UtilisateurView
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
    path: '/liste-statut-document',
    name: 'ListeStatutDocument',
    component: ListeStatutDocumentView,
  },
  {
    path: '/liste-type-document',
    name: 'ListeTypeDocument',
    component: ListeTypeDocumentView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
