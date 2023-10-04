<template>
    <TransitionRoot :show="menuStore.flag">
        <Dialog as="div" @close="menuStore.flag = false" class="fixed inset-0 z-50 lg:hidden bg-gray-800 w-36">
            <TransitionChild enter="transition ease-in-out duration-200 transform" enter-from="-translate-x-full"
                enter-to="translate-x-0" leave="transition ease-in-out duration-200 transform" leave-from="translate-x-0"
                leave-to="-translate-x-full" as="template">
                <div class="flex relative z-10 flex-col w-36 h-full lg:hidden">
                    <UVerticalNavigation :links="links" class="pt-6 px-3 lg:p-6 w-full flex flex-col flex-wrap" />
                    <Calendar v-show="calendarStore.isCalendarVisible" class="hidden lg:block" />

                    <ThemeModeButton class="absolute bottom-2 left-2" />
                </div>
            </TransitionChild>
        </Dialog>
    </TransitionRoot>

    <aside id="sidebar" class="hidden w-36 lg:w-64 lg:block bg-gray-800">
        <ULink class="flex-none text-xl font-semibold dark:text-white px-6" to="/" aria-label="Brand">
            TrimTime
        </ULink>

        <UVerticalNavigation :links="links" class="pt-6 px-3 lg:p-6 w-full flex flex-col flex-wrap" />
        <Calendar v-show="calendarStore.isCalendarVisible" class="hidden lg:block" />

        <ThemeModeButton class="absolute bottom-2 left-2" />
    </aside>
</template>
  
<script setup lang="ts">
import { TransitionChild, DialogOverlay, Dialog, TransitionRoot } from '@headlessui/vue'
import { useCalendarStore } from '~/store/calendarStore';
import { useMenuStore } from '~/store/navbarStore';

const menuStore = useMenuStore();
const calendarStore = useCalendarStore();

defineComponent({
    TransitionChild, Dialog, DialogOverlay, TransitionRoot
})

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
            calendarStore.toggleCalendar();
        },
    },
];
</script>
  
<style scoped>
#sidebar {
    grid-area: sidebar;
}
</style>