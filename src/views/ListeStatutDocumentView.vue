<template>
    <div class="container">
      <h1 class="text-center">Liste des Statuts de Document</h1>
      
      <ul v-if="statuts.length">
        <li v-for="statut in statuts" :key="statut.id">
          <strong>{{ statut.nom }}</strong>: {{ statut.description }}
        </li>
      </ul>
      <p v-else>Aucun statut disponible.</p>
  
      <form @submit.prevent="ajouterStatut">
        <h2>Ajouter un nouveau statut</h2>
        <div class="form-group">
          <label for="nom">Nom</label>
          <input type="text" id="nom" v-model="nouveauStatut.nom" required class="form-control"/>
        </div>
        <div class="form-group">
          <label for="description">Description</label>
          <textarea id="description" v-model="nouveauStatut.description" required class="form-control"></textarea>
        </div>
        <button type="submit" class="btn btn-primary mt-3">Ajouter le Statut</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    name: "ListeStatutDocument",
    data() {
      return {
        statuts: [],
        nouveauStatut: {
          nom: "",
          description: ""
        }
      };
    },
    methods: {
      async fetchStatuts() {
        try {
          const response = await fetch("http://localhost:5000/api/statut-documents");
          this.statuts = await response.json();
        } catch (error) {
          console.error("Erreur lors de la récupération des statuts :", error);
        }
      },
      async ajouterStatut() {
        try {
          const response = await fetch("http://localhost:5000/api/statut-documents", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(this.nouveauStatut)
          });
          
          if (response.ok) {
            const statutAjoute = await response.json();
            this.statuts.push(statutAjoute);
            this.nouveauStatut = { nom: "", description: "" };
          }
        } catch (error) {
          console.error("Erreur lors de l'ajout du statut :", error);
        }
      }
    },
    created() {
      this.fetchStatuts();
    }
  };
  </script>
  
  <style scoped>
  .container {
    max-width: 600px;
    margin: auto;
  }
  </style>
  