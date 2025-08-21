<script setup lang="ts">
import HelloWorld from "components/HelloWorld";
import { Input } from "@kousum/semi-ui-vue";

</script>

<template>
    <div class="home">
        <h1 class="title">Home Page</h1>
        <p class="description">Welcome to the Home Page!</p>
        <HelloWorld msg="Vite + Vue 3 + TypeScript" />
        <Input type="text" placeholder="Type something..." />
    </div>
</template>