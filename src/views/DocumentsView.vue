<template>
  <div class="container-wrapper">
    <div class="container">
      <h1 class="text-center">Gestion des Documents</h1>
      <button class="btn btn-primary my-4" @click="goToAddDocument">
        <i class="fas fa-plus"></i> Ajouter un document
      </button>
      <!-- Table des documents -->
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Date</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="document in documents" :key="document.id">
            <td>{{ document.titre }}</td>
            <td>{{ new Date(document.date_depot).toLocaleDateString() }}</td>
            <td>{{ document.typeDocument.nom }}</td>
            <td>
              <button class="btn btn-sm btn-info" @click="viewDocument(document.id)">
                <i class="fas fa-eye"></i> Voir
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
            <td colspan="4" class="text-center">Aucun document trouvé</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'DocumentsView',
  data() {
    return {
      documents: [
        { id: 1, titre: 'Document 1', date_depot: '2024-10-01', typeDocument: { nom: 'Rapport' } },
        { id: 2, titre: 'Document 2', date_depot: '2024-10-10', typeDocument: { nom: 'Facture' } },
        { id: 3, titre: 'Document 3', date_depot: '2024-10-15', typeDocument: { nom: 'Contrat' } }
      ]
    };
  },
  created() {
    this.fetchDocuments();
  },
  methods: {
    async fetchDocuments() {
      try {
        const response = await axios.get('http://localhost:5000/api/documents');
        this.documents = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des documents:', error);
      }
    },
    goToAddDocument() {
      this.$router.push({ name: 'AddDocument' });
    },
    viewDocument(id) {
      console.log('Voir les détails du document:', id);
      this.$router.push({ name: 'ViewDocument', params: { id } });
    },
    editDocument(id) {
      console.log('Modifier le document:', id);
      this.$router.push({ name: 'EditDocument', params: { id } });
    },
    async deleteDocument(id) {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce document ?')) {
        try {
          await axios.delete(`http://localhost:5000/api/documents/${id}`);
          this.fetchDocuments();
        } catch (error) {
          console.error('Erreur lors de la suppression du document:', error);
        }
      }
    }
  }
}
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
  max-width: 900px;
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

.table th, .table td {
  padding: 20px 30px; /* Augmente l'espace pour espacer les colonnes */
  text-align: center;
}
</style>
