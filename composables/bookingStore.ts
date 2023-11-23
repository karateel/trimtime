export const useBookingStore = defineStore('bookingEvent', {
    state: () => ({
        isOpen: false
    }),
    actions: {
        toggleBooking() {
            this.isOpen = !this.isOpen
        }
    }
})