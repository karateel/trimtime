<template>
    <USlideover v-model="menuStore.flag" side="left">
        <UVerticalNavigation :links="links" class="pt-6 px-3 lg:p-6 w-full flex flex-col flex-wrap" />
        <ThemeModeButton />
    </USlideover>

    <aside id="sidebar" class="hidden w-36 lg:w-64 lg:block dark:bg-tundora bg-mercury h-screen">
        <!-- <CalAppDatePicker /> -->
        <UVerticalNavigation :links="links" class="pt-6 px-3 lg:p-6 w-full flex flex-col flex-wrap" />
        <ThemeModeButton />
    </aside>
</template>
  
<script setup lang="ts">
const menuStore = useMenuStore();
const closeSidebar = () => {
    menuStore.flag = false
}

const links = [
    { label: 'Home', icon: 'i-heroicons-home', to: '/', click: () => { closeSidebar() } },
    { label: 'Profile', icon: 'i-heroicons-user', to: '/profile', click: () => { closeSidebar() } },
    { label: 'Finances', icon: 'i-heroicons-banknotes', to: '/finances', click: () => { closeSidebar() } },
    {
        label: 'Calendar',
        icon: 'i-heroicons-calendar-days',
        to: '/calendar',
        click: () => {
            closeSidebar();
        },
    },
];
</script>
  
<style scoped>
#sidebar {
    grid-area: sidebar;
}
</style>~/composables/navbarStore