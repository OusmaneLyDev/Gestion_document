<template>
  <div class="modal-overlay" @click="$emit('close')">
    <div class="modal-content" @click.stop>
      <button class="modal-close" @click="$emit('close')">X</button>
      <h3>Détails du Document</h3>
      <p><strong>Titre:</strong> {{ document.titre }}</p>
      <p><strong>ID Type Document:</strong> {{ document.id_TypeDocument }}</p>
      <p><strong>ID Statut Document:</strong> {{ document.id_StatutDocument }}</p>
      <p><strong>Description:</strong> {{ document.description }}</p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue';

defineProps({
  document: {
    type: Object,
    required: true
  },
});
</script>

<style scoped>
/* Modale */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: fadeIn 0.3s ease;
}

.modal-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 500px;
  width: 100%;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;
  animation: modalIn 0.3s ease;
}

.modal-content h3 {
  font-size: 1.5rem;
  color: #2c3e50;
  margin-bottom: 20px;
}

.modal-close {
  background-color: #e74c3c;
  color: white;
  border: none;
  padding: 10px;
  font-size: 1rem;
  border-radius: 5px;
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  transition: background-color 0.3s ease;
}

.modal-close:hover {
  background-color: #c0392b;
}

@keyframes fadeIn {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

@keyframes modalIn {
  0% { transform: scale(0.8); }
  100% { transform: scale(1); }
}
</style>
