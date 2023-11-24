<template>
    <UContainer class="w-full max-w-full">
        <CalAppBookingEvent>
            <UForm :state="state" class="gap-8 grid p-4" @submit="saveBooking">
                <UFormGroup label="Title" name="title">
                    <UInput v-model="state.title" variant="outline" color="primary" />
                </UFormGroup>
                <UFormGroup label="Name" name="with">
                    <UInput v-model="state.with" variant="outline" color="primary" />
                </UFormGroup>
                <UFormGroup label="Comment" name="comment">
                    <UInput v-model="state.description" variant="outline" color="primary" />
                </UFormGroup>
                <UButton type="submit" class="justify-self-end" @click="openModal.toggleBooking()">
                    Save
                </UButton>
            </UForm>
        </CalAppBookingEvent>

        <Qalendar :events="events" :config="config" @interval-was-clicked="getInterval" @event-was-dragged="logEvents">
            <template #eventDialog="props">
                <div v-if="props.eventDialogData && props.eventDialogData.title">
                    <UCard>
                        <template #header>
                        </template>
                        <template #footer>
                        </template>
                    </UCard>
                    <UButton @click="props.closeEventDialog">Finish!</UButton>
                </div>
            </template>
        </Qalendar>
    </UContainer>
</template>
  
<script setup lang="ts">
import { Qalendar } from 'qalendar';
import { v4 as uuid } from 'uuid';
import type { ScheduleEvent, NewBooking } from '@/interface';
import type { FormSubmitEvent } from '#ui/types';

const config = ref({
    defaultMode: 'day',
    dayIntervals: {
        length: 30,
        height: 50,
        displayClickableInterval: true,
        intervalStyles: { color: 'white' },
    },
    dayBoundaries: {
        start: 10,
        end: 20,
    },
    showCurrentTime: true,
    eventDialog: {
        isCustom: true
    }
});

const state = ref<NewBooking>({
    title: undefined,
    with: undefined,
    time: { start: '', end: '' },
    isEditable: true,
    id: uuid(),
    description: undefined
})

const saveBooking = async (event: FormSubmitEvent<any>) => {
    const newEvent = event.data;

    if (Array.isArray(newEvent)) {
        events.value.push(...newEvent);
    } else {
        events.value.push(newEvent);
    }

    localStorage.setItem('dayEvents', JSON.stringify(events.value));
    getEventsFromLocalStorage()
}

const getInterval = async (e: any) => {
    state.value.time = {
        start: e.intervalStart,
        end: e.intervalEnd
    }
    openModal.toggleBooking()
}

const events = ref<ScheduleEvent[]>([]);

const openModal = useBookingStore();

const getEventsFromLocalStorage = (): ScheduleEvent[] => {
    const storedEvents = localStorage.getItem('dayEvents');
    return storedEvents ? JSON.parse(storedEvents) : [];
};

events.value = getEventsFromLocalStorage();

watch(events, (newEvents) => {
    localStorage.setItem('dayEvents', JSON.stringify(newEvents));
});

const logEvents = (e: { id: string; time: { start: string; end: string } }) => {
    const draggedEvent = events.value.find((event) => event.id === e.id);

    if (draggedEvent) {
        draggedEvent.time = e.time;

        localStorage.setItem('dayEvents', JSON.stringify(events.value));
    }
};
</script>

<style>
@import "/node_modules/qalendar/dist/style.css";
</style>