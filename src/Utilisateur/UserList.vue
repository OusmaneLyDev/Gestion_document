<template>
    <div class="user-list">
      <!-- Bouton pour ajouter un utilisateur avec icône -->
      <button @click="goToAddUser" class="add-user-btn" title="Ajouter un utilisateur">
        <i class="fas fa-user-plus"></i> Ajouter un utilisateur
      </button>
  
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nom</th>
            <th>Email</th>
            <th>Date de création</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.id }}</td>
            <td>{{ user.nom }}</td>
            <td>{{ user.email }}</td>
            <td>{{ formatDate(user.date_creation) }}</td>
            <td>
              <!-- Icônes pour les actions CRUD avec espace entre chaque icône -->
              <i @click="openModal('view', user)" class="fas fa-eye text-info" title="Voir"></i>
              <i @click="openModal('edit', user)" class="fas fa-edit text-warning" title="Modifier"></i>
              <i @click="openModal('delete', user)" class="fas fa-trash text-danger" title="Supprimer"></i>
            </td>
          </tr>
        </tbody>
      </table>
  
      
      <div class="modal fade" id="viewModal" tabindex="-1" aria-labelledby="viewModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="viewModalLabel">Détails de l'utilisateur</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p><strong>Nom :</strong> {{ selectedUser.nom }}</p>
              <p><strong>Email :</strong> {{ selectedUser.email }}</p>
              <p><strong>Date de création :</strong> {{ formatDate(selectedUser.date_creation) }}</p>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal Modifier -->
      <div class="modal fade" id="editModal" tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="editModalLabel">Modifier l'utilisateur</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <p>Formulaire de modification pour {{ selectedUser.nom }}</p>
              <!-- Inclure ici le formulaire de modification -->
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
              <button type="button" class="btn btn-primary" @click="saveEdit">Enregistrer</button>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Modal Supprimer -->
      <div class="modal fade" id="deleteModal" tabindex="-1" aria-labelledby="deleteModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="deleteModalLabel">Confirmer la suppression</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              Êtes-vous sûr de vouloir supprimer {{ selectedUser.nom }} ?
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Annuler</button>
              <button type="button" class="btn btn-danger" @click="confirmDelete">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { onMounted, ref, computed } from 'vue';
  import { useUserStore } from '../stores/user';
  import { Modal } from 'bootstrap';
  
  export default {
    name: 'UserList',
    setup() {
      const userStore = useUserStore();
      const selectedUser = ref({});
      const modalType = ref('');
  
      onMounted(() => {
        userStore.fetchUsers();
      });
  
      const users = computed(() => userStore.users);
  
      const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('fr-FR', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        });
      };
  
      const openModal = (type, user) => {
        selectedUser.value = user;
        modalType.value = type;
        const modalId = type === 'view' ? '#viewModal' : type === 'edit' ? '#editModal' : '#deleteModal';
        const modalElement = document.querySelector(modalId);
        if (modalElement) {
          const modalInstance = new Modal(modalElement);
          modalInstance.show();
        }
      };
  
      const saveEdit = () => {
        // Ajoutez ici la logique pour sauvegarder les modifications
      };
  
      const confirmDelete = () => {
        userStore.deleteUser(selectedUser.value.id);
      };
  
      return {
        users,
        formatDate,
        openModal,
        selectedUser,
        saveEdit,
        confirmDelete,
      };
    },
  };
  </script>
  
  <style scoped>
  .user-list {
    width: 100%;
  }
  table {
    width: 100%;
    border-collapse: collapse;
  }
  th, td {
    padding: 10px;
    text-align: left;
  }
  .add-user-btn {
    margin-bottom: 10px;
    background-color: #4CAF50;
    color: white;
    border: none;
    padding: 10px;
    cursor: pointer;
    border-radius: 5px;
  }
  .add-user-btn i {
    font-size: 18px;
    margin-right: 5px;
  }
  .add-user-btn:hover {
    background-color: #45a049;
  }
  td i {
    cursor: pointer;
    margin: 0 8px; /* Espace entre les icônes */
  }
  td i:hover {
    color: #007BFF;
  }
  </style>
  