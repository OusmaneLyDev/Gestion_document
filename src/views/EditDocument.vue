<template>
    <div>
      <h2>Modifier le Document</h2>
      <form @submit.prevent="updateDocument">
        <div class="mb-3">
          <label for="titre" class="form-label">Titre</label>
          <input id="titre" v-model="document.titre" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="description" class="form-label">Description</label>
          <textarea id="description" v-model="document.description" class="form-control" required></textarea>
        </div>
        <div class="mb-3">
          <label for="type" class="form-label">Type de Document</label>
          <input id="type" v-model="document.typeDocument.nom" class="form-control" required />
        </div>
        <div class="mb-3">
          <label for="status" class="form-label">Statut du Document</label>
          <input id="status" v-model="document.statutDocument.nom" class="form-control" required />
        </div>
        <button type="submit" class="btn btn-primary">Enregistrer les modifications</button>
        <button type="button" class="btn btn-secondary" @click="goBack">Annuler</button>
      </form>
      <div v-if="errorMessage" class="alert alert-danger">{{ errorMessage }}</div>
    </div>
  </template>
  
  <script>
  import { ref, onMounted } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useDocumentStore } from '@/stores/useDocumentStore';
  
  export default {
    name: 'EditDocument',
    setup() {
      const documentStore = useDocumentStore();
      const route = useRoute();
      const router = useRouter();
  
      const document = ref({
        titre: '',
        description: '',
        typeDocument: { nom: '' },
        statutDocument: { nom: '' },
      });
      const errorMessage = ref('');
  
      const fetchDocument = async () => {
        try {
          const documentId = route.params.id;
          const doc = await documentStore.getDocumentById(documentId);
          document.value = doc;
        } catch (error) {
          errorMessage.value = 'Erreur lors du chargement du document';
        }
      };
  
      const updateDocument = async () => {
        try {
          await documentStore.updateDocument(document.value);
          router.push({ name: 'DocumentList' });
        } catch (error) {
          errorMessage.value = 'Erreur lors de la mise à jour du document';
        }
      };
  
      const goBack = () => {
        router.push({ name: 'DocumentList' });
      };
  
      onMounted(fetchDocument);
  
      return {
        document,
        errorMessage,
        updateDocument,
        goBack,
      };
    },
  };
  </script>
  