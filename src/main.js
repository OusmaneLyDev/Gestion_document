import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import router from './router'; // Importez le router
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';

// Créez l'application Vue
const app = createApp(App);

// Options par défaut pour Toast
const options = {
    position: 'top-right', // Position de la notification
    timeout: 5000, // Durée d'affichage
    closeOnClick: true, // Fermer la notification au clic
    pauseOnHover: true, // Mettre en pause au survol
    draggable: true, // Rendre la notification draggable
};

// Utilisez les plugins
app.use(Toast, options); // Passez les options ici
const pinia = createPinia();
app.use(pinia);
app.use(router); 

// Montez l'application
app.mount('#app');
