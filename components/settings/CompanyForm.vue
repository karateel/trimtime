<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";

const state = ref({
  name: undefined as string | undefined,
  loading: false
})

const createCompany = async (event: FormSubmitEvent<any>) => {
  state.value.loading = true
  try {
    const response = await fetch('/api/new-company', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: state.value.name,
      }),
    })
    if (response.ok) {
      const data = await response.json();
      state.value = data;
      state.value.loading = false;
    } else {
      console.error('Error creating company:', response.statusText);
    }
  } catch (e) {
    console.error('Error:', e)
  }
}
</script>

<template>
<UForm :state="state" @submit="createCompany">
  <UFormGroup label="Company name" name="company_name" class="mb-4">
    <UInput v-model="state.name" variant="outline" color="primary" placeholder="Company name" type="text"/>
  </UFormGroup>
  <UButton type="submit" label="Save" :loading="state.loading"/>
</UForm>
</template>
