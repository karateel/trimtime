<template>
    <aside :class="`${is_expanded ? 'is-expanded' : ''}`" 
    class="flex flex-col overflow-hidden h-screen p-4 w-[calc(2rem+32px)] ease-in-out duration-200 transition-all">
        <div class="mb-4">
            <img width="32" height="42" :src="LogoUrl" alt="Vue" />
        </div>

        <div class="flex relative mb-4 justify-end top-0 ease-in-out duration-200">
            <button class="ease-in-out duration-200" @click="ToggleMenu">
                <span class="translate-x-2">keyboard_double_arrow_right</span>
            </button>
        </div>

        <h3 class="duration-200 ease-in-out py-2 px-1">Menu</h3>
        <div class="menu">
            <nuxt-link to="/" class="button">
                <span class="material-icons">home</span>
                <span class="ease-in-out opacity-0 duration-300 transition-opacity">Home</span>
            </nuxt-link>
            <nuxt-link to="/about" class="button">
                <span class="material-icons">description</span>
                <span class="ease-in-out opacity-0 duration-300 transition-opacity">About</span>
            </nuxt-link>
        </div>

        <div class="flex"></div>

        <div class="menu">
            <router-link to="/settings" class="button">
                <span class="material-icons">settings</span>
                <span class="ease-in-out opacity-0 duration-300 transition-opacity">Settings</span>
            </router-link>
        </div>
    </aside>
</template>

<script setup lang="ts">
import LogoUrl from 'assets/logo.svg'

const is_expanded: Ref<boolean> = ref(useCookie<boolean | undefined | string>('is_expanded', true))
const ToggleMenu: () => void = () => { is_expanded.value = !is_expanded.value } 
</script>

<style scoped>

aside.is-expanded {
    width: var(--sidebar-width);
}

aside.is-expanded .menu-toggle-wrap {
    top: -3rem;
}

aside.is-expanded .menu-toggle-wrap .menu-toggle {
    transform: rotate(-180deg);
}

aside.is-expanded h3,
aside.is-expanded .button .text {
    opacity: 1;
}

aside .button {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: var(--light);
    padding: 0.5rem 1rem;
    transition: 0.2s ease-in-out;
}

aside .button .material-icons {
    font-size: 2rem;
    transition: 0.2s ease-in-out;
}

aside .button .text {
    transition: 0.2s ease-in-out;
}
</style>