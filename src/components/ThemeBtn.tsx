import { IconMoon } from "@kousum/semi-icons-vue";
import { Button } from "@kousum/semi-ui-vue";
import { defineComponent } from "vue";

{/* <script setup lang="ts">
import { useStorage } from '@vueuse/core';
import { h } from 'vue';

const switchMode = () => {
        const body = document.body;
        if (body.hasAttribute('theme-mode')) {
            body.removeAttribute('theme-mode');
            useStorage('theme-mode', 'light');
            // 以下这行代码，window.setMode仅用于当通过本Demo切换时，通知Semi官网Header记录更新当前模式（只用于演示）。在您的代码里无需存在。
            // window.setMode('light');
        } else {
            body.setAttribute('theme-mode', 'dark');
            useStorage('theme-mode', 'dark');
            // window.setMode('dark');
        }
    };
</script>
<template>
    <s-button theme="borderless" size="large" class="!rounded-full" @click="switchMode" :icon="h(IconTheme, { size: 'large' })" />
</template> */}
const ThemeBtn = defineComponent({
    name: 'ThemeBtn',
    setup() {
        const switchMode = () => {
            const body = document.body;
            if (body.hasAttribute('theme-mode')) {
                body.removeAttribute('theme-mode');
                body.classList.remove('dark');
                // useStorage('theme-mode', 'light');
                // 以下这行代码，window.setMode仅用于当通过本Demo切换时，通知Semi官网Header记录更新当前模式（只用于演示）。在您的代码里无需存在。
                // window.setMode('light');
            } else {
                body.setAttribute('theme-mode', 'dark');
                body.classList.add('dark');
                // useStorage('theme-mode', 'dark');
                // window.setMode('dark');
            }
        };
        return () => (
            <Button theme="borderless" type="tertiary" class="!rounded-full" onClick={switchMode} icon={<IconMoon size="large" />} />
        )
    },
});
export default ThemeBtn;