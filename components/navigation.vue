<template>
    <aside
        class="flex flex-col overflow-hidden h-screen p-4 w-[calc(2rem+32px)] ease-in-out duration-200 transition-all bg-indigo-600 dark:bg-violet-800 gap-4"
        :class="{ 'w-full': menuStore.flag }">
        <div class="header flex">
            <div class="mb-4">
                <img width="150" src='/img/logo.png' alt="Vue" />
            </div>

            <div class="flex relative mb-4 justify-end top-0 ease-in-out duration-200">
                <UButton variant="ghost" icon="i-heroicons-chevron-double-right-20-solid"
                    class="ease-in-out duration-200 bg-transparent" @click="menuStore.toggleMenu()" />
            </div>
        </div>

        <div class="main flex-1">
            <UIcon name="i-heroicons-calendar-days text-3xl" v-if="!menuStore.flag"/>
            <Calendar v-else/>
            <div class="my-0" :class="{'mt-4': menuStore.flag}">
                <NuxtLink to="/" class="flex items-center py-2 pr-4 w-max gap-4 hover:text-sky-600">
                    <UIcon name="i-heroicons-home-20-solid text-3xl" />
                    <span :class="{ 'hidden': !menuStore.flag }">Home</span>
                </NuxtLink>
                <NuxtLink to="/about" class="flex items-center py-2 pr-4 w-max gap-4 hover:text-sky-600">
                    <UIcon name="i-heroicons-document-text-20-solid text-3xl" />
                    <span :class="{ 'hidden': !menuStore.flag }">About</span>
                </NuxtLink>
                <NuxtLink to="/settings" class="flex items-center py-2 pr-4 w-max gap-4 hover:text-sky-600">
                    <UIcon name="i-heroicons-cog-8-tooth-20-solid text-3xl">settings</UIcon>
                    <span :class="{ 'hidden': !menuStore.flag }">Settings</span>
                </NuxtLink>
            </div>
        </div>
        <div class="footer">
            <ThemeButton />
        </div>
    </aside>
</template>

<script setup lang="ts">

const menuStore = useMenuStore();

</script>
