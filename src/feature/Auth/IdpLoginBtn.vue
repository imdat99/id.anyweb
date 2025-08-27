<template>
    <div class="flex w-full max-w-sm items-center space-x-2 [&>button]:flex-1">
        <s-button theme="outline" :title="$t('auth:login.signInWithGoogle')">
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
</template>