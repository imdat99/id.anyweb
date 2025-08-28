<script setup lang="ts">
import { IconLock, IconMail, IconShield, IconUserCircle } from '@kousum/semi-icons-vue';
import { Form } from '@lethdat/semi-ui-vue';
import { AUTH_ROUTE } from 'src/lib/constants';
import { h, resolveComponent } from 'vue';
import IdpLoginBtn from './IdpLoginBtn.vue';

</script>

<template>
    <div className="text-center">
        <h2 className="text-center text-xl font-semibold text-gray-800">
            {{ $t('auth:register.createAccount') }}
        </h2>
        <p className="text-sm text-gray-600">{{ $t('auth:register.subtitle') }}</p>
    </div>
    <IdpLoginBtn/>
    <Form className="mt-6 space-y-4">
        <div className="gap-4 flex flex-col">
            <p className="text-black font-bold">
                {{ $t('auth:register.emailVerification') }}
            </p>
            <Form.Input size="large" noLabel field="email" type="email" field-class-name="!p-0"
                :placeholder="$t('auth:login.emailPlaceholder')" :prefix="h(IconMail)"
                :rules="[{ required: true, message: $t('app:error.invalidData') }]" />
            <div className="flex flex-col gap-1">
                <Form.Input size="large" noLabel field="otpCode" field-class-name="!p-0"
                    :placeholder="$t('auth:register.codePlaceholder')" :prefix="h(IconShield)"
                    :suffix="h(resolveComponent('s-button'), { theme: 'solid', class: 'mr-1' }, { default: () => $t('auth:register.sendCode') })"
                    :rules="[{ required: true, message: $t('app:error.invalidData') }]" />
                <div className="text-gray-500 text-sm">
                    {{ $t('auth:register.emailTip') }}
                </div>
            </div>
        </div>
        <div className="flex flex-col gap-4">
            <p className="text-black font-bold">{{ $t('auth:register.accountInfo') }}</p>
            <Form.Input size="large" noLabel field="fullName" field-class-name="!p-0"
                :placeholder="$t('auth:register.fullName')" :prefix="h(IconUserCircle)"
                :rules="[{ required: true, message: $t('app:error.invalidData') }]" />
            <Form.Input size="large" noLabel field="password" mode="password" field-class-name="!p-0"
                :placeholder="$t('auth:login.passwordPlaceholder')" :prefix="h(IconLock)"
                :rules="[{ required: true, message: $t('app:error.invalidData') }]" />
        </div>
        <s-button Type="submit" theme="solid" className="w-full py-2 font-medium">
            {{ $t('auth:register.signUp') }}
        </s-button>
    </form>

    <div className="mt-6 text-center text-sm text-gray-600">
        {{ $t('auth:register.alreadyHaveAccount') }} &nbsp;
        <router-link :to="AUTH_ROUTE.Login" replace className="text-blue-600 hover:underline">
            {{ $t('auth:login.signIn') }}
        </router-link>
    </div>
</template>