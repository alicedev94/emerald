<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue';

const showTray = ref(false);

const Tray = defineAsyncComponent(() => import('./Tray.vue'));

const optionsList = () => {
    showTray.value = !showTray.value;
};
</script>

<template>
    <header>
        <div class="container-header">
            <div class="container-app">
                <div class="header">
                    <div class="cont-logo">
                        <img class="logo imagen" src="/img/box3d-center.png" alt="logo.png">
                    </div>
                    <div class="cont-options" @click="optionsList()">
                        <img class="options imagen-menu" src="/img/menu.png" alt="">
                    </div>
                </div>
            </div>
        </div>

        <div class="contaiener-header-grid">

        </div>
    </header>

    <transition name="fade">
        <Tray class="tray" v-if="showTray" title="Options" />
    </transition>
</template>

<style scoped>
.container-header {
    background-color: var(--eme-header);
}

.container-header-grid {
    background-color: var(--eme-header);
    box-shadow: 0px 5px 10px -4px rgba(0, 0, 0, 0.5);
    width: 100%;
}

.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 75%;
    height: 75rem;
}

/* .tray {

} */

.imagen {
    width: 48rem;
    height: 48rem;
}

.imagen-menu {
    width: 38rem;
    height: 38rem;
}

.imagen-menu:hover {
    background-color: var(--eme-gris);
    transition: 0.1s;
    border-radius: 10rem;
}

.logo:hover {
    transition: 0.1s;
    scale: 110%;
}

.options {
    padding: 10rem;
}

.options:hover {
    transition: 0.5s;
    scale: 110%;
}

/* Clases de transición para escalado */
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.6s;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
