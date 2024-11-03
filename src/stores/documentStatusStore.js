// src/stores/documentStatusStore.js
import { defineStore } from 'pinia';
import axios from '../axios';

export const useDocumentStatusStore = defineStore('documentStatus', {
  state: () => ({
    statuts: [],
    errorMessage: null,
  }),
  
  actions: {
    async fetchStatuts() {
      try {
        const response = await axios.get("http://localhost:3051/api/statuts-document");
        this.statuts = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des statuts :", error);
        this.errorMessage = "Erreur lors de la récupération des statuts. Veuillez réessayer.";
      }
    },
    async ajouterStatut(nouveauStatut) {
      try {
        const response = await axios.post("http://localhost:3051/api/statuts-document", nouveauStatut);
        
        if (response.status === 201) {
          this.statuts.push(response.data);
        }
      } catch (error) {
        console.error("Erreur lors de l'ajout du statut :", error);
        this.errorMessage = "Erreur lors de l'ajout du statut. Veuillez réessayer.";
      }
    }
  }
});
