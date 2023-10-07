<template>
    <UDropdown v-if="user" :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
        :popper="{ placement: 'bottom-start' }">
        <UAvatar icon="i-heroicons-photo" size="lg" />
        <template #account="{ item }">
            <div class="text-left">
                <p>
                    Signed in as
                </p>
                <p class="truncate font-medium">
                    {{ user.email }}
                </p>
            </div>
        </template>
        <template #item="{ item }">
            <span class="truncate">{{ item.label }}</span>
            <UIcon :name="item.icon" class="ms-auto" />
        </template>
    </UDropdown>

    <UButton v-else to="/auth/login" label="Login" variant="link" color="primary"
        class="px-4 lg:px-5 py-2 lg:py-2.5 mr-2" />
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