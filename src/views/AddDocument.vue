<template>
    <div class="add-document-container">
      <h1 class="text-center">Ajouter un Document</h1>
      <form @submit.prevent="submitForm" class="document-form">
        <div class="form-group">
          <label for="titre">Titre</label>
          <input
            type="text"
            id="titre"
            v-model="document.titre"
            required
            class="form-control"
          />
        </div>
  
        <div class="form-group">
          <label for="description">Description</label>
          <textarea
            id="description"
            v-model="document.description"
            required
            class="form-control"
          ></textarea>
        </div>
  
        <div class="form-group">
          <label for="type">Type de Document</label>
          <select
            id="type"
            v-model="document.type_id"
            required
            class="form-control"
          >
            <option value="" disabled>Choisissez un type</option>
            <option
              v-for="type in documentTypes"
              :key="type.id"
              :value="type.id"
            >
              {{ type.nom }}
            </option>
          </select>
        </div>
  
        <div class="form-group">
          <label for="statut">Statut de Document</label>
          <select
            id="statut"
            v-model="document.statut_id"
            required
            class="form-control"
          >
            <option value="" disabled>Choisissez un statut</option>
            <option
              v-for="statut in documentStatuses"
              :key="statut.id"
              :value="statut.id"
            >
              {{ statut.nom }}
            </option>
          </select>
        </div>
  
        <button type="submit" class="btn btn-primary">Ajouter le Document</button>
        <button type="button" class="btn btn-secondary" @click="goBack">Annuler</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'AddDocument',
    data() {
      return {
        document: {
          titre: '',
          description: '',
          type_id: '',
          statut_id: '',
        },
        documentTypes: [],
        documentStatuses: []
      };
    },
    created() {
      this.fetchDocumentTypes();
      this.fetchDocumentStatuses();
    },
    methods: {
      async fetchDocumentTypes() {
        try {
          const response = await axios.get('http://localhost:5000/api/document-types');
          this.documentTypes = response.data;
        } catch (error) {
          console.error('Erreur lors de la récupération des types de document:', error);
        }
      },
      async fetchDocumentStatuses() {
        try {
          const response = await axios.get('http://localhost:5000/api/document-statuses');
          this.documentStatuses = response.data;
        } catch (error) {
          console.error('Erreur lors de la récupération des statuts de document:', error);
        }
      },
      async submitForm() {
        try {
          await axios.post('http://localhost:5000/api/documents', this.document);
          this.resetForm();
          this.$router.push({ name: 'Documents' }); // Redirige vers la liste des documents
        } catch (error) {
          console.error('Erreur lors de l\'ajout du document:', error);
        }
      },
      resetForm() {
        this.document = {
          titre: '',
          description: '',
          type_id: '',
          statut_id: '',
        };
      },
      goBack() {
        this.$router.push({ name: 'Documents' }); // Redirige vers la liste des documents
      },
    },
  };
  </script>
  
  <style scoped>
  .add-document-container {
    max-width: 600px;
    margin: auto;
    padding: 20px;
    border: 1px solid #dee2e6;
    border-radius: 8px;
    background-color: #f8f9fa;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  }
  
  h1 {
    margin-bottom: 20px;
  }
  
  .document-form {
    display: flex;
    flex-direction: column;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 5px;
  }
  
  input,
  textarea,
  select {
    border: 1px solid #ced4da;
    border-radius: 4px;
    padding: 10px;
    font-size: 1rem;
  }
  
  input:focus,
  textarea:focus,
  select:focus {
    border-color: #80bdff;
    outline: none;
  }
  
  .btn {
    margin-top: 10px;
  }
  </style>
  