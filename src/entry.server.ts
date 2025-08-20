import { createMemoryHistory } from 'vue-router'
import { createApp } from './main'
import { renderToWebStream } from 'vue/server-renderer'

export async function render(url: string) {
    const { app, router } = await createApp(createMemoryHistory())

    // set location cho router
    router.push(url)
    await router.isReady() // đợi router resolve async components
    const ctx = {}
    const stream = renderToWebStream(app, ctx)
    return {
        stream,
        context: ctx,
    }
}
