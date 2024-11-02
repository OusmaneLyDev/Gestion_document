<!-- <template>
    <div class="documents-list">
      <h1>Liste des Documents</h1>
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
              <router-link :to="{ name: 'DocumentView', params: { id: document.id } }">Voir</router-link>
              <button @click="deleteDocument(document.id)">Supprimer</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  import { useDocumentStore } from '@/stores/useDocumentStore';
  
  export default {
    name: 'DocumentList',
    setup() {
      const documentStore = useDocumentStore();
      const loading = ref(false);
      const error = ref(null);
  
      // Fonction pour récupérer les documents
      const fetchDocuments = async () => {
        loading.value = true;
        error.value = null;
        try {
          await documentStore.fetchDocuments();
        } catch (err) {
          error.value = 'Erreur lors de la récupération des documents : ' + err.message;
        } finally {
          loading.value = false;
        }
      };
  
      // Fonction pour supprimer un document
      const deleteDocument = async (id) => {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce document ?')) {
          try {
            await documentStore.deleteDocument(id);
            // Mettre à jour la liste localement
            documentStore.documents = documentStore.documents.filter(doc => doc.id !== id);
          } catch (err) {
            error.value = 'Erreur lors de la suppression : ' + err.message;
          }
        }
      };
  
      // Formater la date
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
        formatDate,
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
    color: white;
    background-color: #dc3545;
    border: none;
    cursor: pointer;
    border-radius: 4px;
  }
  button:hover {
    background-color: #c82333;
  }
  .error {
    color: red;
    margin-top: 10px;
    font-weight: bold;
  }
  </style>
   -->