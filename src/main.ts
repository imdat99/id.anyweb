import I18NextVue from 'i18next-vue'
// import vi_VN from '@lethdat/semi-ui-vue/dist/locale/source/vi_VN'
import { createHead } from '@unhead/vue/client'
import 'uno.css'
import { createApp } from 'vue'
import { RouterView } from 'vue-router'
import { appComponents } from './components'
import { withErrorBoundary } from './lib/hoc/withErrorBoundary'
import { withLocaleProvider } from './lib/hoc/withLocale'
import i18n from './translation'
// const router from './router'
const head = createHead({
    init: [{
        titleTemplate: '%s | @anyweb.id',
    }]
  })
async function render() {
    
    const router = await import('./router').then((m) => m.default)
    const app = createApp(withLocaleProvider(withErrorBoundary(RouterView)))
    app.use(I18NextVue, {i18next: i18n})
    app.use(head)
    app.use(router)
    app.use(appComponents)
    router.isReady().then(() => {
        app.mount('#app', true)
    })
}
render().catch((error) => {
    console.error('Error during app initialization:', error)
})
