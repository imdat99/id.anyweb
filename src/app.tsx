import { defineComponent, onBeforeMount, ref } from "vue";
import { RouterView } from "vue-router";
import { LocaleProvider } from "@kousum/semi-ui-vue";
import type { Locale } from "@kousum/semi-ui-vue/dist/locale/interface";
import { useTranslation } from "i18next-vue";
// import { enUS, vi } from 'date-fns/locale';
const app = defineComponent({
    name: "App",
    
    // Optionally, you can add a setup function if needed
    setup() {
        const {i18next, t} = useTranslation();
        const locale = ref<Locale>()
        onBeforeMount(async () => {
            const localeData = i18next.store.data[i18next.language].common as Locale;
            const dateLang = await Promise.all([
                import('date-fns/locale/en-US'),
                import('date-fns/locale/vi')]).then((m) => {
                    m.find((mod) => mod.default?.code === i18next.language)?.default ||
                    m.find((mod) => mod.default?.code === 'en-US')?.default ||
                    m[0].default;
                })
                // return modules.find((m) => m.default?.code === i18next.language)?.default || modules[0].default;
            locale.value = {...localeData, dateFnsLocale: dateLang as any};
        })
        // You can use the translation function `t` here if needed
        // For example, you can log a translated string
        // console.log(i18next.store.data[i18next.language]); // Assuming 'welcome_message' is a key in your translation files
        return () => (
            <LocaleProvider locale={locale.value}>
                <RouterView/>
            </LocaleProvider>
        )
    }
});
export default app;
