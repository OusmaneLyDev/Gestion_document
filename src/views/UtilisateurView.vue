<template>
    <div class="container my-5">
      <h2 class="text-center mb-4">Gestion des Utilisateurs</h2>
      <button class="btn btn-primary mb-4" @click="goToAddUser">
        <i class="bi bi-person-plus-fill"></i> Ajouter un utilisateur
      </button>
      <table class="table table-hover">
        <thead>
          <tr>
            <th>Nom</th>
            <th>Email</th>
            <th>Rôle</th>
            <th>Date de création</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <td>{{ user.nom }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.role }}</td>
            <td>{{ new Date(user.date_creation).toLocaleDateString() }}</td>
            <td>
              <button class="btn btn-info btn-sm" @click="viewUser(user.id)">
                <i class="bi bi-eye"></i> Voir
              </button>
              <button class="btn btn-warning btn-sm" @click="editUser(user.id)">
                <i class="bi bi-pencil"></i> Modifier
              </button>
              <button class="btn btn-danger btn-sm" @click="deleteUser(user.id)">
                <i class="bi bi-trash"></i> Supprimer
              </button>
            </td>
          </tr>
          <tr v-if="users.length === 0">
            <td colspan="5" class="text-center">Aucun utilisateur trouvé</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    name: 'UtilisateurView',
    data() {
      return {
        users: [],
      };
    },
    created() {
      this.fetchUsers();
    },
    methods: {
      async fetchUsers() {
        try {
          const response = await axios.get('http://localhost:5000/api/users');
          this.users = response.data;
        } catch (error) {
          console.error('Erreur lors de la récupération des utilisateurs:', error);
        }
      },
      goToAddUser() {
        this.$router.push({ name: 'AddUser' });
      },
      viewUser(id) {
        this.$router.push({ name: 'ViewUser', params: { id } });
      },
      editUser(id) {
        this.$router.push({ name: 'EditUser', params: { id } });
      },
      async deleteUser(id) {
        if (confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?')) {
          try {
            await axios.delete(`http://localhost:5000/api/users/${id}`);
            this.fetchUsers();
          } catch (error) {
            console.error('Erreur lors de la suppression de l’utilisateur:', error);
          }
        }
      }
    }
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
  