import { createSSRApp } from 'vue'
import { RouterView } from 'vue-router'
import _r from './router'
// const router from './router'
export async function createApp() {
    const router = _r()
    const vueApp = createSSRApp(RouterView)
    vueApp.use(router)
    return {
        app: vueApp,
        router
    }
}

