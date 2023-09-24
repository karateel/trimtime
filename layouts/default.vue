<template>
    <div class="h-screen flex">
        <header class="main-header">
            <Navigation />
        </header>
        <main class="main-content flex flex-col w-full">
            <div class="flex justify-between items-center pt-4">
                <LanguageSel v-if="user"/>
                <UButton to="/auth/register" v-else>Register</UButton>
                <UserNav/>
            </div>
            <UContainer>
                <slot />
            </UContainer>
        </main>
    </div>
</template>

<script setup lang="ts">
const date = new Date()
const supabase = useSupabaseClient()

const { data: { user } } = await supabase.auth.getUser()

</script>