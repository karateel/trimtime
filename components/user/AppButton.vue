<template>
    <UDropdown v-if="user" :items="items" :ui="{ item: { disabled: 'cursor-text select-text' } }"
        :popper="{ placement: 'bottom-start' }">
        <UAvatar :src="src" v-model:path="path" size="lg" />
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
const props = defineProps(['path', 'size'])
const { path } = toRefs(props)
const src = ref('')
const avatar_path = ref('')

const { data } = await client
    .from('profiles')
    .select('avatar_url')
    .eq('id', user.value.id)
    .single()

if (data) {
    avatar_path.value = data.avatar_url
}

downloadImage(src, avatar_path)

watch(path, () => {
    if (path.value) {
        downloadImage(src, avatar_path)
    }
})

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
</script>