import { IconSideSheet } from '@kousum/semi-icons-lab-vue';
import {
    IconCreditCard,
    IconLock,
    IconTemplate,
    IconUserCircle
} from '@kousum/semi-icons-vue';
import {
    Button,
    Nav,
    type NavItemProps
} from '@lethdat/semi-ui-vue';
import { defineComponent, getCurrentInstance, h, ref } from 'vue';
import { RouterLink } from 'vue-router';

export default defineComponent({
    name: "DashNav",
    setup() {
        const proxy = getCurrentInstance()

        const $t = proxy!.proxy!.$t
        const $router = proxy!.proxy!.$router
        const collapsed = ref(true);
       
        return () => (
            <Nav
                className="h-full !border-0 ![&_.semi-navigation-item]:font-500 ![&_.semi-navigation-item-selected]:font-600 !bg-transparent [&_li]:!mb-3"
                selectedKeys={[String($router.currentRoute.value.name)]} isCollapsed={collapsed.value}
                footer={<div class="w-full flex flex-col">
                    <Button theme='borderless' onClick={() => collapsed.value = !collapsed.value} icon={h(IconSideSheet, { size: 'large' })} />
                </div>}
                renderWrapper={({
                    itemElement,
                    props
                }) => {
                    return (props as NavItemProps).link ? <RouterLink to={String(props.itemKey)}>{itemElement}</RouterLink> : itemElement
                }}
                items={[
                    { itemKey: 'overview', link: 'overview', text: $t('app:menu.overview'), icon: h(IconTemplate, { size: 'large' }) },
                    { itemKey: 'personalInfo', text: $t('app:menu.personalInfo'), icon: h(IconUserCircle, { size: 'large' }) },
                    { itemKey: 'security', link: 'security', text: $t('app:menu.security'), icon: h(IconLock, { size: 'large' }) },
                    { itemKey: 'payment', link: 'payment', text: $t('app:menu.payment'), icon: h(IconCreditCard, { size: 'large' }) },
                ]} />
        );
    },
})