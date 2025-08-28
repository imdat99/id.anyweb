import { defineAsyncComponent, type App } from "vue";
export const appComponents = {
    install(app: App): {
        [key: string]: any;
    } {
        // Register components globally
        app.component("v-button", defineAsyncComponent(() => import("./ui/Button.vue")));
        app.component("s-button", defineAsyncComponent(() => import("@lethdat/semi-ui-vue/dist/button")));
        app.component("v-input", defineAsyncComponent(() => import("./ui/Input")));
        // Register external components
        // app.component("AwesomeButton", () => import("awesome-ui/AwesomeButton.vue"));

        return {};
    }
}