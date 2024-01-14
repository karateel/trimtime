<template>
    <UContainer v-if="user">
        <div class="mb-8 mt-4">
            <h4 class="text-tuna dark:text-slate-300 text-shadow">Account Settings</h4>
        </div>
        <UTabs :items="items">
            <template #profile><SettingsMyProfile :state="state"/></template>
            <template #account><UserAppAccount/></template>
            <template #team><SettingsAppTeam/></template>
        </UTabs>
    </UContainer>
</template>

<script setup lang="ts">
useHead({
    title: 'Settings'
})
const user = useSupabaseUser()
const state = ref({
  email: '',
  first_name: '',
  last_name: '',
  loading: true
})

const getOwner = async () => {
  state.value.loading = true
  const { data, error } = await useFetch('/api/get-owner', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
  if(data.value && !error.value) {
    state.value = {
      ...state.value,
      ...data.value,
      loading: false
    }
  }
};
onMounted(() => {
  getOwner()
})

const items = [
    {
        slot: 'profile',
        label: 'My Profile'
    },
    {
        slot: 'account',
        label: 'Account'
    },
    {
        slot: 'team',
        label: 'Team',
    }]

</script>

<style scoped></style>
