import { defineComponent, h, ref, onBeforeMount } from "vue";
import { LocaleProvider } from "@kousum/semi-ui-vue";
import type { Locale } from "@kousum/semi-ui-vue/dist/locale/interface";
import { useTranslation } from "i18next-vue";

// HOC function
export function withLocaleProvider(WrappedComponent: any) {
  return defineComponent({
    name: `WithLocaleProvider(${WrappedComponent.name || "Component"})`,
    setup(props, { attrs, slots }) {
      const { i18next } = useTranslation();
      const locale = ref<Locale>();
      const loadLocale = async () => {
        const localeData = i18next.store.data[i18next.language]?.common as Locale;
        const dateLang = await Promise.all([
          import('date-fns/locale/en-US'),
          import('date-fns/locale/vi')
        ]).then(modules => {
          return modules.find(mod => mod.default?.code === i18next.language)?.default ||
                 modules.find(mod => mod.default?.code === 'en-US')?.default ||
                 modules[0].default;
        });
        locale.value = { ...localeData, dateFnsLocale: dateLang as any };
      }
      onBeforeMount(loadLocale);
      i18next.on('languageChanged', () => {
        console.log('Language changed, reloading locale...');
        loadLocale();
      });
      return () =>
        h(LocaleProvider, { locale: locale.value }, {
          default: () => h(WrappedComponent, { ...attrs, ...props }, slots)
        });
    }
  });
}
