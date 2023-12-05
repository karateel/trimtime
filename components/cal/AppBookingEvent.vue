<template>
    <UModal v-model="isModalOpen.isOpen" prevent-close>
        <UCard>
            <template #header>
                <div class="flex items-center justify-between">
                    <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
                        Create new booking
                    </h3>
                    <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                        @click="isModalOpen.toggleBooking()" />
                </div>
            </template>
          <UForm :state="state" @submit="saveEvent">
            <div>
              <div>{{ state.start }} - {{ state.end }}</div>
            </div>
            <UFormGroup label="Name" name="name">
              <UInput v-model="state.content" label="Name" variant="outline" color="primary" type="text"/>
            </UFormGroup>
            <UFormGroup label="Phone" name="phone">
              <UInput v-model="state.title" variant="outline" color="primary" type="phone" />
            </UFormGroup>
            <UButton type="submit" :loading="state.loading" label="Save" class="mt-4" >
              Submit
            </UButton>
          </UForm>
        </UCard>
    </UModal>
</template>

<script setup lang="ts">
import type { FormSubmitEvent } from "#ui/types";
import { useBookingEventStore } from "~/composables/bookingEventStore";
const isModalOpen = useBookingStore()

const state = reactive({
  start: undefined,
  end: undefined,
  title: undefined,
  content: undefined,
  loading: false,
})

const saveEvent = async (event: FormSubmitEvent<any>) => {
  useBookingEventStore().saveEvent(event.data)
  console.log(event.data)
}

</script>

<style scoped></style>
