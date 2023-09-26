<template>
    <UContainer>
        <div class="z-10 fixed right-0 top-0 p-6 box-border flex items-center justify-between transition-all duration-200">
            <UserNav v-if="user" />
            <UButton v-else to="/auth/login" label="Login" variant="link" />
        </div>
    </UContainer>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

definePageMeta({
    middleware: [
        'auth',
    ]
});

useHead({
    title: 'Home'
})
</script>