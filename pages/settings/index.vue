<template>
    <UContainer v-if="user">
        <div class="mb-8 mt-4">
            <h4 class="text-tuna dark:text-slate-300 text-shadow">Account Settings</h4>
        </div>
        <UTabs :items="items">
            <template #myprofile>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, assumenda labore dolorum esse nemo</h1>
            </template>
            <template #account>
                <UserAppAccount />
            </template>
            <template #team>
                <UserAppTeam />
            </template>
        </UTabs>
    </UContainer>
</template>

<script setup lang="ts">
useHead({
    title: 'Settings'
})
const user = useSupabaseUser()
const formattedDate = ref('')

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