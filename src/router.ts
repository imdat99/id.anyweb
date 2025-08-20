import { createRouter, type RouterHistory } from "vue-router";

const router = (rh: RouterHistory) => createRouter({
    history: rh,
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