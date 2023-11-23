<template>
  <UContainer id="content" as="div" class="lg:grid grid-rows-[auto,1fr,auto]" :ui="{
    constrained: 'w-full max-w-full px-0 sm:px-0 lg:px-0'
  }">
    <NavAppHeader />
    <UContainer id="main" as="main" class="w-full py-2 max-w-full lg:overflow-auto lg:h-full lg:max-h-[calc(100vh-134px)]">
      <slot />
    </UContainer>
    <FooterAppFooter />
  </UContainer>
</template>

<script setup lang="ts">

</script>

<style scoped>
#content {
  grid-template-areas: "header header" "sidebar main" "sidebar footer";
  grid-template-columns: max-content;
  grid-template-rows: max-content;
}

#main {
  grid-area: main;
}
</style>
