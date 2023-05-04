import { defineStore } from 'pinia'
import { useApi } from '~/composable/userApi'
export const useUserStore = defineStore('filterStore', () => {
  const users = ref([])

  async function fetch() {
    const response = await useApi('posts').get()
    users.value = response._data
  }
  return { fetch, users }
})