<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
    <a class="navbar-brand" href="#">
      <img src="@/assets/logo.png" alt="FlowerDocs" width="30" height="30">
      FlowerDocs
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/" class="nav-link">Dashboard</router-link> <!-- Lien vers Dashboard -->
        </li>
        <li class="nav-item">
          <router-link to="/documents" class="nav-link">Documents</router-link> <!-- Lien vers Documents -->
        </li>
        <li class="nav-item">
          <router-link to="/process" class="nav-link">Processus</router-link>
        </li>
      </ul>
      <button
        class="btn btn-outline-primary ml-2"
        @click="goToLogin"
      >
        Connexion
      </button>
    </div>
  </nav>

  <div class="container mt-4">
    <h1 class="text-center">Bienvenue sur FlowerDocs</h1>
    <p class="text-center text-muted">
      Votre plateforme de gestion de documents.
    </p>
    <!-- Contenu supplémentaire ici -->
  </div>
</template>

<script>
export default {
  name: 'AppNavbar',
  methods: {
    goToLogin() {
      this.$router.push({ name: 'Login' }); // Redirige vers la page d'authentification
    }
  }
};
</script>

<style scoped>
.navbar {
  margin-bottom: 20px;
}

.navbar-brand img {
  margin-right: 10px; /* Espace entre le logo et le nom */
}

.nav-link {
  font-weight: 500; /* Mettre les liens en gras */
}

.nav-link:hover {
  color: #0056b3; /* Couleur au survol */
}

.btn-outline-primary {
  margin-left: auto; /* Aligne le bouton "Connexion" à droite */
  transition: background-color 0.3s, color 0.3s; /* Effet de transition */
}

.btn-outline-primary:hover {
  background-color: #0056b3; /* Couleur de fond au survol */
  color: white; /* Couleur du texte au survol */
}

.container {
  padding: 20px; /* Ajoute un peu de padding autour du contenu */
  background-color: #f8f9fa; /* Couleur de fond pour le contenu */
  border-radius: 8px; /* Coins arrondis pour le contenu */
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); /* Ombre légère */
}
</style>
