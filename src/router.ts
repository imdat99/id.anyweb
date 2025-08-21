import { createRouter, createWebHistory } from "vue-router";

const router =  createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            component: () => import("./app"),
            children: [
                {
                    path: "",
                    name: "Home",
                    component: () => import("./feature/Home/Home.vue")
                },
            ]
        },
        {
            path: "/auth",
            name: "Auth",
            component: () => import("./feature/Auth/Layout.vue"),
            children: [
                {
                    path: "login",
                    name: "Login",
                    component: () => import("@/feature/Auth/Login.vue")
                },
            ]
        }
    ]
})
export default router;