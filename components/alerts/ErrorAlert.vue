<template>
  <Transition name="scale-y">
    <div v-if="errorMsg">
      <UAlert color="red" title="Error" icon="i-heroicons-shield-exclamation" :description="errorMsg"
        :close-button="{ icon: 'i-heroicons-x-mark-20-solid', color: 'gray', variant: 'link', padded: false }" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{ errorMsg: string }>()
</script>

<style></style>
