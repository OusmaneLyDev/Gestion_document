<template>
  <div class="container">
    <h2>Connexion</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="password">Mot de passe</label>
        <input type="password" id="password" v-model="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Se connecter</button>
      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',  // ou 'UserLoginForm' pour éviter les avertissements
  data() {
    return {
      email: '',
      password: '',
      errorMessage: ''
    };
  },
  methods: {
    login() {
      const dummyUser = { email: 'user@example.com', password: 'password123' };
      
      // Vérification des informations de connexion
      if (this.email === dummyUser.email && this.password === dummyUser.password) {
        localStorage.setItem('isAuthenticated', 'true');
        this.$router.push({ name: 'Dashboard' });  // Vérifiez le nom de la route
      } else {
        this.errorMessage = 'Identifiants incorrects. Veuillez réessayer.';
      }
    }
  }
};
</script>

<style scoped>
.container {
  margin-top: 50px;
  max-width: 400px;
}
</style>
