<template>
  <div class="home-page">
    <div class="hero-section">
      <!-- Background Image -->
      <img src="https://images.unsplash.com/photo-1444201716572-c60ec66d0494?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" class="hero-image" />

      <!-- Centered Text and Button --> 
      <div class="hero-text">
        <h1 class="display-4">Welcome to the GED Application</h1>
        <p class="lead">Explore our document management features and start organizing your files.</p>
        <router-link to="/dashboard" class="btn btn-primary btn-lg mt-3">Go to Dashboard</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
};
</script>

<style scoped>
/* Fullscreen Container */
.home-page {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
  text-align: center;
  background-color: #f4f4f4;
}

/* Background Image */
.hero-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(0.4);
  z-index: -1;
}

/* Centered Text and Button */
.hero-text {
  position: relative;
  z-index: 1;
  color: #ffffff;
  padding: 1rem;
  max-width: 80%;
}

.hero-text h1 {
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.hero-text p {
  font-size: 1.25rem;
}

@media (min-width: 768px) {
  .hero-text h1 {
    font-size: 3.5rem;
  }
  .hero-text p {
    font-size: 1.5rem;
  }
}

.btn-primary {
  background-color: #007bff;
  border: none;
}

.btn-primary:hover {
  background-color: #0056b3;
}
</style>
