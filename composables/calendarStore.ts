export const useCalendarStore = defineStore('calendar',{
  state: () => ({
    dateSelected: new Date(),
  }),
  getters: {
    getSelectedDate: (state) => ref(state.dateSelected),
  },
  actions: {
    setSelectedDate(date: Date) {
      this.dateSelected = date;
    },
  },
});