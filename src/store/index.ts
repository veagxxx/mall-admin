import { defineStore } from 'pinia'
export const useStore = defineStore('mainStore', {
  state: () => {
    return {
      hasCollapse: false,
    }
  },
  actions: {
    updateCollapse() {
      this.hasCollapse = !this.hasCollapse
    }
  }
})

 