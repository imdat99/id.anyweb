<script setup lang="ts">
import { Button, Input } from "@kousum/semi-ui-vue";

</script>

<template>
    <div class="home">
        <h1 class="title">Home Page</h1>
        <p class="description">Welcome to the Home Page!</p>
        <Input type="text" placeholder="Type something..." />
        <Button type="primary" @click="console.log('Button clicked!')">Click Me</Button>
    </div>
</template>