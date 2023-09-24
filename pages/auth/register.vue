<template >
    <section class="container mx-auto flex flex-wrap items-center justify-center text-gray-400">
        <UForm @submit.prevent="userRegister"
            class="bg-opacity-50 mt-10 flex w-full flex-col rounded-lg bg-[#242424] p-8 md:mt-0 gap-4">
            <h2 class="mb-5 text-lg font-medium text-[#aac8e4]">Register</h2>
            <UFormGroup size="lg" label="email" name="email" class="text-sm leading-7 text-gray-400 rounded" required>
                <UInput placeholder="you@example.com" icon="i-heroicons-envelope" type="email"
                    class="bg-opacity-20 w-full text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out"
                    v-model="email" />
            </UFormGroup>
            <UFormGroup size="lg" label="password" name="password" class="text-sm leading-7 text-gray-400 rounded" required>
                <UInput v-model="password"
                    class="bg-opacity-20 w-full text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out"
                    type="password" />
            </UFormGroup>
            <UFormGroup size="lg" label="confirm-password" name="confirm-password"
                class="text-sm leading-7 text-gray-400 rounded" required>
                <UInput v-model="confirmPassword"
                    class="bg-opacity-20 w-full text-base leading-8 text-gray-100 outline-none transition-colors duration-200 ease-in-out"
                    type="password" />
            </UFormGroup>
            <UButton type="submit" class="rounded text-center justify-center">
                Submit
            </UButton>
            <span class="bg-opacity-50 absolute right-8 top-8 rounded-lg bg-[#242424] p-8 px-4 py-2 text-red-500"
                v-if="errorMsg">{{ errorMsg }}</span>
            <p class="mt-3 text-xs">Do you have an account yet?</p>
            <UButton class="w-fit text-sm text-[#aac8e4] hover:text-[#42b883]" to="./login">Login
            </UButton>
        </UForm>
    </section>
</template>

<script setup>
const user = useSupabaseUser();
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMsg = ref('');
const { auth } = useSupabaseClient();
const userRegister = async () => {
    if (password.value !== confirmPassword.value) {
        errorMsg.value = 'Passwords do not match!';
        password.value = '';
        confirmPassword.value = '';
        setTimeout(() => {
            errorMsg.value = '';
        }, 3000);
        return;
    }
    try {
        const { error } = await auth.signUp({
            email: email.value,
            password: password.value,
        });
        email.value = '';
        password.value = '';
        confirmPassword.value = '';
        if (error) throw error;
    } catch (error) {
        errorMsg.value = error.message;
        setTimeout(() => {
            errorMsg.value = '';
        }, 3000);
    }
};

watchEffect(() => {
    if (user.value) {
        return navigateTo('/');
    }
});
</script>