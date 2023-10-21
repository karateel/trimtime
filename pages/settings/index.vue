<template>
    <UContainer v-if="user">
        <UserAppAccount/>
    </UContainer>
</template>

<script setup lang="ts">
const user = useSupabaseUser()


</script>

<style scoped></style>