import { createRouter, createWebHistory } from "vue-router";
import { AUTH_ROUTE } from "./lib/constants";

const router = createRouter({
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
                {
                    path: "",
                    name: "Auth",
                    component: () => import("src/feature/Auth/Layout.vue"),
                    children: [
                        {
                            path: AUTH_ROUTE.Login.slice(1),
                            name: "Login",
                            component: () => import("src/feature/Auth/Login.vue")
                        },
                        {
                            path: AUTH_ROUTE.Register.slice(1),
                            name: "Register",
                            component: () => import("src/feature/Auth/Forgot.vue")
                        },
                        {
                            path: AUTH_ROUTE.ForgotPassword.slice(1),
                            name: "ForgotPassword",
                            component: () => import("src/feature/Auth/Forgot.vue")
                        }
                    ]
                }
            ]
        }
    ]
})
export default router;