<template>
    <vue-cal small :time="true" hide-view-selector active-view="day" :disable-views="['years', 'year', 'month']"
        :selected-date="selectedDate">
    </vue-cal>
</template>
  
<script setup lang="ts">
import { useCalendarStore } from '~/store/calendarStore';
import VueCal from 'vue-cal';

const calendarStore = useCalendarStore();
const selectedDate = toRef(calendarStore, 'selectedDate');
</script>
