<template>
    <div class="user-list">
      <table class="table table-hover">
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
              <i @click="openModal('view', user)" class="fas fa-eye text-info action-icon" title="Voir"></i>
              <i @click="openModal('edit', user)" class="fas fa-edit text-warning action-icon" title="Modifier"></i>
              <i @click="openModal('delete', user)" class="fas fa-trash text-danger action-icon" title="Supprimer"></i>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  import { Modal } from 'bootstrap';
  import { useUserStore } from '../stores/user';
  
  export default {
    name: 'UserList',
    setup() {
      const userStore = useUserStore();
      const selectedUser = ref({});
  
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
        });
      };
  
      const openModal = (type, user) => {
        selectedUser.value = user;
        const modalId = type === 'view' ? '#viewModal' : type === 'edit' ? '#editModal' : '#deleteModal';
        const modalElement = document.querySelector(modalId);
        if (modalElement) {
          const modalInstance = new Modal(modalElement);
          modalInstance.show();
        }
      };
  
      return {
        users,
        formatDate,
        openModal,
        selectedUser,
      };
    },
  };
  </script>
  
  <style scoped>
  .user-list {
    width: 120%;
    margin-top: 20px;
  }
  
  .table {
    border: none;
  }
  
  .table th {
    background-color: transparent;
    color: #333;
    padding: 12px;
    text-align: left;
  }
  
  .table td, .table th {
    padding: 12px;
  }
  
  .action-icon {
    cursor: pointer;
    margin: 0 5px;
    font-size: 1rem;
    transition: color 0.3s;
  }
  
  .action-icon:hover {
    color: #0056b3;
  }
  
  .table-hover tbody tr:hover {
    background-color: #f1f1f1;
  }
  </style>
  