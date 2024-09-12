<script setup lang="ts">
import { ref } from 'vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  input: {
    type: [],
    required: true
  }
})

interface Options {
  id: number | string
  title: string
}

// ref()
const options = ref<Options[]>([
  {
    id: 1,
    title: 'Correo Electronico'
  },
  {
    id: 2,
    title: 'Contraseña'
  }
])
</script>

<template>
  <div class="container-app grid-container">
    <div class="tray box-shadow">
      <div class="content-tray">
        <h2 class="texto-pruebas title-app">
          {{ props.title }}
        </h2>

        <div class="Input" v-for="item in options" :key="item.id">
          <label :for="item.title">{{ item.title }}</label>
          <input class="Label" type="text">
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.tray {
  display: flex;
  flex-direction: column;
  align-items: center;
  inline-size: 500rem;
  block-size: 550rem;
  border-radius: 25rem;
  grid-column: 2 / 3;
  grid-row: 2 / 3;
  background-color: var(--eme-white);
}

.content-tray {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  inline-size: 75%;
  block-size: 80%;
}

/* delete class */
.texto-pruebas {
  inline-size: 100%;
  overflow-wrap: break-word;
  text-align: center
    /* Alternativa moderna */
}

.Input {
  margin: 10rem 0;
}

.Input input {
  margin: 5rem 0;
}
</style>
