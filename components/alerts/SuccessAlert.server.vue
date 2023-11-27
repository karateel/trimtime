<template>
  <Transition name="scale-y">
    <div v-if="successMsg">
      <UAlert color="green" title="Success" icon="i-heroicons-shield-check" :description="successMsg" />
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{ successMsg: string }>()
</script>

<style></style>
