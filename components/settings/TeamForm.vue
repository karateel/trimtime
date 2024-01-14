<script setup lang="ts">
import type { TeamMember } from "@/interface";
import type { FormSubmitEvent } from "#ui/types";

const state = ref(<TeamMember>{
  first_name: undefined as string | undefined,
  last_name: undefined as string | undefined,
  role: undefined as string | undefined,
  instagram: undefined as string | undefined,
  email: undefined as string | undefined,
  success: '',
  error: '',
})

const loading = ref(false)

const createTeammate = async (event: FormSubmitEvent<any>) => {
  loading.value = true
  const { data, error } = await useFetch('/api/new-team', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: event.data.first_name,
      last_name: event.data.last_name,
      instagram: event.data.instagram,
      role: event.data.role,
      email: event.data.email
    })
  })
  if (data && !error.value) {
    state.value.success = 'Employee created';
    loading.value = false
    setTimeout(() => {
      state.value.success = '';
    }, 3000);
  } else if (error.value) {
    loading.value = false
    state.value.error = error.value.statusText || 'Unknown error occurred';
    setTimeout(() => {
      state.value.error = '';
    }, 3000);

    if (error.value.data?.message === 'Employee with this email already exists.') {
      state.value.error = 'Employee with this email already exists.';
    }
  }
  loading.value = false
}
</script>

<template>
  <UForm :state="state" @submit="createTeammate" class="space-y-4">
    <AlertsSuccessAlert :success="state.success" :success-msg="state.success"/>
    <AlertsErrorAlert :error="state.error" :error-msg="state.error"/>
    <UFormGroup label="First name" name="first_name">
      <UInput v-model="state.first_name" variant="outline" color="primary" placeholder="First name" type="text"/>
    </UFormGroup>
    <UFormGroup label="Last name" name="last_name">
      <UInput v-model="state.last_name" variant="outline" color="primary" placeholder="First name" type="text"/>
    </UFormGroup>
    <UFormGroup label="Role" name="role">
      <UInput v-model="state.role" variant="outline" color="primary" placeholder="Role" type="text"/>
    </UFormGroup>
    <UFormGroup label="Instagram" name="inst">
      <UInput v-model="state.instagram" variant="outline" color="primary" placeholder="Instagram" type="text"/>
    </UFormGroup>
    <UFormGroup label="Email" name="email">
      <UInput v-model="state.email" variant="outline" color="primary" placeholder="Email" type="email"/>
    </UFormGroup>
    <UButton :loading="loading" type="submit" label="Add" class="flex ml-auto"/>
  </UForm>
</template>

<style scoped>

</style>
