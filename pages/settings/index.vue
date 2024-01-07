<template>
    <UContainer v-if="user">
        <div class="mb-8 mt-4">
            <h4 class="text-tuna dark:text-slate-300 text-shadow">Account Settings</h4>
        </div>
        <UTabs :items="items">
            <template #myprofile>
                <SettingsMyProfile :state="state"/>
            </template>
            <template #account>
                <UserAppAccount />
            </template>
            <template #team>
                <SettingsAppTeam/>
            </template>
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
  try {
    const response = await fetch('/api/get-owner', {
      method: 'GET',
    })
    if (response.ok) {
      const data = await response.json();
      state.value = data
      state.value.loading = false
    } else {
      console.error('Error creating user:', response.statusText);
    }
  } catch (error) {
    console.error('Error:', error);
  }
};
onMounted(() => {
  getOwner()
})

const items = [
    {
        slot: 'myprofile',
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
