<template>
    <UContainer class="w-full max-w-full">
        {{ events }}
        <Qalendar :events="events" @interval-was-clicked="dateClick" @event-was-dragged="eventDragged" :config="config"
            class="max-h-[calc(100vh-85px)]">
        </Qalendar>
    </UContainer>
</template>
  
<script async setup lang="ts">
import { Qalendar } from 'qalendar';
import { v4 as uuid } from 'uuid';

defineComponent({ Qalendar });

function dateClick(e: any) {
    console.log('e', e);
}

function eventDragged(e: any) {
    console.log(e.time)
    console.log(e.id)

    const updatedEvents = events.value.map((event) => {
        if (event.id = e.id) {
            return { ...event, time: e.time }
        }
        return event
    })

    events.value = updatedEvents
    localStorage.setItem('events', JSON.stringify(updatedEvents));
}

function updateEvents(newEvents: any[]) {
    events.value = newEvents;
}

const events = ref([
    {
        title: 'Advanced algebra',
        with: 'Chandler Bing',
        time: { start: '2023-10-28 12:05', end: '2023-10-28 13:35' },
        color: 'yellow',
        isEditable: true,
        id: uuid(),
        description: 'Lorem ipsum dolor sit amet voluptatem!',
    },
    {
        title: 'Ralph on holiday',
        with: 'Rachel Greene',
        time: { start: '2023-10-28 16:00', end: '2023-10-28 18:25' },
        color: 'green',
        isEditable: true,
        id: uuid(),
    },
]);

watch(events, (newEvents) => {
    localStorage.setItem('events', JSON.stringify(newEvents));
});

localStorage.setItem('events', JSON.stringify(events.value));

const config = ref({
    defaultMode: 'day',
    dayIntervals: {
        length: 30,
        height: 50,
        displayClickableInterval: true,
        intervalStyles: { color: 'white' },
    },
    dayBoundaries: {
        start: 6,
        end: 18,
    },
    showCurrentTime: true,
});

</script>

<style>
@import "/node_modules/qalendar/dist/style.css";
</style>