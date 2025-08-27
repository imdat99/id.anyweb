import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import { AUTH_ROUTE } from "./lib/constants";
import { useHead, type ReactiveHead, type ResolvableValue } from "@unhead/vue";

type RouteData = RouteRecordRaw & {
    meta?: ResolvableValue<ReactiveHead>
    children?: RouteData[]
}
const routes: RouteData[] = [
        {
            path: "/",
            component: () => import("./app"),
            meta: {
                title: "AnyWeb - support login with google, facebook, github",
                meta: [
                    {
                        name: "description",
                        content: "AnyWeb - support login with google, facebook, github"
                    }
                ]
            },
            children: [
                {
                    path: "",
                    name: "Dashboard",
                    component: () => import("src/components/DashboardLayout.vue"),
                    meta: {
                        title: "Dashboard - AnyWeb",
                        meta: [
                            {
                                name: "description",
                                content: "Dashboard - AnyWeb - support login with google, facebook, github"
                            }
                        ]
                    },
                    children: [
                        {
                            path: "",
                            name: "Home",
                            component: () => import("src/feature/Home/Home.vue"),
                        },
                        {
                            path: "security",
                            name: "Security",
                            component: () => import("src/feature/Security/Security.vue"),
                        },
                    ]
                },
                {
                    path: "",
                    name: "Auth",
                    component: () => import("src/feature/Auth/Layout.vue"),
                    children: [
                        {
                            path: AUTH_ROUTE.Login.slice(1),
                            name: "Login",
                            component: () => import("src/feature/Auth/Login.vue"),
                            meta: {
                                title: "Login to AnyWeb",
                                meta: [
                                    {
                                        name: "description",
                                        content: "Login to AnyWeb - support login with google, facebook, github"
                                    }
                                ]
                            }
                        },
                        {
                            path: AUTH_ROUTE.Register.slice(1),
                            name: "Register",
                            component: () => import("src/feature/Auth/Register.vue"),
                            meta: {
                                title: "Register to AnyWeb",
                                meta: [
                                    {
                                        name: "description",
                                        content: "Register to AnyWeb - support login with google, facebook, github"
                                    }
                                ]
                            }
                        },
                        {
                            path: AUTH_ROUTE.ForgotPassword.slice(1),
                            name: "ForgotPassword",
                            component: () => import("src/feature/Auth/Forgot.vue"),
                            meta: {
                                title: "Forgot Password - AnyWeb",
                                meta: [
                                    {
                                        name: "description",
                                        content: "Forgot Password - AnyWeb - support login with google, facebook, github"
                                    }
                                ]
                            }
                        }
                    ]
                }
            ]
        },
        {
            path: "/:pathMatch(.*)*",
            name: "NotFound",
            meta: {
                title: "404 Not Found",
                meta: [
                    {
                        name: "description",
                        content: "The page you are looking for does not exist."
                    }
                ]
            },
            component: () => import("src/components/NotfoundPage.vue")
        }
    ];
const router = createRouter({
    history: createWebHistory(),
    routes
})
    router.afterEach((to) => {
//   const { t } = i18n
        console.log("to", to)
        useHead(to.meta)
    })
export default router;