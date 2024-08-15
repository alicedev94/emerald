<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps({
    title: {
        type: String,
        required: true
    }
});

interface Options {
    id: (number | string);
    title: string;
    content: object;
};


// ref()
const options = ref<Options[]>([
    {
        id: 1,
        title: "Primera Opción",
        content: { key1: "valor1", key2: "valor2" }
    },
    {
        id: 2,
        title: "Segunda Opción",
        content: { keyA: "valorA", keyB: "valorB" }
    },
    {
        id: 3,
        title: "Tercera Opción",
        content: { keyX: "valorX", keyY: "valorY" }
    }]);

</script>

<template>
    <div class="container-app grid-container">
        <div class="tray box-shadow">
            <div class="content-tray">
                <h2 class="texto-pruebas title-app">
                    {{ props.title }}
                </h2>
                <!-- <ul>
                    <li class="item-app" v-for="item in options" :key="item.id">
                        {{ item.title }}
                    </li>
                </ul> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.tray {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 275rem;
    height: 300rem;
    border-radius: 10rem;
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    background-color: var(--eme-white);
}

.content-tray {
    display: flex;
    flex-direction: column;
    width: 75%;
    height: 100%;
}

/* delete class */
.texto-pruebas {
    width: 100%;
    overflow-wrap: break-word;
    /* Alternativa moderna */
}
</style>
