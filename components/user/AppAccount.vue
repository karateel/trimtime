<template>
    <UForm @submit="updateProfile" :state="state" class="gap-8 grid">
        <AlertsSuccessAlert :success-msg="changesSaved" />

        <UserAppAvatar v-model:path="state.avatar_path" @update="updateProfile" />
        <UFormGroup label="Username" name="username">
            <UInput v-model="state.email" variant="outline" color="primary" type="text" />
        </UFormGroup>

        <UButton type="submit" :loading="state.loading" label="Save" />
    </UForm>
</template>

<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
const changesSaved = ref('')

let { data } = await supabase
    .from('profiles')
    .select(`email, avatar_url`)
    .eq('id', user.value.id)
    .single()

const state = ref({
    id: user.value.id,
    email: data.email,
    avatar_path: data.avatar_url,
    loading: false
})

async function updateProfile(event) {
    const data = event.data;
    try {
        data.loading = true;
        const initialUpdates = {
            id: data.id,
            avatar_url: null,
            updated_at: new Date(),
        };

        const { error: initialError } = await supabase.from('profiles').upsert(initialUpdates, {
            returning: 'minimal',
        });

        if (initialError) {
            throw initialError;
        }

        const newUpdates = {
            id: data.id,
            username: data.username,
            avatar_url: data.avatar_path,
            updated_at: new Date(),
        };

        const { error: finalError } = await supabase.from('profiles').upsert(newUpdates, {
            returning: 'minimal',
        });

        if (finalError) {
            throw finalError;
        }
    } catch (error) {
        console.error('Error in updateProfile:', error);
    } finally {
        data.loading = false;
        changesSaved.value = 'Changes saved';
        setTimeout(() => {
            changesSaved.value = ''
        }, 3000)
    }
}

onMounted(() => {
  console.log(data)
})
</script>
