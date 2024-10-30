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
              <button class="btn btn-warning btn-sm" @click="editType(type.id)">
                <i class="bi bi-pencil"></i> Modifier
              </button>
              <button class="btn btn-danger btn-sm" @click="deleteType(type.id)">
                <i class="bi bi-trash"></i> Supprimer
              </button>
            </td>
          </tr>
          <tr v-if="types.length === 0">
            <td colspan="3" class="text-center">Aucun type trouvé</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'TypeDocumentView',
    data() {
      return {
        types: [],
      };
    },
    created() {
      this.fetchTypes();
    },
    methods: {
      async fetchTypes() {
        try {
          const response = await axios.get('http://localhost:5000/api/types');
          this.types = response.data;
        } catch (error) {
          console.error('Erreur lors de la récupération des types:', error);
        }
      },
      goToAddType() {
        this.$router.push({ name: 'AddType' });
      },
      editType(id) {
        this.$router.push({ name: 'EditType', params: { id } });
      },
      async deleteType(id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer ce type de document ?')) {
          try {
            await axios.delete(`http://localhost:5000/api/types/${id}`);
            this.fetchTypes();
          } catch (error) {
            console.error('Erreur lors de la suppression du type de document:', error);
          }
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 900px;
    margin: auto;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 1.8rem;
    color: #333;
  }
  </style>
  