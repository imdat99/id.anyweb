import 'uno.css'
import { createApp } from "./main";

async function render() {
    const { app, router } = await createApp()
    router.isReady().then(() => {
        app.mount("body", true)
    })
}
render().catch((error) => {
    console.error('Error during app initialization:', error)
});
