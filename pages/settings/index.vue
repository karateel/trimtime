<template>
    <UContainer v-if="user">
        <div class="mb-8 mt-4">
            <h4 class="text-tuna dark:text-slate-300 text-shadow">Account Settings</h4>
        </div>
        <UTabs :items="items">
            <template #account>
                <UserAppAccount />
            </template>
            <template #team>
                <h1>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quia, assumenda labore dolorum esse nemo
                    tempora quod aliquid totam eos excepturi magnam officiis odio inventore dolorem fugit quisquam nisi cum
                    mollitia.</h1>
            </template>
        </UTabs>
    </UContainer>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
const formattedDate = ref('')

const items = [{
    slot: 'account',
    label: 'Account'
}, {
    slot: 'team',
    label: 'Team'
}]
</script>

<style scoped></style>