import { defineStore as createStore } from 'pinia';

export const useViteStore = createStore('viteStore', {
  state: () => ({
    count: 0,
    msg: 'HelloSekx',
    name: 'remilax',
    data: ['kelvin', 'sola', 'Adewale'],
  }),
  getters: {
    getDataService: (state) => {
      return state.data;
    },
  },
  actions: {
    increaseCount() {
      return this.$state.count++;
    },
  },
});
