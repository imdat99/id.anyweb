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
                    component: () => import("src/feature/Home/Home.vue")
                },
            ]
        },
        {
            path: "/auth",
            name: "Auth",
            component: () => import("src/feature/Auth/Layout.vue"),
            children: [
                {
                    path: "login",
                    name: "Login",
                    component: () => import("src/feature/Auth/Login.vue")
                },
                {
                    path: "forgot-password",
                    name: "ForgotPassword",
                    component: () => import("src/feature/Auth/Forgot.vue")
                }
            ]
        }
    ]
})
export default router;