import i18next from 'i18next'
import I18NextHttpBackend from 'i18next-http-backend'

const i18n = i18next.createInstance()
i18n.use(I18NextHttpBackend).init({
    supportedLngs: window.APP_LANGUGE_SUPPORT,
    fallbackLng: window.APP_DEFAULT_LANGUAGE,
    defaultNS: 'common',
    ns: ['common', 'app', 'auth'],
    interpolation: {
        escapeValue: false,
    },
    backend: {
        loadPath: '/locales/{{lng}}/{{ns}}.json', // dynamic fetch JSON
    },
})
export default i18n