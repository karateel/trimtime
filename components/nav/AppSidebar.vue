<template>
    <div id="application-sidebar"
        class="-translate-x-full transition-all duration-300 transform fixed top-0 left-0 bottom-0 z-[60] w-64 bg-white border-gray-200 pt-7 pb-10 overflow-y-auto scrollbar-y lg:block lg:translate-x-0 lg:right-auto lg:bottom-0 dark:scrollbar-y dark:bg-gray-800"
        :class="{ 'block': menuStore.flag, 'hidden': !menuStore.flag }">
        <ULink class="flex-none text-xl font-semibold dark:text-white px-6" to="/" aria-label="Brand">
            TrimTime
        </ULink>
        <UVerticalNavigation :links="links" class="p-6 w-full flex flex-col flex-wrap" />
        <Calendar v-show="calendarStore.isCalendarVisible" />
        <ThemeModeButton class="absolute bottom-2 left-2" />
    </div>
</template>
  
<script setup lang="ts">
import { useCalendarStore } from '~/store/calendarStore';
import { useMenuStore } from '~/store/navbarStore';

const menuStore = useMenuStore();
const calendarStore = useCalendarStore();

const links = [
    { label: 'Home', icon: 'i-heroicons-home', to: '/' },
    { label: 'Profile', icon: 'i-heroicons-user', to: '/profile' },
    { label: 'Finances', icon: 'i-heroicons-banknotes', to: '/finances' },
    {
        label: 'Calendar',
        icon: 'i-heroicons-calendar-days',
        click: () => {
            calendarStore.toggleCalendar();
        },
    },
];
</script>
  