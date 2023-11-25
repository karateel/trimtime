<template>
    <vue-cal class="vuecal--date-picker max-h-[275px]" xsmall hide-view-selector :time="false" :transitions="false"
        active-view="month" :disable-views="['years', 'year', 'week', 'day']">
    </vue-cal>
</template>

<script setup lang="ts">
import VueCal from 'vue-cal'

</script>

<style></style>