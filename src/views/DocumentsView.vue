<template>
  <div class="documents-list">
    <h1>Liste des Documents</h1>
    <button class="btn btn-primary mb-4" @click="goToAddDocument">
      <i class="bi bi-file-earmark-plus"></i> 
      Ajouter un document
    </button>
    <div v-if="loading">Chargement...</div>
    <div v-if="error" class="error">{{ error }}</div>
    <table v-else>
      <thead>
        <tr>
          <th>ID</th>
          <th>Titre</th>
          <th>Description</th>
          <th>Date de Dépôt</th>
          <th>Type de Document</th>
          <th>Statut du Document</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="document in documents" :key="document.id">
          <td>{{ document.id }}</td>
          <td>{{ document.titre }}</td>
          <td>{{ document.description }}</td>
          <td>{{ formatDate(document.date_depot) }}</td>
          <td>{{ document.typeDocument.nom }}</td>
          <td>{{ document.statutDocument.nom }}</td>
          <td>
            <!-- Bouton pour Voir -->
            <router-link :to="{ name: 'DocumentsView', params: { id: document.id } }" class="btn btn-outline-info btn-sm me-2">
              <i class="bi bi-eye"></i>
            </router-link>
            <!-- Bouton pour Modifier -->
            <button class="btn btn-outline-warning btn-sm me-2" @click="editDocument(document.id)">
              <i class="bi bi-pencil-square"></i>
            </button>
            <!-- Bouton pour Supprimer -->
            <button class="btn btn-outline-danger btn-sm" @click="deleteDocument(document.id)">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
        <tr v-if="documents.length === 0">
          <td colspan="7" class="text-center">Aucun document trouvé</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { ref, computed, onMounted } from 'vue';
import { useDocumentStore } from '@/stores/useDocumentStore';
import axios from 'axios';
import { useRouter } from 'vue-router';

export default {
  name: 'DocumentsView',
  setup() {
    const documentStore = useDocumentStore();
    const loading = ref(false);
    const error = ref(null);
    const router = useRouter();

    const fetchDocuments = async () => {
      loading.value = true;
      error.value = null;
      try {
        const response = await axios.get('http://localhost:3051/api/documents');
        documentStore.documents = response.data;
      } catch (err) {
        error.value = 'Erreur lors de la récupération des documents : ' + err.message;
      } finally {
        loading.value = false;
      }
    };

    const goToAddDocument = () => {
      router.push({ name: 'AddDocument' });
    };

    const editDocument = (id) => {
      router.push({ name: 'EditDocument', params: { id } });
    };

    const deleteDocument = async (id) => {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce document ?')) {
        try {
          await axios.delete(`http://localhost:3051/api/documents/${id}`);
          documentStore.documents = documentStore.documents.filter(doc => doc.id !== id);
        } catch (err) {
          error.value = 'Erreur lors de la suppression : ' + err.message;
        }
      }
    };

    const formatDate = (dateString) => {
      const date = new Date(dateString);
      return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      });
    };

    onMounted(fetchDocuments);

    return {
      documents: computed(() => documentStore.documents),
      loading,
      error,
      deleteDocument,
      editDocument,
      formatDate,
      goToAddDocument,
    };
  },
};
</script>

<style scoped>
.documents-list {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}
table {
  width: 100%;
  border-collapse: collapse;
}
th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}
th {
  background-color: #f2f2f2;
}
button {
  padding: 5px 10px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
}
.error {
  color: red;
  margin-top: 10px;
  font-weight: bold;
}
</style>
