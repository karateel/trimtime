<template>
  <Transition name="scale-y">
    <div v-if="errorMsg">
      <UAlert color="red" title="Error" icon="i-heroicons-shield-exclamation" :description="errorMsg" class="mb-4"/>
    </div>
  </Transition>
</template>

<script setup lang="ts">
defineProps<{ errorMsg: string }>()
</script>

<style></style>
