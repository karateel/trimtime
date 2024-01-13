<script setup lang="ts">
import type { TeamMember } from "@/interface";

const state = ref(<TeamMember>{
  first_name: undefined as string | undefined,
  last_name: undefined as string | undefined,
  role: undefined as string | undefined,
  instagram: undefined as string | undefined,
  email: undefined as string | undefined,
  success: '',
  error: '',
})

const createTeammate = async () => {
  const { data, pending, error, refresh } = await useFetch('/api/new-team', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      first_name: state.value.first_name,
      last_name: state.value.last_name,
      instagram: state.value.instagram,
      role: state.value.role,
      email: state.value.email
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
}
</script>

<template>
  <UForm :state="state" @submit="createTeammate">
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
    <UButton type="submit" label="Add" />
  </UForm>
</template>

<style scoped>

</style>
