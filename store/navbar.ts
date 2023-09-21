export const useMenuStore = defineStore('menu', {
    state: () => ({
      flag: false,
    }),
    actions: {
      toggleMenu() {
        this.flag = !this.flag;
      },
    },
  });