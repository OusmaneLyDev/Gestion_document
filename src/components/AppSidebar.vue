<template>
  <div>
    <button class="menu-toggle" @click="toggleSidebar">
      <i class="fas fa-bars"></i>
    </button>
    <div :class="['sidebar', { 'sidebar-collapsed': !isSidebarOpen }]">
      <ul class="sidebar-menu">
        <li>
          <router-link to="/">
            <i class="fas fa-home"></i> Accueil
          </router-link>
        </li>
        <li>
          <router-link to="/dashboard">
            <i class="fas fa-tachometer-alt"></i> Tableau de Bord
          </router-link>
        </li>
        <li>
          <router-link to="/documents">
            <i class="fas fa-file-alt"></i> Documents
          </router-link>
        </li>
        <li>
          <router-link to="/settings">
            <i class="fas fa-cog"></i> Paramètres
          </router-link>
        </li>
        <li>
          <router-link to="/login">
            <i class="fas fa-sign-in-alt"></i> Connexion
          </router-link>
        </li>
        <li>
          <router-link to="/register">
            <i class="fas fa-user-plus"></i> Inscription
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false,
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }
  }
};
</script>

<style scoped>
.menu-toggle {
  position: fixed;
  top: 15px;
  left: 15px;
  font-size: 1.5rem;
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  z-index: 10;
}
.sidebar {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 180px; /* Réduire la largeur */
  background-color: #343a40;
  color: white;
  padding-top: 20px;
  transition: transform 0.3s ease;
  transform: translateX(0);
}
.sidebar-collapsed {
  transform: translateX(-100%);
}
.sidebar-menu {
  list-style: none;
  padding: 0;
}
.sidebar-menu li {
  padding: 10px 15px; /* Réduire l'espacement */
}
.sidebar-menu li a {
  color: white;
  text-decoration: none;
}
.sidebar-menu li a:hover {
  color: #007bff;
}
</style>
