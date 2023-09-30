<template>
    <div>
        Home page
    </div>
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