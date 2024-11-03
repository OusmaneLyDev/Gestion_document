// stores/document.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useDocumentStore = defineStore('document', {
  state: () => ({
    documents: [],
    alertMessage: null,
    loading: false, // Nouvel état pour le chargement
  }),
  actions: {
    async fetchDocuments() {
      this.loading = true; // Commencer le chargement
      try {
        const response = await axios.get('http://localhost:3051/api/documents');
        this.documents = response.data;
      } catch (error) {
        this.alertMessage = 'Erreur lors de la récupération des documents.';
        console.error('Erreur:', error);
      } finally {
        this.loading = false; // Fin du chargement
      }
    },
    async addDocument(document) {
      this.loading = true; // Commencer le chargement
      try {
        const response = await axios.post('http://localhost:3051/api/documents', document);
        this.documents.push(response.data);
        this.alertMessage = 'Document ajouté avec succès !';
      } catch (error) {
        this.alertMessage = 'Erreur lors de l\'ajout du document.';
        console.error('Erreur:', error);
      } finally {
        this.loading = false; // Fin du chargement
      }
    },
    async editDocument(id, updatedDocument) {
      this.loading = true; // Commencer le chargement
      try {
        await axios.put(`http://localhost:3051/api/documents/${id}`, updatedDocument);
        const index = this.documents.findIndex(doc => doc.id === id);
        if (index !== -1) {
          this.documents[index] = { ...this.documents[index], ...updatedDocument };
          this.alertMessage = 'Document modifié avec succès !';
        }
      } catch (error) {
        this.alertMessage = 'Erreur lors de la modification du document.';
        console.error('Erreur:', error);
      } finally {
        this.loading = false; // Fin du chargement
      }
    },
    async deleteDocument(id) {
      this.loading = true; // Commencer le chargement
      try {
        await axios.delete(`http://localhost:3051/api/documents/${id}`);
        this.documents = this.documents.filter(doc => doc.id !== id);
        this.alertMessage = 'Document supprimé avec succès !';
      } catch (error) {
        this.alertMessage = 'Erreur lors de la suppression du document.';
        console.error('Erreur:', error);
      } finally {
        this.loading = false; // Fin du chargement
      }
    },
    clearAlert() {
      this.alertMessage = null;
    },
  },
});
