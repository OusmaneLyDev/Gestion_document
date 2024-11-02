<template>
  <div class="add-document-container">
    <h1 class="text-center">Ajouter un Document</h1>
    <form @submit.prevent="submitForm" class="document-form">
      <div class="form-group">
        <label for="titre">Titre du Document</label>
        <input
          type="text"
          id="titre"
          v-model="document.titre"
          required
          class="form-control"
          placeholder="Entrez le titre"
        />
      </div>

      <div class="form-group">
        <label for="description">Description du Document</label>
        <textarea
          id="description"
          v-model="document.description"
          class="form-control"
          placeholder="Décrivez le document (facultatif)"
        ></textarea>
      </div>

      <div class="form-group">
        <label for="date_depot">Date de Dépôt</label>
        <input
          type="date"
          id="date_depot"
          v-model="document.date_depot"
          required
          class="form-control"
        />
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
        <label for="statut">Statut du Document</label>
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

      <div class="form-buttons">
        <button type="submit" class="btn btn-primary">Ajouter le Document</button>
        <button type="button" class="btn btn-secondary" @click="goBack">Annuler</button>
      </div>
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
        date_depot: '',
        type_id: '',
        statut_id: '',
      },
      documentTypes: [],
      documentStatuses: [],
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
        this.$router.push({ name: 'Documents' });
      } catch (error) {
        console.error("Erreur lors de l'ajout du document:", error);
      }
    },
    resetForm() {
      this.document = {
        titre: '',
        description: '',
        date_depot: '',
        type_id: '',
        statut_id: '',
      };
    },
    goBack() {
      this.$router.push({ name: 'Documents' });
    },
  },
};
</script>

<style scoped>
.add-document-container {
  max-width: 450px;
  margin: 20px auto;
  padding: 25px;
  border: 2px solid #ececec;
  border-radius: 10px;
  background-color: #ffffff;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.add-document-container:hover {
  transform: scale(1.02);
}

h1 {
  margin-bottom: 20px;
  color: #333333;
  font-weight: 700;
  font-size: 1.5rem;
}

.document-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: 600;
  color: #4a4a4a;
}

input,
textarea,
select {
  border: 1px solid #d1d1d1;
  border-radius: 6px;
  padding: 10px;
  font-size: 0.9rem;
  transition: border-color 0.2s ease;
}

input:focus,
textarea:focus,
select:focus {
  border-color: #3b82f6;
  outline: none;
  box-shadow: 0px 0px 5px rgba(59, 130, 246, 0.5);
}

textarea {
  resize: vertical;
  min-height: 80px;
}

.form-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 15px;
}

.btn {
  padding: 8px 16px;
  font-weight: 600;
  border-radius: 6px;
  transition: background-color 0.2s ease, transform 0.2s ease;
}

.btn-primary {
  background-color: #3b82f6;
  color: #ffffff;
  border: none;
}

.btn-primary:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
}

.btn-secondary {
  background-color: #f1f5f9;
  color: #1e293b;
  border: 1px solid #d1d5db;
}

.btn-secondary:hover {
  background-color: #e2e8f0;
  transform: translateY(-2px);
}
</style>
