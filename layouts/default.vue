<template>
  <div>
    <NavAppHeader />
    <NavAppNavToggler />
    <NavAppSidebar />
    <UContainer as="main" class="min-h-screen">

      <slot />
    </UContainer>
  </div>
</template>

<script lang="ts" setup>
import { useMenuStore } from '~/store/navbarStore'

const menuStore = useMenuStore();

</script>
