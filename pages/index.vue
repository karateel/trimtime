<template>
    <div>
        Home page
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    middleware: 'auth',
});

useHead({
    title: 'Home'
})
</script>
<style></style>