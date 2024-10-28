import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Importez le router
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const app = createApp(App);
app.use(router); // Utilisez le router dans l'application
app.mount('#app');