<template>
  <div v-if="loading" class="loading-container">
    <div class="spinner"></div> Chargement...
  </div>
  <div v-else>
    <div v-if="document" class="document-details">
      <h2 class="document-title">{{ document.titre }}</h2>
      <div class="document-info">
        <p><strong>ID :</strong> {{ document.id }}</p>
        <p><strong>Titre :</strong> {{ document.titre }}</p>
        <p><strong>Description :</strong> {{ document.description }}</p>
        <p><strong>Date de Dépôt :</strong> {{ document.date_depot }}</p>
        <p><strong>Type de Document :</strong> {{ document.type_document }}</p>
        <p><strong>Statut du Document :</strong> {{ document.statut_document }}</p>
        <button class="btn btn-info" @click="goBack">Fermer</button>
      </div>
    </div>
    <div v-else class="no-document">
      <p>Document non trouvé.</p>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { useDocumentStore } from '@/stores/useDocumentStore';

// Récupération du store
const documentStore = useDocumentStore();
const route = useRoute();
const router = useRouter();
const document = ref(null);
const loading = ref(true);

// Charger le document au montage du composant
onMounted(async () => {
  const id = route.params.id; // Récupérer l'ID depuis la route
  document.value = await documentStore.fetchDocumentById(id);
  loading.value = false;
});

// Fonction pour fermer la vue et revenir à la liste des documents
const goBack = () => {
  router.push('/documents'); // Rediriger vers la route des documents
};
</script>

<style scoped>
/* Conteneur de chargement */
.loading-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #f7f7f7;
  font-family: Arial, sans-serif;
  font-size: 1.5rem;
  color: #34495e;
}

/* Animation du spinner */
.spinner {
  border: 6px solid #f3f3f3;
  border-top: 6px solid #3498db;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

/* Styles des détails du document */
.document-details {
  max-width: 800px;
  margin: 30px auto;
  padding: 30px;
  background-color: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  font-family: 'Roboto', sans-serif;
}

.document-title {
  font-size: 2.2rem;
  color: #2c3e50;
  text-align: center;
  margin-bottom: 20px;
}

.document-info p {
  font-size: 1.1rem;
  color: #34495e;
  line-height: 1.6;
}

.document-info strong {
  color: #2980b9;
}

.btn-info {
  display: inline-block;
  padding: 10px 20px;
  color: #fff;
  background-color: #3498db;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
  font-size: 1rem;
}

.btn-info:hover {
  background-color: #2980b9;
}

/* Message si aucun document n'est trouvé */
.no-document {
  text-align: center;
  font-size: 1.3rem;
  color: #e74c3c;
  margin-top: 50px;
}

/* Style de fond */
body {
  background-color: #ecf0f1;
}
</style>
