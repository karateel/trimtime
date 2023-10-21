<template>
    <vue-cal xsmall :time="false" hide-view-selector active-view="month" :disable-views="['years', 'year', 'week', 'day']"
        @cell-focus="setSelectedDate" class="vuecal--blue-theme vuecal--rounded-theme"
        style="max-width: 270px;height: 290px">
    </vue-cal>
</template>
  
<script setup lang="ts">
import { useCalendarStore } from '~/store/calendarStore';
import VueCal from 'vue-cal';
const calendarStore = useCalendarStore();

const setSelectedDate = (newDate: Date) => {
    calendarStore.setSelectedDate(newDate);
};
</script>
  