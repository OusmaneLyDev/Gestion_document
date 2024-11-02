// stores/document.js
import { defineStore } from 'pinia';
import axios from 'axios';

export const useDocumentStore = defineStore('document', {
  state: () => ({
    documents: [],
  }),
  actions: {
    async fetchDocuments() {
      try {
        const response = await axios.get('http://localhost:3051/api/documents');
        this.documents = response.data;
      } catch (error) {
        console.error('Erreur lors de la récupération des documents:', error);
        throw new Error('Erreur lors de la récupération des documents');
      }
    },
    async addDocument(document) {
      try {
        const response = await axios.post('http://localhost:3051/api/documents', document);
        this.documents.push(response.data);
      } catch (error) {
        console.error('Erreur lors de l\'ajout du document:', error);
        throw new Error('Erreur lors de l\'ajout du document');
      }
    },
    async editDocument(id, updatedDocument) {
      try {
        await axios.put(`http://localhost:3051/api/documents/${id}`, updatedDocument);
        const index = this.documents.findIndex(doc => doc.id === id);
        if (index !== -1) {
          this.documents[index] = { ...this.documents[index], ...updatedDocument };
        }
      } catch (error) {
        console.error('Erreur lors de la modification du document:', error);
        throw new Error('Erreur lors de la modification du document');
      }
    },
    async deleteDocument(id) {
      try {
        await axios.delete(`http://localhost:3051/api/documents/${id}`);
        this.documents = this.documents.filter(doc => doc.id !== id);
      } catch (error) {
        console.error('Erreur lors de la suppression du document:', error);
        throw new Error('Erreur lors de la suppression du document');
      }
    },
  },
});
