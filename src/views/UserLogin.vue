<template>
  <div class="user-login">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" v-model="email" id="email" class="form-control" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" v-model="password" id="password" class="form-control" required />
      </div>
      <button type="submit" class="btn btn-primary">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'UserLogin',
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    handleLogin() {
      // Implémenter la logique de connexion ici
      console.log('Login attempted with:', this.email, this.password);
    },
  },
};
</script>

<style scoped>
.user-login {
  max-width: 400px;
  margin: auto;
  padding: 20px;
}
</style>
