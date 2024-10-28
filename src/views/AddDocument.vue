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
            v-model="document.type"
            required
            class="form-control"
          >
            <option value="" disabled>Choisissez un type</option>
            <option v-for="type in documentTypes" :key="type.id" :value="type.nom">
              {{ type.nom }}
            </option>
          </select>
        </div>
  
        <button type="submit" class="btn btn-primary">Ajouter le Document</button>
        <button type="button" class="btn btn-secondary" @click="goBack">Annuler</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AddDocument',
    data() {
      return {
        document: {
          titre: '',
          description: '',
          type: '',
        },
        documentTypes: [
          { id: 1, nom: 'PDF' },
          { id: 2, nom: 'Word' },
          { id: 3, nom: 'Excel' },
          // Ajoutez d'autres types de documents ici si nécessaire
        ],
      };
    },
    methods: {
      submitForm() {
        // Logique pour ajouter le document
        console.log('Document ajouté:', this.document);
        // Réinitialiser le formulaire après soumission
        this.resetForm();
        // Rediriger ou afficher un message de succès
        this.$router.push({ name: 'Documents' }); // Redirige vers la liste des documents
      },
      resetForm() {
        this.document.titre = '';
        this.document.description = '';
        this.document.type = '';
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
  