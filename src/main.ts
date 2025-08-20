import 'uno.css'
import { createSSRApp, h } from 'vue'
import { createWebHistory, RouterView, type RouterHistory } from 'vue-router'
import _root from './components/root'
// const router from './router'
export async function createApp(rh: RouterHistory) {
    const router = await import('./router').then(m => m.default(rh))
    const vueApp = createSSRApp(h(_root,undefined, h(RouterView) ))
    vueApp.use(router)
    return {
        app: vueApp,
        router
    }
}

async function render() {
    const { app, router } = await createApp(createWebHistory())
    router.isReady().then(() => {
        app.mount(document.documentElement, true)
    })
}
render().catch((error) => {
    console.error('Error during app initialization:', error)
});
