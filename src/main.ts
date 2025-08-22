import I18NextVue from 'i18next-vue'
// import vi_VN from '@kousum/semi-ui-vue/dist/locale/source/vi_VN'
import 'uno.css'
import { createApp, h } from 'vue'
import { RouterView } from 'vue-router'
import i18n from './translation'
import { appComponents } from './components'
import { withLocaleProvider } from './lib/hoc/withLocale'
// const router from './router'

async function render() {
    const router = await import('./router').then((m) => m.default)
    const app = createApp(withLocaleProvider(RouterView))
    app.use(I18NextVue, {i18next: i18n})
    app.use(router)
    app.use(appComponents)
    router.isReady().then(() => {
        app.mount('#app', true)
    })
}
render().catch((error) => {
    console.error('Error during app initialization:', error)
})
