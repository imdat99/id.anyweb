import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";

const router = (fn = (typeof window === undefined ? createWebHistory : createMemoryHistory)) => createRouter({
    history: fn(),
    routes: [
        {
            path: "/",
            component: () => import("./app"),
            children: [
                
            ]
        }
    ]
})
export default router;