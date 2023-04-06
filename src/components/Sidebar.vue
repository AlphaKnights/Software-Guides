<template>
    <aside :class="`${expanded && 'expanded'}`">
        <div class="logo">
            <img src="/aklogo.png" alt="aklogo"/>
        </div>

        <div class="menu-toggle-wrap">
            <button class="menu-toggle" @click="toggleMenu()">
                <span class="material-symbols-outlined">keyboard_double_arrow_right</span>
            </button>
        </div>

        <h3>Menu</h3>
        <div class="menu">
            <router-link class="button" to="/">
                <span class="material-symbols-outlined">home</span>
                <span class="text">Home</span>
            </router-link>
        </div>
        <div class="menu">
            <router-link class="button" to="/swerve">
                <span class="material-symbols-outlined">engineering</span>
                <span class="text">Swerve</span>
            </router-link>
        </div>
        <div class="flex"></div>
        <div class="menu">
            <router-link class="button" to="/settings">
                <span class="material-symbols-outlined">settings</span>
                <span class="text">Settings</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup>
import { ref } from 'vue'

const expanded = ref(localStorage.getItem("expanded") === "true")

const toggleMenu = () => {
    expanded.value = !expanded.value

    localStorage.setItem("expanded", expanded.value)
}
</script>

<style lang="scss" scoped>
    aside {
        display: flex;
        flex-direction: column;
        width: calc(2rem + 32px); /*double the padding + icon size*/
        min-height: 100vh;
        overflow: hidden;
        padding: 1rem;

        background-color: var(--dark);
        color: var(--light);

        transition: 0.2s ease-out;

        .flex {
            flex: 1 1 0;
        }

        .logo {
        margin-bottom: 1rem;

            img {
                width: 2rem; /*1rem=32px*/
            }
        }

        .menu-toggle-wrap {
            display: flex;
            justify-content: flex-end;
            margin-bottom: 1rem;

            position: relative;
            top: 0;
            transition: 0.2s ease-out;

            .menu-toggle {
                transition: 0.2s ease-out;

                .material-symbols-outlined {
                    font-size: 2rem;
                    color: var(--light);
                    transition: 0.2s ease-out;
                }

                &:hover {
                    .material-symbols-outlined {
                        opacity: 80%;
                        transform: translateX(0.25rem);
                    }
                }
            }
        }

        h3, .button .text {
            opacity: 0;
            transition: 0.3s ease-out;
        }

        h3 {
            color: var(--grey);
            font-size: 0.875rem;
            margin-bottom: 0.5rem;
            text-transform: uppercase;
        }

        .menu {
            margin: 0 -1rem;

            .button {
                display: flex;
                align-items: center;
                text-decoration: none;

                padding: 0.5rem 1rem;
                transition: 0.2s ease-out;

                .material-symbols-outlined {
                    font-size: 2rem;
                    color: var(--light);
                    transition: 0.2s ease-out;
                }
                
                .text {
                    color: var(--light);
                    transition: 0.2s ease-out;
                }

                &:hover, &.router-link-exact-active {
                    background-color: var(--dark-alt);

                    .material-symbols-outlined {
                        color: var(--primary);
                    }
                }

                &.router-link-exact-active {
                    border-right: 5px solid var(--primary);
                }
            }
        }

        &.expanded {
            width: var(--sidebar-width);

            .menu-toggle-wrap {
                top: -3rem;
                .menu-toggle {
                    transform: rotate(-180deg);
                }
            }

            h3, .button .text {
                opacity: 1;
            }

            .button {
                .material-symbols-outlined {
                    margin-right: 1rem;
                }
            }
        }

        @media (max-width: 768px) {
            position: fixed;
            z-index: 99;
        }
    }

    .material-symbols-outlined {
        font-variation-settings:
            'FILL' 1,
            'wght' 400,
            'GRAD' 0,
            'opsz' 40
    }

</style>