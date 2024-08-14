<template>
    <header>
        <div class="container">
            <div class="cont-logo">
                <img class="logo imagen" src="/img/box3d-center.png" alt="logo.png">
            </div>
            <div class="cont-options">
                <!-- Crear una bandeja  -->
                <img class="options imagen-menu" src="/img/menu.png" alt="">
            </div>
        </div>
    </header>
</template>

<style scoped>
.container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: var(--eme-header);
    height: 75rem;

    /* shadow */
    box-shadow: 0px 10px 20px -4px rgba(0, 0, 0, 0.5);
}

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
    transition: 0.5s;
    border-radius: 10rem;
}

.cont-logo {
    margin-left: 11.5%;
}

.logo:hover {
    transition: 0.5s;
    scale: 110%;
}

.cont-options {
    margin-right: 10%;
}

.options {
    padding: 10rem;
}

.options:hover {
    transition: 0.5s;
    scale: 110%;
}
</style>
