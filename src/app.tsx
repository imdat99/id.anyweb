import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld";
import vueLogo from "./assets/vue.svg";
const app = defineComponent({
    name: "App",
    components: {
        HelloWorld
    },
    // Optionally, you can add a setup function if needed
    setup() {

    },
    render() {
        return (
            <>
                <div>
                    <a href="https://vite.dev" target="_blank">
                        <img src="/vite.svg" class="logo" alt="Vite logo" />
                    </a>
                    <a href="https://vuejs.org/" target="_blank">
                        <img src={vueLogo} class="logo vue" alt="Vue logo" />
                    </a>
                </div>
                <HelloWorld msg="Vite + Vue" />
            </>
        )
    }
});
export default app;