<script setup lang="ts">
import type { TeamMember } from "@/interface";

const state = ref(<TeamMember>{
  first_name: undefined,
  last_name: undefined,
  instagram: undefined,
  role: undefined,
  email: undefined
})

const createTeammate = async () => {
  try {
    const response = await fetch('/api/new-teammember', {
      method: 'POST',
    })
    if (response.ok) {
      const data = await response.json();
      state.value = data
    } else {
      console.error('Error creating user:', response.statusText);
    }

  } catch (error) {
    console.error('Error:', error);
  }
}
</script>

<template>
  <UForm :state="state" @submit="createTeammate">
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
