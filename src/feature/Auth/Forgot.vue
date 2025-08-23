<script setup lang="ts">
import { IconMail, IconSend } from "@kousum/semi-icons-vue";
import { Form } from "@kousum/semi-ui-vue";
import { AUTH_ROUTE } from "src/lib/constants";
import { h, ref } from "vue";

const loading = ref(false);
</script>
<template>
  <div className="text-center">
    <h2 className="text-xl font-semibold text-gray-800">
      {{ $t('auth:forgot.title') }}
    </h2>
    <p className="text-sm text-gray-600">{{ $t('auth:forgot.subtitle') }}</p>
  </div>
  <Form :disabled="loading" class-name="flex w-full max-w-sm items-center !space-x-2">
    <Form.Input size="large" noLabel field="email" type="email" field-class-name="!p-0 w-full"
      :placeholder="$t('auth:login.emailPlaceholder')" :prefix="h(IconMail)"
      :rules="[{ required: true, message: $t('app:error.requireFiled'), pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ }]" />
    <s-button size="large" :title="$t('forgot.sendResetLink')" :loading="loading" theme="solid" :icon="h(IconSend)">
    </s-button>
  </form>

  <div className="mt-6 text-center text-sm text-gray-600">
    {{$t('auth:forgot.rememberPassword')}}&nbsp;
    <router-link :to="AUTH_ROUTE.Login" className="text-blue-600 hover:underline">
    {{$t('auth:forgot.backToSignIn')}}
    </router-link>
  </div>
</template>
