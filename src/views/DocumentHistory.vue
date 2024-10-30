<!-- DocumentHistory.vue -->
<template>
    <div class="document-history">
      <h3>Historique des Modifications</h3>
      <table class="table table-striped">
        <thead>
          <tr>
            <th>Date de Modification</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(entry, index) in historique" :key="index">
            <td>{{ new Date(entry.date).toLocaleDateString() }}</td>
            <td>{{ entry.description }}</td>
          </tr>
        </tbody>
      </table>
      <p v-if="historique.length === 0" class="text-center">Aucun historique disponible.</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'DocumentHistory',
    props: {
      historique: {
        type: Array,
        required: true,
        default: () => []
      }
    }
  }
  </script>
  
  <style scoped>
  .document-history {
    margin-top: 20px;
  }
  
  .table {
    margin-top: 10px;
  }
  </style>
  