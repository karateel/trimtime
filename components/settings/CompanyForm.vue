<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";

const state = ref({
  name: undefined as string | undefined,
  loading: false,
  error: '',
  success: ''
});

const createCompany = async (event: FormSubmitEvent<any>) => {
  state.value.loading = true;
  const {  data, error } = await useFetch('/api/new-company', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: event.data.name
    })
  })
  if (data && !error.value) {
    state.value.success = 'Company created';
    setTimeout(() => {
      state.value.success = '';
    }, 3000);
  } else if (error.value) {
    state.value.error = error.value.statusText || 'Unknown error occurred';
    setTimeout(() => {
      state.value.error = '';
    }, 3000);

    if (error.value.data?.message === 'Company with this name already exists.') {
      state.value.error = 'Company with this name already exists.';
    }
  }
  state.value.loading = false;
};

</script>

<template>
  <UForm :state="state" @submit="createCompany">
    <AlertsErrorAlert :error="state.error" :error-msg="state.error"/>
    <AlertsSuccessAlert :success="state.success" :success-msg="state.success"/>
    <UFormGroup label="Company name" name="company_name" class="mb-4">
      <UInput v-model="state.name" variant="outline" color="primary" placeholder="Company name" type="text"/>
    </UFormGroup>
    <UButton type="submit" label="Save" :loading="state.loading"/>
  </UForm>
</template>
