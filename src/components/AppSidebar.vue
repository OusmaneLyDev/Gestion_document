<template>
    <nav id="sidebar" class="col-md-3 col-lg-2 d-md-block bg-light sidebar">
      <div class="position-sticky">
        <ul class="nav flex-column">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Tableau de bord</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/documents" class="nav-link">Documents</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/process" class="nav-link">Processus</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </template>
  
  <script>
  export default {
    name: 'AppSidebar'
  }
  </script>
  
  <style scoped>
  #sidebar {
    height: 100vh;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  </style>
  