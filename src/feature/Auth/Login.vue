<script setup lang="ts">
import { IconLock, IconMail } from '@kousum/semi-icons-vue';
import { Input } from '@kousum/semi-ui-vue';
import Button from 'components/ui/Button.vue';
import { h } from 'vue';
</script>
<template>
      <div class="text-center">
        <h2 class="mt-4 text-xl font-semibold text-gray-800">
          {{$t('auth:login.title')}}
        </h2>
        <p class="text-sm text-gray-600">{{$t('auth:login.subtitle')}}</p>
      </div>
      <div class="flex w-full max-w-sm items-center space-x-2 [&>button]:flex-1">
        <Button
          variant="outline"
          class="shadow-none w-full py-2 hover:bg-gray-50 bg-transparent"
          :title="$t('auth:login.signInWithGoogle')"
        >
          <img
            src="/assets/images/google.svg"
            alt="Google"
            class="w-5 h-5"
          />
          {{$t('auth:login.signInWithGoogle')}}
        </Button>
      </div>
      <div class="relative my-6">
        <div class="absolute inset-0 flex items-center">
          <div class="w-full border-t border-gray-300"></div>
        </div>
        <div class="relative flex justify-center text-sm">
          <span class="bg-white px-2 text-gray-500">
            {{$t('auth:login.orWithEmail')}}
          </span>
        </div>
      </div>

      <div class="space-y-4">
        <Input
          class="!rounded-md"
          type="email"
          :placeholder="$t('auth:login.emailPlaceholder')"
          :prefix="h(IconMail, {size: 'large'})"
        />
        <Input
          mode="password"
          class="!rounded-md"
          :placeholder="$t('auth:login.passwordPlaceholder')"
            :prefix="h(IconLock, {size: 'large'})" />
        <Button
          class="w-full py-2 font-medium select-none"
          type="submit"
          loading={isSubmitting}
        >
          {{$t('auth:login.signIn')}}
        </Button>
      </div>
      <div class="mt-6 mb-3 text-center text-sm">
        <Link
          to={authPath.forgotPassword}
          class="text-blue-600 hover:underline"
        >
          {{$t('auth:login.forgotPassword')}}
        </Link>
      </div>
      <div class="text-center text-sm text-gray-600">
        {{$t('auth:login.noAccount')}}&nbsp;
        <Link to={authPath.register} class="text-blue-600 hover:underline">
          {{$t('auth:login.signUp')}}
        </Link>
      </div>
</template>