<template>
    <div class="container">
      <h1>Liste des Types de Document</h1>
      <button @click="goToAddType" class="add-type-btn">
        <i class="fas fa-plus"></i> Ajouter un type
      </button>
      <div class="type-list">
        <table class="table table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nom</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="type in types" :key="type.id">
              <td>{{ type.id }}</td>
              <td>{{ type.nom }}</td>
              <td>{{ type.description }}</td>
              <td>
                <i @click="openModal('view', type)" class="fas fa-eye text-info action-icon" title="Voir"></i>
                <i @click="openModal('edit', type)" class="fas fa-edit text-warning action-icon" title="Modifier"></i>
                <i @click="openModal('delete', type)" class="fas fa-trash text-danger action-icon" title="Supprimer"></i>
              </td>
            </tr>
            <tr v-if="types.length === 0">
              <td colspan="4" class="text-center">Aucun type trouvé</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { ref, computed, onMounted } from 'vue';
  import { Modal } from 'bootstrap';
  import { useDocumentTypeStore } from '../stores/documentTypeStore';
  import { useRouter } from 'vue-router';
  
  export default {
    name: 'TypeDocumentList',
    setup() {
      const documentTypeStore = useDocumentTypeStore();
      const selectedType = ref({});
      const router = useRouter();
  
      onMounted(() => {
        documentTypeStore.fetchTypes();
      });
  
      const types = computed(() => documentTypeStore.types);
  
      const openModal = (type, documentType) => {
        selectedType.value = documentType;
        const modalId = type === 'view' ? '#viewModal' : type === 'edit' ? '#editModal' : '#deleteModal';
        const modalElement = document.querySelector(modalId);
        if (modalElement) {
          const modalInstance = new Modal(modalElement);
          modalInstance.show();
        }
      };
  
      const goToAddType = () => {
        router.push({ name: 'AddType' });
      };
      
  
      return {
        types,
        openModal,
        selectedType,
        goToAddType,
      };
    },
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
    margin: auto;
    padding: 20px;
    background-color: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  .type-list {
    width: 140%;
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
  
  .table td,
  .table th {
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
  .table th:nth-child(3), .table td:nth-child(7) {
    width: 140px; 
  }
  
  .add-type-btn {
    display: inline-flex;
    align-items: center;
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 1rem;
    margin-bottom: 15px;
  }
  
  .add-type-btn i {
    margin-right: 8px;
    font-size: 1.2rem;
  }
  
  .add-type-btn:hover {
    background-color: #0069d9;
  }
  </style>
  