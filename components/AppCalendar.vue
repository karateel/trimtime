<template>
    <div>
        <VCalendarDatePicker v-model="date" transparent borderless :is-dark="isDark" title-position="left" trim-weeks
            :first-day-of-week="2" :color="selectedColor" />
    </div>
</template>
  
<script setup lang="ts">
import { DatePicker as VCalendarDatePicker } from 'v-calendar'
import 'v-calendar/dist/style.css'

const selectedColor = ref('primary')

const props = defineProps({
    modelValue: {
        type: Date,
        default: null
    }
})

const emit = defineEmits(['update:model-value', 'close'])

const colorMode = useColorMode()

const isDark = computed(() => colorMode.value === 'dark')

const date = computed({
    get: () => props.modelValue,
    set: (value) => {
        emit('update:model-value', value)
        emit('close')
    }
})
</script>