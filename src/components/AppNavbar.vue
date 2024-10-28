<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <a class="navbar-brand" href="#">GED</a>
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
      <ul class="navbar-nav ml-auto">
        <li class="nav-item">
          <router-link class="nav-link" to="/dashboard" exact-active-class="active">
            <i class="fas fa-tachometer-alt"></i> Tableau de Bord
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/documents" exact-active-class="active">
            <i class="fas fa-file-alt"></i> Documents
          </router-link>
        </li>
        <li class="nav-item">
          <router-link class="nav-link" to="/settings" exact-active-class="active">
            <i class="fas fa-cog"></i> Paramètres
          </router-link>
        </li>
      </ul>
      <!-- Déplacement des boutons de connexion et inscription à droite -->
      <div class="ml-auto d-flex">
        <router-link to="/login">
          <button class="btn btn-outline-light ml-3">
            <i class="fas fa-sign-in-alt"></i> Connexion
          </button>
        </router-link>
        <router-link to="/register">
          <button class="btn btn-outline-light ml-3">
            <i class="fas fa-user-plus"></i> Inscription
          </button>
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'AppNavbar',
};
</script>

<style scoped>
.navbar {
  margin-bottom: 20px;
}
.nav-link {
  color: white !important;
}
.nav-link.active {
  font-weight: bold; /* Pour indiquer la page active */
  border-bottom: 2px solid white; /* Indicateur visuel */
}
</style>
