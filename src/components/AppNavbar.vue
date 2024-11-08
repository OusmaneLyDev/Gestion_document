<template>
  <nav class="sb-topnav navbar navbar-expand navbar-dark bg-dark">
    <!-- Navbar Brand-->
    <a class="navbar-brand ps-3" href="/">GED Application</a>
    
    <!-- Sidebar Toggle-->
    <button
      class="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0"
      @click="$emit('toggleSidebar')"
    >
      <i class="fas fa-bars"></i>
    </button>
    
    <!-- Navbar Search-->
    <form class="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
      <div class="input-group">
        <input class="form-control" type="text" placeholder="Search for..." aria-label="Search" aria-describedby="btnNavbarSearch" />
        <button class="btn btn-primary" id="btnNavbarSearch" type="button"><i class="fas fa-search"></i></button>
      </div>
    </form>
    
    <!-- Navbar User Menu-->
    <ul class="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
      <li class="nav-item dropdown">
        <a class="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
          <i class="fas fa-user fa-fw"></i> 
          <!-- Affiche le nom de l'utilisateur s'il est connecté -->
          <span v-if="isLoggedIn">{{ utilisateur.nom || 'Utilisateur' }}</span>
        </a>
        <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
          <li><a class="dropdown-item" href="#">Settings</a></li>
          <li><a class="dropdown-item" href="#">Activity Log</a></li>
          <li><hr class="dropdown-divider" /></li>
          <li>
            <a class="dropdown-item" v-if="isLoggedIn" href="#" @click="logout">Déconnexion</a>
            <a class="dropdown-item" v-else href="#" @click="login">Connexion</a>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "AppNavbar",
  props: {
    utilisateur: {
      type: Object,
      default: () => ({})
    }
  },
  computed: {
    isLoggedIn() {
      // Vérifie si l'utilisateur est connecté
      return !!this.utilisateur && !!this.utilisateur.nom;
    }
  },
  methods: {
    login() {
      console.log("Utilisateur connecté");
      // Action pour la connexion (à personnaliser si besoin)
    },
    logout() {
      console.log("Utilisateur déconnecté");
      // Déconnexion (par exemple, supprimer le token de session, à personnaliser)
      this.$emit('logout'); // Émet un événement pour que le parent puisse gérer la déconnexion
    },
  },
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
  font-weight: bold;
  border-bottom: 2px solid white;
}
</style>
