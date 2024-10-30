<template>
  <div>
    <!-- Bouton hamburger -->
    <button class="menu-toggle" @click="toggleSidebar">
      <i class="fas fa-bars"></i>
    </button>

    <!-- Sidebar -->
    <nav
      :class="['sb-sidenav accordion sb-sidenav-dark', { 'sidebar-collapsed': !isSidebarOpen }]"
      id="sidenavAccordion"
    >
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Core</div>
          <a class="nav-link" href="/dashboard">
            <div class="sb-nav-link-icon"><i class="fas fa-tachometer-alt"></i></div>
            Dashboard
          </a>

          <div class="sb-sidenav-menu-heading">Gestion</div>

          <!-- Lien vers la gestion des utilisateurs -->
          <a class="nav-link" href="/utilisateurs">
            <div class="sb-nav-link-icon"><i class="fas fa-users"></i></div>
            Utilisateurs
          </a>

          <!-- Lien vers la gestion des types de documents -->
          <a class="nav-link" href="/liste-type-document">
            <div class="sb-nav-link-icon"><i class="fas fa-file-alt"></i></div>
            Types de Document
          </a>

          <!-- Lien vers la gestion des statuts de documents -->
          <a class="nav-link" href="/liste-statut-document">
            <div class="sb-nav-link-icon"><i class="fas fa-check-circle"></i></div>
            Statuts de Document
          </a>

          <!-- Lien vers la gestion des documents -->
          <a class="nav-link" href="/documents">
            <div class="sb-nav-link-icon"><i class="fas fa-file-alt"></i></div>
            Documents
          </a>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isSidebarOpen: false, // Gère l'affichage du sidebar
      isCollapsed: null, // Gère l'ouverture des sous-menus
    };
  },
  methods: {
    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    },
    toggleCollapse(section) {
      this.isCollapsed = this.isCollapsed === section ? null : section;
    },
  },
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
.sb-sidenav {
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 250px;
  background-color: #343a40;
  color: white;
  padding-top: 20px;
  transition: transform 0.3s ease;
}
.sidebar-collapsed {
  transform: translateX(-100%);
}
.sb-sidenav-menu .nav {
  display: flex;
  flex-direction: column; /* Arrange les liens verticalement */
}
.sb-sidenav-menu .nav-link {
  color: white;
  text-decoration: none;
  padding: 10px 20px;
  margin-bottom: 8px; /* Espace vertical entre les liens */
  display: flex;
  align-items: center;
  border-radius: 5px;
  transition: background-color 0.3s;
}
.sb-sidenav-menu .nav-link:hover {
  background-color: #007bff;
  color: white;
}
.sb-sidenav-menu .sb-nav-link-icon {
  margin-right: 10px;
}
.sb-sidenav-footer {
  padding: 20px;
  text-align: center;
  color: #ccc;
}
</style>
