<template>
  <div class="container my-5">
    <h1 class="text-center mb-4">Liste des Statuts de Document</h1>

    <button class="btn btn-primary mb-4" @click="ajouterStatutModal">
      <i class="bi bi-file-earmark-plus"></i> Ajouter un Statut
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
        <tr v-for="statut in statuts" :key="statut.id" class="table-transparent">
          <td>{{ statut.nom }}</td>
          <td>{{ statut.description }}</td>
          <td>
            <button class="btn btn-info btn-sm me-2" @click="viewStatut(statut.id)">
              <i class="bi bi-eye"></i>
            </button>
            <button class="btn btn-warning btn-sm me-2" @click="editStatut(statut.id)">
              <i class="bi bi-pencil"></i>
            </button>
            <button class="btn btn-danger btn-sm" @click="deleteStatut(statut.id)">
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
        <tr v-if="statuts.length === 0">
          <td colspan="3" class="text-center">Aucun statut disponible.</td>
        </tr>
      </tbody>
    </table>

    <p v-if="errorMessage" class="text-danger text-center">{{ errorMessage }}</p>

    <!-- Modal pour ajouter un nouveau statut -->
    <div class="modal" tabindex="-1" v-if="showModal">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Ajouter un Nouveau Statut</h5>
            <button type="button" class="btn-close" @click="closeModal"></button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="nom">Nom</label>
              <input type="text" id="nom" v-model="nouveauStatut.nom" required class="form-control" />
            </div>
            <div class="form-group">
              <label for="description">Description</label>
              <textarea id="description" v-model="nouveauStatut.description" required class="form-control"></textarea>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" @click="closeModal">Fermer</button>
            <button type="button" class="btn btn-primary" @click="ajouterStatut">Ajouter</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useDocumentStatusStore } from '../stores/documentStatusStore';
import { computed, ref } from 'vue';

export default {
  name: "ListeStatutDocument",
  setup() {
    const documentStatusStore = useDocumentStatusStore();

    // Charger les statuts depuis le store
    documentStatusStore.fetchStatuts();

    const nouveauStatut = ref({
      nom: "",
      description: ""
    });
    const showModal = ref(false);

    const ajouterStatut = () => {
      documentStatusStore.ajouterStatut(nouveauStatut.value);
      nouveauStatut.value = { nom: "", description: "" }; // Réinitialiser le formulaire
      closeModal();
    };

    const closeModal = () => {
      showModal.value = false;
    };

    const ajouterStatutModal = () => {
      showModal.value = true;
    };

    const viewStatut = (id) => {
      documentStatusStore.$router.push({ name: 'ViewStatut', params: { id } });
    };

    const editStatut = (id) => {
      documentStatusStore.$router.push({ name: 'EditStatut', params: { id } });
    };

    const deleteStatut = (id) => {
      if (confirm("Êtes-vous sûr de vouloir supprimer ce statut ?")) {
        documentStatusStore.deleteStatut(id);
      }
    };

    return {
      statuts: computed(() => documentStatusStore.statuts),
      errorMessage: computed(() => documentStatusStore.errorMessage),
      nouveauStatut,
      ajouterStatut,
      showModal,
      closeModal,
      ajouterStatutModal,
      viewStatut,
      editStatut,
      deleteStatut
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 600px;
  margin: auto;
}

.table-transparent {
  background-color: transparent; /* Table transparente */
}

.table-transparent td, .table-transparent th {
  border: none; /* Pas de bordures */
}

.btn {
  transition: background-color 0.2s ease;
}

.btn:hover {
  opacity: 0.9;
}

.modal {
  display: block; /* Afficher le modal */
}
</style>
