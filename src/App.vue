<template>
  <div id="app">
    <AppNavbar />
    <div class="container-fluid">
      <div class="row">
        <AppSidebar /> <!-- Utilisez le nom correct AppSidebar -->
        <main class="col-md-9 ml-sm-auto col-lg-10 px-md-4">
          <router-view />
        </main>
      </div>
    </div>
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppSidebar from './components/AppSidebar.vue';
import AppFooter from './components/AppFooter.vue';

export default {
  name: 'App',
  components: {
    AppNavbar,   // Utilisation cohérente du nom du composant
    AppSidebar,  // Utilisation cohérente du nom du composant
    AppFooter
  }
}
</script>
