<template>
    <div class="container">
      <h1>Liste des Utilisateurs</h1>
      <UserList />
    </div>
  </template>
  
  <script>
  import { useUserStore } from '../stores/user';
  import { onMounted, computed } from 'vue';
  import UserList from '../Utilisateur/UserList.vue';
  
  export default {
    name: 'UtilisateurView',
    components: {
      UserList,
    },
    setup() {
      const userStore = useUserStore();
  
      // Charger les utilisateurs au montage du composant
      onMounted(() => {
        userStore.fetchUsers();
      });
  
      // Computed properties pour lier les données
      const users = computed(() => userStore.users);
      const errorMessage = computed(() => userStore.errorMessage);
      const loading = computed(() => userStore.loading);
  
      // Méthodes pour naviguer
      const goToAddUser = () => {
        userStore.$router.push({ name: 'AddUser' });
      };
      const viewUser = (id) => {
        userStore.$router.push({ name: 'ViewUser', params: { id } });
      };
      const editUser = (id) => {
        userStore.$router.push({ name: 'EditUser', params: { id } });
      };
  
      return {
        users,
        errorMessage,
        loading,
        goToAddUser,
        viewUser,
        editUser,
        deleteUser: userStore.deleteUser,
        formatDate: userStore.formatDate,
      };
    },
  };
  </script>
  
  
  <style scoped>
  .container {
    max-width: 900px;
    margin: auto;
    background-color: #f9f9f9;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
  
  h2 {
    font-size: 1.8rem;
    color: #333;
  }
  
  button {
    margin: 0 5px;
  }
  </style>
  