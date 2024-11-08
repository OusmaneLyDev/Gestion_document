<!-- src/components/Login.vue -->
<template>
    <div class="container">
        <h2>Connexion</h2>
        <form @submit.prevent="loginUser">
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" v-model="credentials.email" class="form-control" required />
            </div>
            <div class="mb-3">
                <label for="mot_de_passe" class="form-label">Mot de passe</label>
                <input type="password" v-model="credentials.mot_de_passe" class="form-control" required />
            </div>
            <button type="submit" class="btn btn-primary">Se connecter</button>
        </form>
        <p v-if="authStore.error" class="text-danger">{{ authStore.error }}</p>
    </div>
</template>

<script>
import { useAuthStore } from '../stores/authStore';
import { ref } from 'vue';

export default {
    setup() {
        const authStore = useAuthStore();
        const credentials = ref({ email: '', mot_de_passe: '' });

        const loginUser = async () => {
            try {
                await authStore.login(credentials.value);
                alert('Connexion réussie !');
            } catch (error) {
                console.error(error);
            }
        };

        return { authStore, credentials, loginUser };
    }
};
</script>
