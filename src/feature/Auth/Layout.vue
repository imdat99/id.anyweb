<script setup lang="ts">
import LanguageBtn from "./LanguageBtn.vue";

</script>

<template>
    <div class="bg-background flex items-center min-h-svh flex-col">
      <div class="flex-1 items-center flex">
        <div class=":uno: bg-white w-[calc(100vw-1rem)] md:w-[500px] max-w-md rounded-2xl p-8 space-y-6 border border-gray-100">
          <div class="flex">
            <img
              class="mx-auto animate-bounce-in duration-500 h-10 w-10"
              src="/vite.svg"
              alt="logo"
            />
          </div>
          <router-view />
        </div>
      </div>
      <div class="flex justify-between"></div>
      <div class="mb-8 text-center text-xs text-gray-500">
        <p>{{$t('app:footer.text', { year: new Date().getFullYear() })}}</p>
        <div class="mt-2 space-x-4">
          <LanguageBtn />
          <a to={PolicyPath.privacy} class="hover:text-gray-700">
            {{$t('app:policy.title')}}
          </a>
          <a to={contactPath.help} class="hover:text-gray-700">
            {{$t('app:helper.title')}}
          </a>
        </div>
      </div>
    </div>
</template>