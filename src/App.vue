<template>
  <div id="app" class="sb-nav-fixed">
    <UserNotification ref="notification" /> <!-- Utilisation du composant ici -->
    <AppNavbar @toggleSidebar="toggleSidebar" />
    <div id="layoutSidenav">
      <div id="layoutSidenav_nav" :class="{ 'd-none': !sidebarVisible }">
        <AppSidebar />
      </div>
      <div id="layoutSidenav_content">
        <main class="container-fluid px-4">
          <router-view />
        </main>
        <AppFooter />
      </div>
    </div>
  </div>
</template>

<script>
import AppNavbar from './components/AppNavbar.vue';
import AppSidebar from './components/AppSidebar.vue';
import AppFooter from './components/AppFooter.vue';
import UserNotification from './components/UserNotification.vue'; 


export default {
  name: 'App',
  components: {
    AppNavbar,
    AppSidebar,
    AppFooter,
    UserNotification, 
  },
  data() {
    return {
      sidebarVisible: true,
    };
  },
  methods: {
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    },
  },
};
</script>

<style>
#app {
  background-color: white;
}
#layoutSidenav {
  display: flex;
}
#layoutSidenav_content {
  flex-grow: 1;
  overflow-x: hidden;
}
.d-none {
  display: none;
}
</style>
