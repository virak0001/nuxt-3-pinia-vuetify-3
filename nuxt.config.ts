import { defineNuxtConfig } from 'nuxt/config'
import { runtimeConfig } from './config'
export default defineNuxtConfig({
  css: ['vuetify/lib/styles/main.sass'],
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@pinia/nuxt',
    'nuxt-windicss',
    'nuxt-icon'
  ],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore']
    ]
  },
  vite: {
    define: {
      'process.env.DEBUG': false,
    },
  },
  runtimeConfig,
})
