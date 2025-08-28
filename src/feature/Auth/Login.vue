<script setup lang="ts">
import { IconLock, IconMail } from '@kousum/semi-icons-vue';
import { Form } from "@lethdat/semi-ui-vue";
import { AUTH_ROUTE } from 'src/lib/constants';
import { h, ref } from 'vue';
import IdpLoginBtn from './IdpLoginBtn.vue';

const loading = ref(false);
// console.log(asdasdas)
const handleSubmit = (values: any) => {
  console.log('submit', values);
  loading.value = true;
  const time = setTimeout(() => {
    loading.value = false;
    clearTimeout(time);
  }, 2000);
};

</script>
<template>
  <div class="text-center">
    <h2 class="mt-4 text-xl font-semibold text-gray-800">
      {{ $t('auth:login.title') }}
    </h2>
    <p class="text-sm text-gray-600">{{ $t('auth:login.subtitle') }}</p>
  </div>
  <IdpLoginBtn/>

  <Form :disabled="loading" @submit="handleSubmit" class-name="!space-y-4" :label-position="'left'" :label-width="0">
    <Form.Input
      size="large"
      noLabel
      field="email"
      type="email"
      field-class-name="!p-0"
      :placeholder="$t('auth:login.emailPlaceholder')"
      :prefix="h(IconMail)"
      :rules="[{ required: true, message: $t('app:error.requireFiled') }]"
    />
    <Form.Input
      size="large"
      noLabel
      mode="password"
      field-class-name="!p-0"
      field="password"
      :placeholder="$t('auth:login.passwordPlaceholder')"
      :prefix="h(IconLock)"
      :rules="[{ required: true, message: $t('app:error.requireFiled') }]"
    />
    <s-button class="w-full py-2 font-medium select-none" theme="solid" htmlType="submit" :loading="loading">
      {{ $t('auth:login.signIn') }}
    </s-button>
  </Form>
  <div class="mt-6 mb-3 text-center text-sm">
    <router-link :to="AUTH_ROUTE.ForgotPassword" class="text-blue-600 hover:(underline)">
    {{ $t('auth:login.forgotPassword') }}
    </router-link>
  </div>
  <div class="text-center text-sm text-gray-600">
    {{ $t('auth:login.noAccount') }}&nbsp;
    <router-link :to="AUTH_ROUTE.Register" class="text-blue-600 hover:(underline)">
    {{ $t('auth:login.signUp') }}
    </router-link>
  </div>
</template>