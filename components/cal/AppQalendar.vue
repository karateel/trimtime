<template>
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

<style scoped lang="postcss">
@import "../../node_modules/qalendar/dist/style.css";


.calendar-root-wrapper {
    @apply bg-mercury dark:bg-tundora
}

.calendar-header__period-name {
    color: #000;
}

.calendar-header__mode-picker {
    color: #fff !important;
    background-color: #fff !important;
    text-emphasis-color: #000 !important;
    border: 1px solid #000 !important;
}

.calendar-header__mode-value {
    color: #000 !important;
    background-color: #fff !important;
}

.calendar-header__mode-options {
    color: #fff !important;
    background-color: #fff !important;
}

.calendar-header__mode-option.is-month-mode {
    color: #000 !important;
    background-color: #fff !important;
}

.calendar-header__mode-option.is-week-mode {
    color: #000 !important;
    background-color: #fff !important;
}

.calendar-header__mode-option.is-day-mode {
    color: #000 !important;
    background-color: #fff !important;
}

.calendar-header__chevron-arrows {
    color: #000 !important;
}

.calendar-header {
    background: #fff;
    color: #fff;
}

.week-timeline__day-name {
    color: #000 !important;
}

.week-timeline__date {
    color: #000 !important;
}

.day-timeline__hour {
    color: #000 !important;
}

.date-picker__value-display {
    color: #000 !important;
    background-color: #fff !important;
    text-emphasis-color: #000 !important;
    border: 1px solid #000 !important;
}

.date-picker__value-display-text {
    color: #000 !important;
    border-color: #000 !important;
}

.date-picker__week-picker {
    background-color: #fff !important;
}

.date-picker__week-picker-navigation {
    color: #000 !important;
}

.date-pickerr__day-names.week {
    color: #000 !important;
}

.date-picker__day-names.week {
    color: #000 !important;
}

.date-picker__week-picker.is-in-qalendar {
    color: #000 !important;
}

.calendar-month__day-name {
    color: #000 !important;
}

.calendar-month__day-date {
    color: #000 !important;
}

.calendar-month__weekday-more {
    color: #000 !important;
}

.calendar-month__event-time {
    color: #000 !important;
}

.calendar-month__event-title {
    color: #000 !important;
}
</style>