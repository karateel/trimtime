<template>
  <UContainer class="grid gap-8 text-center justify-center">
    <h1 class="font-[inherit] m-0 leading-[1.4] tracking-[-0.125px] text-[#f6f6f6] font-semibold text-xl">Sign in</h1>
    <UForm @submit.prevent="login" :state="state"
      class="grid gap-8 text-center justify-center rounded-md p-4 border border-sky-300">
      <ErrorAlert :error-msg="authError" @clearError="clearError" />
      <UContainer class="grid gap-4">
        <UFormGroup label="Email" name="email">
          <UInput v-model="state.email" placeholder="Email" type="email" />
        </UFormGroup>
        <UFormGroup label="Password" name="password">
          <UInput v-model="state.password" placeholder="Password" type="password" />
        </UFormGroup>
      </UContainer>
      <div class="grid grid-cols-1 gap-4 justify-items-center">
        <UButton type="submit" class="grid" :disabled="loading" :class="{ loading: loading }">Sign in
        </UButton>
        <UButton to="/auth/forgot-password" variant="link">Forgot your password?</UButton>
      </div>
    </UForm>
    <div class="grid grid-cols-1 justify-center">
      <UButton to="/auth/register" class="relative z-10 justify-center items-center gap-2 min-h-[1.25rem]">
        Create new account
      </UButton>
    </div>
  </UContainer>
</template>

<script setup lang="ts">
import { UserCredentials } from '~/interface';

definePageMeta({
  layout: "auth"
})
useHead({
  title: 'Login'
})

const state = ref<UserCredentials>({
  email: '',
  password: ''
})

const user = useSupabaseUser()
const loading = ref(false)
const client = useSupabaseClient()
const authError = ref('')

watchEffect(async () => {
  if (user.value) {
    await navigateTo('/')
  }
});

const login = async () => {
  const { email, password } = state.value
  loading.value = true
  const { error } = await client.auth.signInWithPassword({
    email: email,
    password: password
  })
  if (error) {
    loading.value = false
    authError.value = 'Invalid login credentials'
    setTimeout(() => {
      authError.value = ''
    }, 5000)
  }
}

const clearError = () => {
  authError.value = '';
};
</script>
