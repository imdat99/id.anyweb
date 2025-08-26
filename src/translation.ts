import i18next from 'i18next'
import I18NextHttpBackend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'
const i18n = i18next.createInstance()
i18n.use(I18NextHttpBackend).use(LanguageDetector).init({
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