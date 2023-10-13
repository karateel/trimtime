<template>
    <UserAppAccount />
</template>

<script setup lang="ts">
const user = useSupabaseUser()

useHead({
    title: 'Profile'
})
</script>

<style scoped></style>