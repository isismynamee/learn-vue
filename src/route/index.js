import { createRouter, createWebHistory } from "vue-router";

const routes = [
    {
        path: '/',
        name: "auth",
        component: () => import('../components/auth/Auth.vue')
    },
    {
        path: "/homepage",
        name: "homepage",
        component: () => import('../components/homepage/Homepage.vue')
    }
]

const route = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
})

export default route;