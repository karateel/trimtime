<template>
  <UContainer id="content" as="div" class="min-h-screen lg:grid" :ui="{
    constrained: 'w-full max-w-full px-0 sm:px-0 lg:px-0'
  }">
    <NavAppHeader />
    <UContainer id="main" as="main" class="w-full pt-2">
      <slot />
    </UContainer>
  </UContainer>
</template>

<script setup lang="ts">

</script>

<style scoped>
#content {
  grid-template-areas: "header header" "sidebar main";
  grid-template-columns: max-content;
  grid-template-rows: max-content;
}

#main {
  grid-area: main;
}
</style>
