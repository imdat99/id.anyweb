<script setup lang="ts">
import { IconLock, IconMail } from '@kousum/semi-icons-vue';
import { Form } from "@kousum/semi-ui-vue";
import { AUTH_ROUTE } from 'src/lib/constants';
import { h, ref } from 'vue';
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
  <div class="flex w-full max-w-sm items-center space-x-2 [&>button]:flex-1">
    <s-button class="shadow-none w-full py-2 hover:bg-gray-50 bg-transparent" theme="outline"
      :title="$t('auth:login.signInWithGoogle')">
      <img src="/assets/images/google.svg" alt="Google" class="w-5 h-5 mr-2" />
      {{ $t('auth:login.signInWithGoogle') }}
    </s-button>
  </div>
  <div class="relative my-6">
    <div class="absolute inset-0 flex items-center">
      <div class="w-full border-t border-gray-300"></div>
    </div>
    <div class="relative flex justify-center text-sm">
      <span class="bg-white px-2 text-gray-500">
        {{ $t('auth:login.orWithEmail') }}
      </span>
    </div>
  </div>

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