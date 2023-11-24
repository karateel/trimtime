<script setup>
const links = [{
    label: 'Home',
    icon: 'i-heroicons-home',
    to: '/'
}, {
    label: 'Breadcrumb',
    icon: 'i-heroicons-link'
}]
</script>

<template>
    <UBreadcrumb :links="links" />
</template>

