<!-- <template>
    <DatePicker firstDayOfWeek="monday" @updated="handleUpdate" />
</template>

<script setup lang="ts">
import { DatePicker } from 'qalendar';
import { useCalendarStore } from '@/store/calendarStore'
defineComponent({ DatePicker })

const calendarStore = useCalendarStore()


const handleUpdate = (payload: any) => {
    const { year, month, date } = payload;
    calendarStore.setSelectedDate(payload)
}
</script>

<style scoped></style> -->