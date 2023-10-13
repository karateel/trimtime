<template>
    <form class="form-widget" @submit.prevent="updateProfile">
        <UserAppAvatar v-model:path="avatar_path" />
        <div>
            <label for="username">Name</label>
            <input id="username" type="text" v-model="username" />
        </div>
        <div>
            <input type="submit" class="button primary block" :value="loading ? 'Loading ...' : 'Update'"
                :disabled="loading" />
        </div>
    </form>
</template>

<script setup>
const supabase = useSupabaseClient()

const loading = ref(true)
const username = ref('')
const avatar_path = ref('')

loading.value = true
const user = useSupabaseUser()

let { data } = await supabase
    .from('profiles')
    .select(`username, avatar_url`)
    .eq('id', user.value.id)
    .single()

if (data) {
    username.value = data.username
    avatar_path.value = data.avatar_url
}

loading.value = false

async function updateProfile() {
    try {
        loading.value = true
        const user = useSupabaseUser()

        const updates = {
            id: user.value.id,
            username: username.value,
            avatar_url: avatar_path.value,
            updated_at: new Date(),
        }

        let { error } = await supabase.from('profiles').upsert(updates, {
            returning: 'minimal',
        })

        if (error) throw error
    } catch (error) {
        alert(error.message)
    } finally {
        loading.value = false
    }
}
</script>