<template>
  <div class="container-wrapper">
    <div class="container mt-4">
      <h1 class="text-center">Tableau de Bord</h1>
      <div class="row">
        <div class="col-md-6">
          <h3>Documents récents</h3>
          <ul class="list-group">
            <li class="list-group-item">Document 1</li>
            <li class="list-group-item">Document 2</li>
            <li class="list-group-item">Document 3</li>
            <li class="list-group-item">Document 4</li>
          </ul>
        </div>
        <div class="col-md-6">
          <h3>Tâches en attente</h3>
          <ul class="list-group">
            <li class="list-group-item">Tâche 1</li>
            <li class="list-group-item">Tâche 2</li>
            <li class="list-group-item">Tâche 3</li>
            <li class="list-group-item">Tâche 4</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DashboardView',
  data() {
    return {
      recentDocuments: ['Document 1', 'Document 2', 'Document 3', 'Document 4'],
      pendingTasks: ['Tâche 1', 'Tâche 2', 'Tâche 3', 'Tâche 4']
    };
  }
}
</script>

<style scoped>
.container-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 40px 0;
  min-height: 100vh; /* S'assure que le conteneur prend toute la hauteur de la fenêtre */
}

.container {
  background-color: #f8f9fa; /* Couleur de fond pour le tableau de bord */
  border-radius: 8px; /* Coins arrondis pour le conteneur */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Ombre légère */
  padding: 30px 40px; /* Padding interne */
  max-width: 900px; /* Largeur maximale du conteneur */
  width: 100%; /* Prend toute la largeur disponible */
}

h1 {
  margin-bottom: 30px; /* Espace en bas du titre */
}

h3 {
  margin-bottom: 15px; /* Espace en bas des sous-titres */
}
</style>
