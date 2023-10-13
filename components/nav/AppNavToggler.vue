<template>
    <div class="sticky top-0 inset-x-0 bg-white px-4 sm:px-6 md:px-8 lg:hidden dark:bg-brown">
        <div class="flex items-center py-4">
            <UButton icon="i-heroicons-queue-list" variant="ghost"
                :color="$colorMode.value === 'dark' ? 'slate-300' : 'tuna'" @click="menuStore.toggleMenu()">
            </UButton>
            <NavAppBreadcrumbs />
        </div>
    </div>
</template>
  
<script setup lang="ts">
import { useMenuStore } from '~/store/navbarStore';
const menuStore = useMenuStore();
</script>
  