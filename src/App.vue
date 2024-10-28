<template>
  <div id="app">
    <AppNavbar />
    <div class="container-fluid">
      <div class="row">
        <AppSidebar />
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
    AppNavbar,
    AppSidebar,
    AppFooter,
  },
};
</script>

<style>
#app {
  background-color: white;
}
</style>
