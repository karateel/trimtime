<template>
  <UContainer class="grid justify-center mb-8">
    <h1 class="text-center">New password</h1>
    <UForm :state="state" @submit.prevent="updatepassword"
      class="grid justify-center gap-8 text-center justify-items-center rounded-md p-4 border border-sky-300">
      <AlertsErrorAlert :error-msg="authError" @clearError="clearError" />
      <AlertsSuccessAlert :success-msg="authSuccess" @clearSuccess="clearSuccess" />
      <UFormGroup label="Password" name="password"
        class="block relative py-2.25 px-3 text-base cursor-text transition-all duration-200">
        <UInput v-model="state.password" placeholder="Password" type="password"
          class="placeholder:transition-all placeholder:duration-200 placeholder:text-c2c3c7 hover:placeholder-91949b placeholder:focus-within:text-91949b" />
      </UFormGroup>
      <UFormGroup label="New password" name="passwordConfirm"
        class="block relative py-2.25 px-3 text-base cursor-text transition-all duration-200">
        <UInput v-model="state.passwordConfirm" placeholder="New password" type="password"
          class="placeholder:transition-all placeholder:duration-200 placeholder:text-c2c3c7 hover:placeholder-91949b placeholder:focus-within:text-91949b" />
      </UFormGroup>
      <UButton class="gZMQdu" type="submit" :loading="loading">
        Save </UButton>
    </UForm>
  </UContainer>
</template>

<script setup lang="ts">
import { NewPasswordData } from '~/interface';

definePageMeta({
  layout: "auth"
})
useHead({
  title: 'New Password'
})
const client = useSupabaseClient()
const loading = ref(false)
const authSuccess = ref('')
const authError = ref('')

const state = ref<NewPasswordData>({
  password: '',
  passwordConfirm: '',
})

const updatepassword = async () => {
  const { password, passwordConfirm } = state.value
  if (password !== passwordConfirm) return authError.value = 'Password mismatch!';
  loading.value = true
  const { error } = await client.auth.updateUser({
    password: password
  })
  await client.auth.signOut()
  if (error) {
    loading.value = false
    authError.value = 'Failed to fetch'
    setTimeout(() => {
      authError.value = ''
    }, 5000)
  }
  else {
    loading.value = false
    authSuccess.value = `Password changed`
    setTimeout(() => {
      authSuccess.value = ''
      navigateTo('/login')
    }, 5000)
  }
}

const clearError = () => {
  authError.value = '';
};

const clearSuccess = () => {
  authSuccess.value = ''
  navigateTo('/login')
};
</script>
