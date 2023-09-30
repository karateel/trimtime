export const useCalendarStore = defineStore('calendar', {
    state: () => ({
      isCalendarVisible: false,
    }),
    actions: {
      toggleCalendar() {
        this.isCalendarVisible = !this.isCalendarVisible;
      },
    },
  });