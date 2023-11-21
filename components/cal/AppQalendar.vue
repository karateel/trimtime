<template>
    <UContainer class="w-full max-w-full">
        <Qalendar :events="events" :config="config" @event-was-dragged="logEvents">
            <template #eventDialog="props">
                <div v-if="props.eventDialogData && props.eventDialogData.title">
                    <UCard>
                        <template #header>
                        </template>


                        <template #footer>
                        </template>
                    </UCard>
                    <UButton @click="props.closeEventDialog">Finished!</UButton>
                </div>
            </template>
        </Qalendar>
    </UContainer>
</template>
  
<script setup lang="ts">
import { Qalendar } from 'qalendar';
import { v4 as uuid } from 'uuid';

interface Event {
    title: string;
    with: string;
    time: { start: string; end: string };
    color: string;
    isEditable: boolean;
    id: string;
    description?: string;
}

const events = ref<Event[]>([]);

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

const getEventsFromLocalStorage = (): Event[] => {
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