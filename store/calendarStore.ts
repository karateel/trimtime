export const useCalendarStore = defineStore('calendar',{
  state: () => ({
    selectedDate: new Date(),
  }),
  getters: {
    getSelectedDate: (state) => ref(state.selectedDate),
  },
  actions: {
    setSelectedDate(date: Date) {
      this.selectedDate = date;
    },
  },
});