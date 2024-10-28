<template>
    <div class="container">
      <h1>Gestion des Processus</h1>
      <div class="table-responsive">
        <table class="table table-bordered">
          <thead class="thead-light">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nom du Processus</th>
              <th scope="col">Statut</th>
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="process in processes" :key="process.id">
              <td>{{ process.id }}</td>
              <td>{{ process.name }}</td>
              <td>{{ process.status }}</td>
              <td>
                <button class="btn btn-primary btn-sm" @click="viewProcess(process.id)">Voir</button>
                <button class="btn btn-warning btn-sm" @click="editProcess(process.id)">Modifier</button>
                <button class="btn btn-danger btn-sm" @click="deleteProcess(process.id)">Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Process',
    data() {
      return {
        processes: [
          { id: 1, name: 'Processus de Validation', status: 'Actif' },
          { id: 2, name: 'Processus de Rejet', status: 'Inactif' },
          { id: 3, name: 'Processus d\'Archivage', status: 'Actif' },
          // Ajouter d'autres processus ici
        ]
      };
    },
    methods: {
      viewProcess(id) {
        alert(`Voir le détail du processus avec ID : ${id}`);
        // Ajoutez ici la logique pour afficher les détails d'un processus
      },
      editProcess(id) {
        alert(`Modifier le processus avec ID : ${id}`);
        // Ajoutez ici la logique pour modifier un processus
      },
      deleteProcess(id) {
        alert(`Supprimer le processus avec ID : ${id}`);
        // Ajoutez ici la logique pour supprimer un processus
      }
    }
  };
  </script>
  
  <style scoped>
  .container {
    margin-top: 20px;
  }
  .table {
    margin-top: 20px;
  }
  </style>
  