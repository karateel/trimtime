<script setup lang="ts">
defineProps<{isOpen: boolean}>()
</script>

<template>
  <UModal :is-open="isOpen">
    <UCard :ui="{ ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
      <template #header>
        <Placeholder class="h-8" />
      </template>

      <Placeholder class="h-32" />

      <template #footer>
        <Placeholder class="h-8" />
      </template>
    </UCard>
  </UModal>
</template>

<style scoped>

</style>
