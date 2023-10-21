<template>
    <CalAppSchedule />
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
});

useHead({
    title: 'Home'
})
</script>
<style>
@import 'vue-cal/dist/vuecal.css';
</style>