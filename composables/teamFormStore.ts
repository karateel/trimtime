export const useTeamFormStore = defineStore('teamModal', {
  state: () => ({
    isOpen: false as boolean
  }),
  actions: {
    toggleModal() {
      this.isOpen = !this.isOpen
    }
  }
})
