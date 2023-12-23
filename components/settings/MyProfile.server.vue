<script setup lang="ts">
interface Owner  {
  email: string,
  first_name: string,
  last_name: string,
  loading: boolean
}

defineProps<{state: Owner}>()
</script>

<template>
  <UForm :state="state" class="space-y-4">
    <UFormGroup>
      <UInput label="Email" v-model="state.email" variant="outline" color="primary" type="email"/>
    </UFormGroup>
    <UFormGroup>
      <UInput label="Name" v-model="state.first_name" variant="outline" color="primary" type="text"/>
    </UFormGroup>
    <UFormGroup>
      <UInput label="Lastname" v-model="state.last_name" variant="outline" color="primary" type="text"/>
    </UFormGroup>

  </UForm>

</template>

<style scoped>

</style>
