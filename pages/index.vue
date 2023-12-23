<template>
    <div>
        Home page
    </div>
</template>

<script setup lang="ts">
const user = useSupabaseUser()
definePageMeta({
    middleware: 'auth',
});

useHead({
    title: 'Home'
})

onMounted(() => {
  const createUser = async () => {
    try {
      const response = await fetch('/api/new-owner', {
        method: 'POST',
      })
      if (response.ok) {
        const data = await response.json();
        return data
      } else {
        console.error('Error creating user:', response.statusText);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if(user) {
    createUser()
  } else {
    console.log('Cant push user');
  }
})
</script>
<style></style>
