<template>
  <div class="container mt-4">
    <h1 class="text-center">Gestion des Documents</h1>
    <button class="btn btn-primary my-4" @click="goToAddDocument">Ajouter un document</button>
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
        <tr v-for="(document, index) in documents" :key="index">
          <td>{{ document.name }}</td>
          <td>{{ document.date }}</td>
          <td>{{ document.type }}</td>
          <td>
            <button class="btn btn-sm btn-warning" @click="editDocument(index)">Modifier</button>
            <button class="btn btn-sm btn-danger" @click="deleteDocument(index)">Supprimer</button>
          </td>
        </tr>
        <tr v-if="documents.length === 0">
          <td colspan="4" class="text-center">Aucun document trouvé</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'DocumentsView',
  data() {
    return {
      documents: [
        { name: 'Document 1', date: '12/10/2024', type: 'PDF' },
        // Ajoutez d'autres documents ici si nécessaire
      ]
    };
  },
  methods: {
    goToAddDocument() {
      this.$router.push({ name: 'AddDocument' }); // Redirige vers la page d'ajout de document
    },
    editDocument(index) {
      // Logique pour modifier le document (ex: rediriger vers une page d'édition)
      console.log('Modifier le document:', this.documents[index]);
    },
    deleteDocument(index) {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce document ?')) {
        this.documents.splice(index, 1); // Supprime le document de la liste
      }
    }
  }
}
</script>

<style scoped>
.container {
  background-color: #f8f9fa; /* Couleur de fond pour la gestion des documents */
  border-radius: 8px; /* Coins arrondis pour le conteneur */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Ombre légère */
  padding: 20px; /* Padding interne */
}

h1 {
  margin-bottom: 20px; /* Espace en bas du titre */
}
</style>
