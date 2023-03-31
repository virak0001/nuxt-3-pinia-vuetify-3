import { defineNuxtConfig } from 'nuxt/config'
export default defineNuxtConfig({
  modules: [
    '@pinia/nuxt',
    'nuxt-windicss'
  ],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore']
    ]
  }
})
