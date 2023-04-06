import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Swerve from '../views/Swerve.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            component: Home
        },
        {
            path: '/swerve',
            component: Swerve
        }
    ]
})

export default router