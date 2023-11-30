<template>
    <vue-cal class="vuecal--date-picker max-h-[275px]" xsmall hide-view-selector :time="false" :transitions="false"
        active-view="month" :disable-views="['years', 'year', 'week', 'day']"
        :selected-date="useCalendarStore().selectedDate" @cell-focus="onCellFocus">
    </vue-cal>
</template>

<script setup>
import VueCal from 'vue-cal'
const onCellFocus = (event) => {
    useCalendarStore().setSelectedDate(event);
};

</script>

<style></style>