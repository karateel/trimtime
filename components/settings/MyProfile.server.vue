<script setup lang="ts">
import type { MyProfile } from "@/interface";

defineProps<{state: MyProfile}>()
</script>

<template>
  <UForm :state="state" class="space-y-4">
    <UFormGroup>
      <UInput label="Email"
              :loading="state.loading"
              placeholder="Loading..."
              v-model="state.email" variant="outline" color="primary" type="email"/>
    </UFormGroup>
    <UFormGroup>
      <UInput label="Name"
              :loading="state.loading"
              placeholder="Loading..."
              v-model="state.first_name" variant="outline" color="primary" type="text"/>
    </UFormGroup>
    <UFormGroup>
      <UInput label="Lastname"
              :loading="state.loading"
              placeholder="Loading..."
              v-model="state.last_name" variant="outline" color="primary" type="text"/>
    </UFormGroup>
  </UForm>
</template>

<style scoped>

</style>
