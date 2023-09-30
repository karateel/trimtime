<template>
    <UDropdown v-if="user" :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
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

    <UButton v-else to="/auth/login" label="Login" variant="link"
        class="text-gray-800 dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800">
        Log
        in</UButton>
</template>

<script setup>
const client = useSupabaseClient()
const user = useSupabaseUser()
const router = useRouter()

const items = ref([
    [{
        slot: 'account',
        click: () => {
            router.push({ path: '/profile' })
        }
    }],
    [{
        label: 'Settings',
        icon: 'i-heroicons-cog-8-tooth',
        click: () => {
            router.push({ path: '/settings/' })
        }
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