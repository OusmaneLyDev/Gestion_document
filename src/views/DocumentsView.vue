<template>
  <div class="container-wrapper">
    <div class="container">
      <h1 class="text-center">Gestion des Documents</h1>
      <button class="btn btn-primary my-4" @click="goToAddDocument">
        <i class="fas fa-plus"></i> Ajouter un document
      </button>

      <table class="table table-striped">
        <thead>
          <tr>
            <th>Titre</th>
            <th>Date Dépôt</th>
            <th>Date Validation</th>
            <th>Type</th>
            <th>Statut</th>
            <th>Utilisateur</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="document in documents" :key="document.id">
            <td>{{ document.titre }}</td>
            <td>{{ new Date(document.date_depot).toLocaleDateString() }}</td>
            <td>{{ document.date_validation ? new Date(document.date_validation).toLocaleDateString() : 'En attente' }}</td>
            <td>{{ document.typeDocument.nom }}</td>
            <td>{{ document.statutDocument.nom }}</td>
            <td>{{ document.utilisateur.nom }}</td>
            <td>
              <button class="btn btn-sm btn-info" @click="viewDocument(document.id)">
                <i class="fas fa-eye"></i> Voir
              </button>
              <button class="btn btn-sm btn-secondary" @click="viewDocumentHistory(document.historique)">
                <i class="fas fa-history"></i> Historique
              </button>
              <button class="btn btn-sm btn-warning" @click="editDocument(document.id)">
                <i class="fas fa-edit"></i> Modifier
              </button>
              <button class="btn btn-sm btn-danger" @click="deleteDocument(document.id)">
                <i class="fas fa-trash"></i> Supprimer
              </button>
            </td>
          </tr>
          <tr v-if="documents.length === 0">
            <td colspan="7" class="text-center">Aucun document trouvé</td>
          </tr>
        </tbody>
      </table>
      <!-- Affichage de l'historique si sélectionné -->
      <DocumentHistory v-if="selectedHistorique" :historique="selectedHistorique" />
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import DocumentHistory from './DocumentHistory.vue';

export default {
  name: 'DocumentList',
  components: {
    DocumentHistory,
  },
  data() {
    return {
      documents: [], // Liste des documents
      selectedHistorique: null, // Historique sélectionné pour affichage
    };
  },
  created() {
    this.fetchDocuments(); // Récupérer les documents lors de la création du composant
  },
  methods: {
    async fetchDocuments() {
      try {
        const response = await axios.get('http://localhost:5000/api/documents'); // API pour récupérer les documents
        this.documents = response.data; // Mettre à jour la liste des documents
      } catch (error) {
        console.error('Erreur lors de la récupération des documents:', error);
      }
    },
    goToAddDocument() {
      this.$router.push({ name: 'AddDocument' }); // Rediriger vers le formulaire d'ajout de document
    },
    viewDocument(id) {
      this.$router.push({ name: 'ViewDocument', params: { id } }); // Rediriger vers la vue d'un document spécifique
    },
    viewDocumentHistory(historique) {
      this.selectedHistorique = historique; // Afficher l'historique du document
    },
    editDocument(id) {
      this.$router.push({ name: 'EditDocument', params: { id } }); // Rediriger vers le formulaire d'édition
    },
    async deleteDocument(id) {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce document ?')) {
        try {
          await axios.delete(`http://localhost:5000/api/documents/${id}`); // Appel API pour supprimer le document
          this.fetchDocuments(); // Mettre à jour la liste des documents
        } catch (error) {
          console.error('Erreur lors de la suppression du document:', error);
        }
      }
    },
  },
};
</script>

<style scoped>
.container-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  min-height: 100vh;
}

.container {
  background-color: #f8f9fa;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 30px 40px;
  max-width: 1000px;
  width: 100%;
}

h1 {
  margin-bottom: 30px;
}

button {
  margin: 0 5px;
}

.table {
  margin-top: 20px;
}

.table th,
.table td {
  padding: 15px;
  text-align: center;
}
</style>
