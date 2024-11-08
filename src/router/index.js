import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import DashboardView from '../views/DashboardView.vue';
import DocumentsView from '../views/DocumentsView.vue';
import UserLogin from '../components/UserLogin.vue';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
import AddDocument from '../views/AddDocument.vue';
import ListeStatutDocument from '../components/ListeStatutDocument.vue'; 
import ListeTypeDocument from '../components/ListeTypeDocument.vue';
import TypeDocumentView from '../views/TypeDocumentView.vue';
import UtilisateurView from '../views/UtilisateurView.vue'; 
import AddUser from '../Utilisateur/AddUser.vue';
import AddTypeDocument from '../components/AddTypeDocument.vue';
import EditDocument from '../views/EditDocument.vue';
import DocumentDetails from '@/components/Document/DocumentDetails.vue';


const routes = [
  {
    path: '/',
    name: 'login',
    component: UserLogin,
  },
  {
    path: '/homepage',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/add-type',
    name: 'AddType',
    component: AddTypeDocument
  },
  { path: '/edit/:id', 
    name: 'EditDocument', 
    component: EditDocument 
   },
   {
    path: '/document/:id',
    name: 'DocumentDetails',
    component: DocumentDetails,
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
//   {
//     path: '/documents',
//     name: 'documents',
//     component: DocumentList,
//   },
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
