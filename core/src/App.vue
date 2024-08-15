<script setup lang="ts">
import { RouterView } from 'vue-router';
import Header from '@/components/Header.vue';
import Tray from '@/components/Tray.vue';

</script>

<template>
  <Header />

  <main>
    <RouterView />
  </main>
</template>
