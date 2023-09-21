<template>
    <aside class="flex flex-col overflow-hidden h-screen p-4 w-[calc(2rem+32px)] ease-in-out duration-200 transition-all bg-indigo-800" :class="{ 'w-full': menuStore.flag }">
        <div class="mb-4">
            <img width="150" src='/img/logo.png' alt="Vue" />
        </div>

        <div class="flex relative mb-4 justify-end top-0 ease-in-out duration-200">
            <UButton icon="i-mdi-chevron-double-right" class="ease-in-out duration-200"
                @click="menuStore.toggleMenu()" />
        </div>

        <h3 class="duration-200 ease-in-out py-2 px-1">Menu</h3>
        <div class="menu">
            <NuxtLink to="/" class="flex items-center">
                <UIcon name="i-mdi-home-variant-outline" class="w-4 h-4" />
                <span class="">Home</span>
            </NuxtLink>
            <NuxtLink to="/about" class="flex items-center">
                <UIcon name="i-mdi-text-box-multiple-outline" />
                <span class="">About</span>
            </NuxtLink>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <NuxtLink to="/settings" class="flex items-center">
                <UIcon name="i-mdi-cog">settings</UIcon>
                <span class="">Settings</span>
            </NuxtLink>
        </div>
    </aside>
</template>

<script setup lang="ts">

const menuStore = useMenuStore();

</script>
