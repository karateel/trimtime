<!-- <template>
    <UModal v-model="isOpen">
        <RouterView />
    </UModal>
</template>
  
<script setup>
const isOpen = ref(false)
const router = useRouter()

const openModal = () => {
    isOpen.value = true
    router.push({ name: 'authModal' }) // Navigate to a route that displays the modal
}

const closeModal = () => {
    isOpen.value = false
    router.back() // Navigate back when closing the modal
}
</script> -->