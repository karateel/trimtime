<template>
    <UContainer>
        Home page
    </UContainer>
</template>

<script setup lang="ts">
const user = useSupabaseUser()

// definePageMeta({
//     middleware: [
//         'auth',
//     ]
// });

useHead({
    title: 'Home'
})
</script>