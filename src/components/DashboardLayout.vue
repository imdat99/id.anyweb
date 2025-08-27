<template>
  <Layout className="min-h-svh h-svh bg-[#F8FAFD]">
      <div mode="horizontal" :defaultSelectedKeys="['Home']" class="!border-0 flex justify-between px-3 pt-2">
        <NavHeader>
          <!-- h(Button, { icon: h(IconSidebar, { size: 'large' }), class: 'cursor-pointer', theme: 'borderless', type: 'tertiary', onClick: () => (collapsed = !collapsed) })) -->
           <Button theme="borderless" size="large" className="!rounded-full" :icon="h(IconSideSheet, { size: 'extra-large' })"
            class="cursor-pointer mr-3" type="tertiary" @click="collapsed = !collapsed" />
          <img src="/assets/images/logo.svg" alt="Logo" class="h-8 w-8 bg-[--semi-color-bg-0] rounded-md animate-bounce-in duration-500 mr-2" />
          <!-- <Breadcrumb className="[&_.semi-typography]:text-lg" :routes="[{ name: 'Trang chủ', path: '/' }]" /> -->
          <span style="font-size: 18px; font-weight: 600; color: var(--semi-color-text-0)">仪表盘</span>
        </NavHeader>
        <div>
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
          className="h-full !border-0 ![&_.semi-navigation-item]:font-500 ![&_.semi-navigation-item-selected]:font-600"
          :defaultSelectedKeys="selecTedkeys"
          :isCollapsed="collapsed"
          :onSelect="data => {
            selecTedkeys = data.selectedKeys;
          }"
          :onClick="data => console.log('trigger onClick: ', data)"
          :items="[
            { itemKey: 'Home', text: $t('app:menu.home'), icon: h(IconHome, { size: 'large' }) },
            { itemKey: 'Histogram', text: $t('app:menu.services'), icon: h(IconHistogram, { size: 'large' }) },
            { itemKey: 'Live', text: '测试功能', icon: h(IconLive, { size: 'large' }) },
            { itemKey: 'Setting', text: '设置', icon: h(IconSetting, { size: 'large' }), items: [
                { itemKey: 'Profile', text: '个人资料' },
                { itemKey: 'Team', text: '团队管理' },
                { itemKey: 'Billing', text: '账单信息' },
                { itemKey: 'Integrations', text: '集成' },
                { itemKey: 'Security', text: '安全' },
                { itemKey: 'Notifications', text: '通知' },
            ] },
          ]"
          >
          <!-- <NavItem itemKey="Home" :text="$t('app:menu.home')" :icon="h(IconIntro, { size: 'large' })" /> -->
          <!-- <NavItem itemKey="Histogram" :text="$t('app:menu.services')" :icon="h(IconLayout, { size: 'large' })" /> -->
          <!-- <NavItem itemKey="Live" text="测试功能" :icon="h(IconLive, { size: 'large' })" /> -->
          <!-- <NavItem itemKey="Setting" text="设置" :icon="h(IconSetting, { size: 'large' })" /> -->
        </Nav>
      </LayoutSider>
      <Layout>
        <LayoutContent class="flex flex-col gap-4 h-full py-2 pr-2">
          <div class="flex-1 max-h-full overflow-auto rounded-lg p-4 bg-white">
            <router-view />
          </div>
        </LayoutContent>
      </Layout>
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
import { IconSideSheet } from '@kousum/semi-icons-lab-vue';
import {
  IconBell,
  IconHelpCircle,
  IconHistogram,
  IconHome,
  IconLive,
  IconSetting
} from '@kousum/semi-icons-vue';
import {
  Avatar,
  Button,
  Layout,
  LayoutContent,
  LayoutSider,
  Nav,
  NavHeader
} from '@kousum/semi-ui-vue';
import { h, reactive, ref } from 'vue';
const collapsed = ref(true);
const selecTedkeys = reactive<Array<string|number>>(['Home']);
</script>
