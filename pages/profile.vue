<template>
    <div v-if="user">
        <h2 class="text-xl">Hello, {{ user.email }}</h2>
        <!-- <p class="text-gray-400 my-3">User ID: {{ user.id }}</p> -->
    </div>
    <div v-else>
        <h2>Error to load user</h2>
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

useHead({
    title: 'Profile'
})
</script>

<style scoped></style>