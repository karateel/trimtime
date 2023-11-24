<template>
  <UContainer class="grid gap-8 text-center justify-center">
    <h1 class="font-[inherit] m-0 leading-[1.4] tracking-[-0.125px] font-semibold text-xl text-tuna dark:text-slate-300">
      Create an
      account</h1>
    <UForm @submit="signUp" :state="state"
      class="grid gap-6 text-center justify-center rounded-md p-4 border border-primary-500">
      <AlertsErrorAlert :error-msg="authError" />
      <UContainer class="grid gap-4">
        <UFormGroup label="Name" name="first-name">
          <UInput v-model="state.name" placeholder="First name" type="text" variant="outline" color="primary" />
        </UFormGroup>
        <UFormGroup label="Lastname" name="last-name">
          <UInput v-model="state.lastname" placeholder="Last name" type="text" variant="outline" color="primary" />
        </UFormGroup>
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" placeholder="Email" type="email" variant="outline" color="primary" />
        </UFormGroup>
        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" placeholder="Password" type="password" variant="outline" color="primary" />
        </UFormGroup>
      </UContainer>
      <div class="grid grid-cols-1 gap-4 justify-items-center">
        <UButton class="grid" type="submit" :loading="loading">
          Sign up
        </UButton>
      </div>
      <UButton to="/auth/login" variant="link" class="justify-center">Already have an account?</UButton>
    </UForm>
  </UContainer>
</template>

<script setup lang="ts">
import type { RegistrationData } from '~/interface';

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
</script>
