export const useCalendarStore = defineStore('calendar', {
  state: () => ({
    selectedDate: null as Date | null,
  }),

  actions: {
    setSelectedDate(date: Date) {
      this.selectedDate = date;
    },
  },
});