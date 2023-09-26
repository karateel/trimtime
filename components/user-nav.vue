<template>
    <UDropdown :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
        :popper="{ placement: 'bottom-start' }">
        <UAvatar icon="i-heroicons-photo" size="lg" />
        <template #account="{ item }">
            <div class="text-left">
                <p>
                    Signed in as
                </p>
                <p class="truncate font-medium text-gray-900 dark:text-white">
                    {{ user.email }}
                </p>
            </div>
        </template>
        <template #item="{ item }">
            <span class="truncate">{{ item.label }}</span>
            <UIcon :name="item.icon" class="flex-shrink-0 h-4 w-4 text-gray-400 dark:text-gray-500 ms-auto" />
        </template>
    </UDropdown>
</template>

<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()

const items = ref([
    [{
        slot: 'account',
    }],
    [{
        label: 'Settings',
        icon: 'i-heroicons-cog-8-tooth',
    }],
    [{
        label: 'Sign out',
        icon: 'i-heroicons-arrow-left-on-rectangle',
        click: () => {
            logout()
        }
    }]
])

const logout = async () => {
    const { error } = await client.auth.signOut()
    if (error) {
        return alert('Something went wrong !')
    }
}
</script>