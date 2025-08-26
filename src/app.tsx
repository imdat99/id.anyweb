import { defineComponent } from "vue";
import { RouterView } from "vue-router";
// import { enUS, vi } from 'date-fns/locale';
const app = defineComponent({
    name: "App",
    
    // Optionally, you can add a setup function if needed
    render: () => (<RouterView/>)
});
export default app;
