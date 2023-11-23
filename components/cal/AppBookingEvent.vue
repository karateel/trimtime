<template>
    <UModal v-model="isModalOpen.isOpen" prevent-close>
        <UCard :ui="{ ring: '', divide: 'divide-y dark:divide-mercury divide-tundora' }">
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                        Modal still in progress
                    </h3>
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                        @click="isModalOpen.toggleBooking()" />
                </div>
            </template>

        </UCard>
    </UModal>
</template>

<script setup lang="ts">
const isModalOpen = useBookingStore()

</script>

<style scoped></style>