// src/stores/authStore.js
import { defineStore } from 'pinia';
import { ref } from 'vue';
import { registerUser, loginUser } from '../services/authService';

export const useAuthStore = defineStore('auth', () => {
    const user = ref(null);
    const error = ref(null);

    const register = async (userData) => {
        error.value = null;
        try {
            const result = await registerUser(userData);
            user.value = result.utilisateur; // Enregistrez les données de l'utilisateur
            return result;
        } catch (err) {
            error.value = err.error || 'Erreur lors de l\'inscription';
            throw err;
        }
    };

    const login = async (credentials) => {
        error.value = null;
        try {
            const result = await loginUser(credentials);
            user.value = result.utilisateur; // Enregistrez les données de l'utilisateur
            localStorage.setItem('token', result.token); // Stocker le token
            return result;
        } catch (err) {
            error.value = err.error || 'Erreur lors de la connexion';
            throw err;
        }
    };

    const logout = () => {
        user.value = null; // Réinitialiser les données de l'utilisateur
        localStorage.removeItem('token'); // Supprimer le token
    };

    return { user, error, register, login, logout };
});
