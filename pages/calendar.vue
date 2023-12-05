<template>
    <UContainer class="w-full max-w-full px-0 lg:px-0">
        <vue-cal :time-from="8 * 60" :time-to="19 * 60 + 30" :time-step="30" hide-view-selector today-button editable-events
                 :events="useBookingEventStore().events"
                 @event-create="consoleEvent"
            :drag-to-create-threshold="0" :snap-to-time="15" :disable-views="['years', 'year', 'week', 'month']"
            @event-drag-create="useBookingStore().toggleBooking()" :selected-date="useCalendarStore().selectedDate">
            <template #today-button>
                <UTooltip text="Go to Today's date" :popper="{ arrow: true }">
                    <UButton icon="i-heroicons-arrow-uturn-right-solid" color="primary" variant="ghost"
                        @click="useCalendarStore().selectedDate = new Date()" />
                </UTooltip>
            </template>
        </vue-cal>
        <CalAppBookingEvent />
    </UContainer>
</template>

<script setup lang="ts">
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import { useBookingEventStore } from "~/composables/bookingEventStore";

const consoleEvent = (e) => {
  console.log(e)
}

</script>

<style scoped></style>
