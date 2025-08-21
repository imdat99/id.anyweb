<template>
    <select class="cursor-pointer focus:outline-none" v-model="locale">
        <option v-for="value in languageSupport" :key="value" :value="value">{{ $t("app:app.language." + value) }}
            ({{ value.toUpperCase() }})</option>
    </select>
</template>

<script setup>
import { useTranslation } from 'i18next-vue';
import { ref, watch } from 'vue';

const { i18next } = useTranslation();
const locale = ref(i18next.language);
const languageSupport = window.APP_LANGUGE_SUPPORT || ['en'];
watch(locale, (newLocale) => {
    i18next.changeLanguage(newLocale).then(() => {
        console.log('Language changed to:', newLocale);
    }).catch((error) => {
        console.error('Error changing language:', error);
    });
})
</script>