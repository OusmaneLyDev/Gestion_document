<template>
  <div class="container my-5">
    <h2 class="text-center mb-4">Gestion des Types de Document</h2>
    <button class="btn btn-primary mb-4" @click="goToAddType">
      <i class="bi bi-file-earmark-plus"></i> Ajouter un type
    </button>
    <table class="table table-hover">
      <thead>
        <tr>
          <th>Nom</th>
          <th>Description</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="type in types" :key="type.id">
          <td>{{ type.nom }}</td>
          <td>{{ type.description }}</td>
          <td>
            <button class="btn btn-info btn-sm me-2" @click="viewType(type.id)">
              <i class="bi bi-eye"></i>
            </button>
            <button class="btn btn-warning btn-sm me-2" @click="editType(type.id)">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-danger btn-sm" @click="deleteType(type.id)">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
        <tr v-if="types.length === 0">
          <td colspan="3" class="text-center">Aucun type trouvé</td>
        </tr>
      </tbody>
    </table>
    <p v-if="errorMessage" class="text-danger text-center">{{ errorMessage }}</p>
  </div>
</template>

<script>
import { useDocumentTypeStore } from '../stores/documentTypeStore';
import { computed } from 'vue';

export default {
  name: 'TypeDocumentView',
  setup() {
    const documentTypeStore = useDocumentTypeStore();

    // Charger les types de document depuis le store
    documentTypeStore.fetchTypes();

    // Fonctions pour naviguer et gérer les types
    const goToAddType = () => {
      documentTypeStore.$router.push({ name: 'AddType' });
    };
    const editType = (id) => {
      documentTypeStore.$router.push({ name: 'EditType', params: { id } });
    };
    const viewType = (id) => {
      documentTypeStore.$router.push({ name: 'ViewType', params: { id } });
    };
    const deleteType = (id) => {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce type de document ?")) {
        documentTypeStore.deleteType(id);
      }
    };

    return {
      types: computed(() => documentTypeStore.types),
      errorMessage: computed(() => documentTypeStore.errorMessage),
      goToAddType,
      editType,
      viewType,
      deleteType,
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 900px;
  margin: auto;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

h2 {
  font-size: 1.8rem;
  color: #333;
}

.table {
  border-collapse: collapse;
  background-color: transparent; /* Tableau transparent */
}

.table th {
  background-color: transparent; /* En-tête transparent */
  color: #333;
}

.table td {
  vertical-align: middle;
  background-color: transparent; /* Cellules transparentes */
}

.table-hover tbody tr:hover {
  background-color: rgba(0, 123, 255, 0.1); /* Effet de survol léger */
}

.btn {
  transition: background-color 0.2s ease;
}

.btn:hover {
  opacity: 0.9;
}
</style>
