<template>
    <UContainer>
        <p v-if="user" class="text-base leading-5 font-semibold mb-3 text-232730">Hi {{ user.user_metadata.first_name }}</p>
        <div v-else>
            <UButton to="/auth/login">
                Login
            </UButton>
            <p class="text-base leading-5 font-semibold mb-3 text-232730">unauthenticated</p>
        </div>
    </UContainer>
</template>

<script setup lang="ts">
const client = useSupabaseClient()
const user = useSupabaseUser()
const loading = ref(false)

const logout = async () => {
    loading.value = true
    const { error } = await client.auth.signOut()
    if (error) {
        loading.value = false
        return alert('Something went wrong !')
    }
}

useHead({
    title: 'Home',
    meta: [
        { name: 'description', content: 'Authentication template with email and password, using Supabase. If you want to a quick start to your next Nuxt3 app, please feel free to use this template.' }
    ]
})
</script>