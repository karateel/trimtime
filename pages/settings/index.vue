<template>
    <UContainer v-if="user">
        <h2 class="text-xl"> Setting page with nested route for: {{ user.email }}</h2>
        <!-- <p class="text-gray-400 my-3"> User ID: {{ user.id }} </p>        {{ user }} -->
    </UContainer>
</template>

<script setup lang="ts">
const user = useSupabaseUser()


</script>

<style scoped></style>