import { defineStore } from 'pinia'
export const useUserStore = defineStore('filterStore', () => {
  const users = ref([])
  return { users }
})