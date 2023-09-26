<template>
  <UContainer class="grid gap-8 text-center justify-center">
    <h1 class="font-[inherit] m-0 leading-[1.4] tracking-[-0.125px] text-[#f6f6f6] font-semibold text-xl">Create an
      account</h1>
    <UForm @submit.prevent="signUp" :state="state"
      class="grid gap-8 text-center justify-items-center rounded-md p-4 border border-sky-300">
      <ErrorAlert :error-msg="authError" @clearError="clearError" />
      <UFormGroup label="Name" name="first-name"
        class="block relative py-2.25 px-3 text-base cursor-text transition-all duration-200">
        <UInput v-model="state.name" placeholder="First name" type="text"
          class="placeholder:transition-all placeholder:duration-200 placeholder:text-c2c3c7 hover:placeholder-91949b placeholder:focus-within:text-91949b" />
      </UFormGroup>
      <UFormGroup label="Lastname" name="last-name"
        class="block relative py-2.25 px-3 text-base cursor-text transition-all duration-200">
        <UInput v-model="state.lastname" placeholder="Last name" type="text"
          class="placeholder:transition-all placeholder:duration-200 placeholder:text-c2c3c7 hover:placeholder-91949b placeholder:focus-within:text-91949b" />
      </UFormGroup>
      <UFormGroup label="Email" name="email"
        class="block relative py-2.25 px-3 text-base cursor-text transition-all duration-200">
        <UInput v-model="state.email" placeholder="Email" type="email"
          class="placeholder:transition-all placeholder:duration-200 placeholder:text-c2c3c7 hover:placeholder-91949b placeholder:focus-within:text-91949b" />
      </UFormGroup>
      <UFormGroup label="Password" name="password"
        class="block relative py-2.25 px-3 text-base cursor-text transition-all duration-200">
        <UInput v-model="state.password" placeholder="Password" type="password"
          class="placeholder:transition-all placeholder:duration-200 placeholder:text-c2c3c7 hover:placeholder-91949b placeholder:focus-within:text-91949b" />
      </UFormGroup>
      <UButton class="relative z-10 flex justify-center items-center gap-2 min-h-[1.25rem]" type="submit"
        :loading="loading">
        Sign up
      </UButton>
      <UButton to="/auth/login" variant="link">Already have an account?</UButton>
    </UForm>
  </UContainer>
</template>

<script setup lang="ts">
import { RegistrationData } from '~/interface';

definePageMeta({
  layout: "auth"
})
useHead({
  title: 'Register'
})

const state = ref<RegistrationData>({
  email: '',
  password: '',
  name: '',
  lastname: '',
})

const client = useSupabaseClient()
const user = useSupabaseUser()
const loading = ref(false)
const authError = ref('')

watchEffect(async () => {
  if (user.value) {
    await navigateTo('/')
  }
});

const signUp = async () => {
  const { email, password, name, lastname } = state.value

  if (!name) return authError.value = 'First name required';
  if (!lastname) return authError.value = 'Last name required';
  loading.value = true
  const { error } = await client.auth.signUp({
    email: email,
    password: password,
    options: {
      data: {
        first_name: name,
        last_name: lastname,
      }
    }
  })
  if (error) {
    loading.value = false
    authError.value = 'Failed to fetch'
  }
}

const clearError = () => {
  authError.value = ''
}
</script>
