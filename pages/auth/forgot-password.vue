<template>
  <UContainer class="grid gap-8 justify-center text-center">
    <h1 class="font-[inherit] m-0 leading-[1.4] tracking-[-0.125px] font-semibold text-xl text-tuna dark:text-slate-300">
      Forgot password</h1>
    <UForm :state="state" @submit.prevent="resetPassword"
      class="grid gap-6 text-center justify-center rounded-md p-4 border border-primary-500">
      <AlertsErrorAlert :error-msg="authError" @clearError="clearError" />
      <AlertsSuccessAlert :success-msg="authSuccess" @clearSuccess="clearSuccess" />
      <UFormGroup label="Email" name="email">
        <UInput v-model="state.email" placeholder="Email" type="email" variant="outline" color="primary" />
      </UFormGroup>
      <UButton type="submit" :loading="loading" label="Request" block />
    </UForm>
  </UContainer>
</template>

<script setup lang="ts">
import { ForgotPasswordData } from '~/interface';

definePageMeta({
  layout: "auth"
})
useHead({
  title: 'Forgot Password'
})
const client = useSupabaseClient()
const loading = ref(false)
const authSuccess = ref('')
const authError = ref('')

const state = ref<ForgotPasswordData>({
  email: ''
})

const resetPassword = async () => {
  const { email } = state.value
  loading.value = true
  const { error } = await client.auth.resetPasswordForEmail(email, {
    redirectTo: `${window.location.origin}/new-password`
  })
  if (error) {
    loading.value = false
    authError.value = 'Invalid email credential'
    setTimeout(() => {
      authError.value = ''
    }, 5000)
  }
  else {
    loading.value = false
    authSuccess.value = `We've sent your an email.`
    setTimeout(() => {
      authSuccess.value = ''
    }, 5000)
  }
}

const clearError = () => {
  authError.value = '';
};

const clearSuccess = () => {
  authSuccess.value = '';
};
</script>
