// store/user.js
import { defineStore } from 'pinia';
import axios from '../axios';

export const useUserStore = defineStore('user', {
  state: () => ({
    users: [],
    errorMessage: null,
    loading: false,
  }),

  actions: {
    async fetchUsers() {
      this.loading = true;
      try {
        const response = await axios.get('http://localhost:3051/api/utilisateurs');
        this.users = response.data;
        this.errorMessage = this.users.length === 0 ? 'Aucun utilisateur trouvé.' : null;
      } catch (error) {
        console.error('Erreur lors de la récupération des utilisateurs:', error);
        this.errorMessage = error.response
          ? error.response.status === 404
            ? 'Aucun utilisateur trouvé.'
            : 'Erreur lors de la récupération des utilisateurs.'
          : 'Erreur réseau. Veuillez réessayer.';
      } finally {
        this.loading = false;
      }
    },

    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString();
    },

    async deleteUser(id) {
      const confirmed = confirm('Êtes-vous sûr de vouloir supprimer cet utilisateur ?');
      if (confirmed) {
        try {
          await axios.delete(`http://localhost:3051/api/utilisateurs/${id}`);
          this.fetchUsers();
        } catch (error) {
          console.error('Erreur lors de la suppression de l’utilisateur:', error);
        }
      }
    },
  },
});
