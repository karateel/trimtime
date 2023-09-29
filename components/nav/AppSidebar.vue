<template>
    <aside class="fixed top-[84px] left-0 z-40 w-14 max-w-[16.5rem] flex flex-col overflow-hidden h-[calc(100vh-84px)] p-3 ease-in-out duration-200 transition-all
         bg-white dark:bg-gray-800 gap-4 transform-gpu" :class="{ 'w-full': menuStore.flag }">
        <div class="ml-auto">
            <UButton variant="ghost" class="bg-transparent" @click="menuStore.toggleMenu()">
                <UIcon name="i-heroicons-chevron-double-right-20-solid" class="text-lg"
                    :class="{ 'rotate-180': menuStore.flag }" />
            </UButton>
        </div>

        <div class="main flex-1">
            <UIcon name="i-heroicons-calendar-days text-3xl" v-if="!menuStore.flag" />
            <Calendar v-else />
            <div class="my-0" :class="{ 'mt-4': menuStore.flag }">
                <NuxtLink to="/" class="flex items-center py-2 pr-4 w-max gap-4 hover:text-sky-600">
                    <UIcon name="i-heroicons-home-20-solid text-3xl" />
                    <span :class="{ 'hidden': !menuStore.flag }">Home</span>
                </NuxtLink>
                <NuxtLink to="/about" class="flex items-center py-2 pr-4 w-max gap-4 hover:text-sky-600">
                    <UIcon name="i-heroicons-document-text-20-solid text-3xl" />
                    <span :class="{ 'hidden': !menuStore.flag }">About</span>
                </NuxtLink>
                <NuxtLink to="/clients" class="flex items-center py-2 pr-4 w-max gap-4 hover:text-sky-600">
                    <UIcon name="i-heroicons-users-20-solid text-3xl">settings</UIcon>
                    <span :class="{ 'hidden': !menuStore.flag }">Settings</span>
                </NuxtLink>
            </div>
        </div>
        <div class="footer">
            <ThemeModeButton />
        </div>
    </aside>
</template>

<script setup lang="ts">
import { useMenuStore } from '~/store/navbarStore'

const menuStore = useMenuStore();

</script>
