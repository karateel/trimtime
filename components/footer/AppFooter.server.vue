<template>
    <footer class="hidden lg:fixed bottom-0 w-full lg:flex bg-mercury-200 dark:bg-tundora mt-4 max-h-[64px]">
        <div class="w-full mx-auto max-w-screen-xl p-4 grid grid-flow-col">
            <div>
                <span class="text-tuna dark:text-slate-300">© {{ new Date().getFullYear() }}</span>
                <ULink to="/" active-class="text-primary hover:underline">
                    TrimTime
                </ULink>
            </div>
            <UVerticalNavigation :links="links" class="grid justify-self-end grid-cols-3">
                <template #default="{ link }">
                    <span class="text-center relative w-full">{{ link.label }}</span>
                </template>
            </UVerticalNavigation>
        </div>
    </footer>
</template>

<script setup lang="ts">
const links = [{
    label: 'Documentation',
    to: ''
}, {
    label: 'Company',
    to: ''
}, {
    label: 'Support',
    to: ''
}]
</script>

<style scoped>
#footer {
    grid-area: footer;
}
</style>
