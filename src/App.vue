<script setup>
import Sidebar from './components/Sidebar.vue'
</script>

<template>
    <head>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" />
    </head>
    <div>
        <div class="app">
            <Sidebar />
            <router-view />
        </div>
    </div>
</template>

<style lang="scss">
:root {
    --primary: #00A7E1;
    --primary-lite: #50A7E1;
    --primary-dark: #084887;
    --grey: #37393A;
    --dark: #0C0C0C;
    --dark-alt: #121113;
    --light: #E8EEF2;

    --logout: #D00000;
    --error: #FFBA08;
    --success: #136F63;

    --sidebar-width: 300px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
}

body {
    background-color: var(--light);
}

button {
    cursor: pointer;
    appearance: none;
    border: none;
    outline: none;
    background: none;
}

.app {
    display: flex;

    main {
        flex: 1 1 0;
        padding: 2rem;

        @media (max-width: 768px) {
            padding-left: 6rem;
        }
    }
}

.guide {
    vertical-align: top;
    display: inline-block;
    width: 75%;
    img {
        width: 400px;
        height: 400px;
    }
    span {
        display: block;
        margin-top: 1em;
    }
}

.home-page {
    display: block;
    span {
        font-weight: bold;
    }
}
</style>
