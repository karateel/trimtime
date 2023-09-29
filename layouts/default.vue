<template>
  <div class="h-screen">
    <NavAppHeader />
    <main class="main-content relative" :class="{ 'ml-64': menuStore.flag, 'ml-12': !menuStore.flag }">
      <NavAppSidebar />
      <slot />
    </main>
  </div>
</template>

<script lang="ts" setup>
import { useMenuStore } from '~/store/navbarStore'

const menuStore = useMenuStore();

</script>
