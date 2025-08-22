<script setup lang="ts">
import { IconLock, IconMail } from '@kousum/semi-icons-vue';
import {Form, Input} from "@kousum/semi-ui-vue"
import { ref } from 'vue';
const value = ref('123')
</script>
<template>
  <div class="text-center">
    <h2 class="mt-4 text-xl font-semibold text-gray-800">
      {{ $t('auth:login.title') }}
    </h2>
    <p class="text-sm text-gray-600">{{ $t('auth:login.subtitle') }}</p>
  </div>
  <div class="flex w-full max-w-sm items-center space-x-2 [&>button]:flex-1">
    <v-button variant="outline" class="shadow-none w-full py-2 hover:bg-gray-50 bg-transparent"
      :title="$t('auth:login.signInWithGoogle')">
      <img src="/assets/images/google.svg" alt="Google" class="w-5 h-5" />
      {{ $t('auth:login.signInWithGoogle') }}
    </v-button>
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

  <Form class-name="space-y-4" layout="horizontal">
    <v-input type="email" v-model="value" :placeholder="$t('auth:login.emailPlaceholder')">
      <template #prefix>
        <IconMail size="large" />
      </template>
    </v-input>
    <v-input mode="password" :placeholder="$t('auth:login.passwordPlaceholder')">
      <template #prefix>
        <IconLock size="large" />
      </template>
    </v-input>
    <Input v-model="value"/>
    <Input v-model="value"/>
    <div>
      {{ value }}
    </div>
    <v-button class="w-full py-2 font-medium select-none" type="submit" loading={isSubmitting}>
      {{ $t('auth:login.signIn') }}
    </v-button>
  </Form>
  <div class="mt-6 mb-3 text-center text-sm">
    <Link to={authPath.forgotPassword} class="text-blue-600 hover:underline">
    {{ $t('auth:login.forgotPassword') }}
    </Link>
  </div>
  <div class="text-center text-sm text-gray-600">
    {{ $t('auth:login.noAccount') }}&nbsp;
    <Link to={authPath.register} class="text-blue-600 hover:underline">
    {{ $t('auth:login.signUp') }}
    </Link>
  </div>
</template>