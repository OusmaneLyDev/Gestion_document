<template>
  <div class="home-page">
    <div class="hero-section">
      <img src="@/assets/ged_image.jpg" alt="Gestion Électronique de Documents" class="hero-image">
      <div class="hero-text">
        <h1>Bienvenue dans votre Gestion de Documents</h1>
        <p>Organisez, accédez, et partagez vos documents efficacement.</p>
        <router-link to="/dashboard" class="btn btn-primary mt-3">Accéder au Tableau de Bord</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
};
</script>

<style scoped>
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  text-align: center;
}
.hero-section {
  position: relative;
}
.hero-image {
  width: 100%;
  height: 100vh;
  object-fit: cover;
  filter: brightness(0.5);
}
.hero-text {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
}
</style>
