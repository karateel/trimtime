<template>
    <UContainer class="w-full max-w-full px-0 lg:px-0">
        <vue-cal :time-from="8 * 60" :time-to="19 * 60 + 30" :time-step="30"
            :disable-views="['years', 'year', 'week', 'month']" />
        <CalAppBookingEvent />
    </UContainer>
</template>

<script setup lang="ts">
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'

</script>

<style scoped></style> 