<template>
    <div>
        Home page
      {{ user }}
      {{client}}
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const client = useSupabaseClient()
definePageMeta({
    middleware: 'auth',
});

useHead({
    title: 'Home'
})
</script>
<style></style>
