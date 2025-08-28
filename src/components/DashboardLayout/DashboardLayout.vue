<template>
  <Layout className="h-svh min-h-svh dark:bg-[#181818] dark:text-[#E5E5E5]">
    <div mode="horizontal" :defaultSelectedKeys="['Home']" class="!border-0 flex justify-between px-3 pt-2">
      <NavHeader>

        <img src="/assets/images/logo.svg" alt="Logo"
          class="h-8 w-8 bg-[--semi-color-bg-0] rounded-md animate-bounce-in duration-500 mr-2" />
        <!-- <Breadcrumb className="[&_.semi-typography]:text-lg" :routes="[{ name: 'Trang chủ', path: '/' }]" /> -->
        <span class="text-2xl">{{ $t("app:app.name") }}</span>
      </NavHeader>
      <div class="flex items-center space-x-2">
        <ThemeBtn class="" />
        <Button theme="borderless" :icon="h(IconBell, { size: 'large' })"
          style="color: var(--semi-color-text-2); margin-right: 12px" />
        <Button theme="borderless" :icon="h(IconHelpCircle, { size: 'large' })"
          style="color: var(--semi-color-text-2); margin-right: 12px" />
        <Avatar color="orange" size="small">YJ</Avatar>
      </div>
    </div>
    <Layout>
      <LayoutSider>
        <Nav
          className="h-full !border-0 ![&_.semi-navigation-item]:font-500 ![&_.semi-navigation-item-selected]:font-600 !bg-transparent [&_li]:!mb-3"
          :selectedKeys="[String($router.currentRoute.value.name)]" :isCollapsed="collapsed" :renderWrapper="({
            itemElement,
            props
          }) => (props as NavItemProps)?.link ? h(RouterLink, { to: String(props.itemKey) }, () => itemElement) : itemElement"
          :items="navItems" />
      </LayoutSider>
      <LayoutContent class="w-full flex-col h-full py-2 pr-2 max-h-[calc(100svh-40px)]">
        <div class="h-full overflow-auto rounded-lg p-4 bg-gray-50 dark:bg-[#242424]">
          <router-view />
        </div>
      </LayoutContent>
    </Layout>
    <!-- <LayoutFooter
      style="
        display: flex;
        justify-content: space-between;
        padding: 20px;
        color: var(--semi-color-text-2);
        background-color: rgba(var(--semi-grey-0), 1);
      "
    >
      <span style="display: flex; align-items: center">
        <IconBytedanceLogo size="large" style="margin-right: 8px" />
        <span>Copyright © 2023 ByteDance. All Rights Reserved. </span>
      </span>
      <span>
        <span style="margin-right: 24px">平台客服</span>
        <span>反馈建议</span>
      </span>
    </LayoutFooter> -->
  </Layout>
</template>

<script setup lang="ts">
import {
  IconBell,
  IconCreditCard,
  IconHelpCircle,
  IconLock,
  IconTemplate,
  IconUserCircle
} from '@kousum/semi-icons-vue';
import {
  Avatar,
  Button,
  Layout,
  LayoutContent,
  LayoutSider,
  Nav,
  NavHeader,
  type NavItemProps,
  type NavItems
} from '@lethdat/semi-ui-vue';
import { useTranslation } from 'i18next-vue';
import { h, ref } from 'vue';
import { RouterLink } from 'vue-router';
import ThemeBtn from '../ThemeBtn';

const collapsed = ref(true);
const { t } = useTranslation();
const navItems = ref<NavItems>([
  { itemKey: 'overview', link: 'overview', text: t('app:menu.overview'), icon: h(IconTemplate, { size: 'large' }) },
  { itemKey: 'personalInfo', text: t('app:menu.personalInfo'), icon: h(IconUserCircle, { size: 'large' }) },
  { itemKey: 'security', link: 'security', text: t('app:menu.security'), icon: h(IconLock, { size: 'large' }) },
  { itemKey: 'payment', link: 'payment', text: t('app:menu.payment'), icon: h(IconCreditCard, { size: 'large' }) },
]);
</script>
