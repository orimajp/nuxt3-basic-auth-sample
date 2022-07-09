import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  runtimeConfig: {
    BASIC_AUTH_ENABLED: '', // mapped boolean
    BASIC_AUTH_USER: '',
    BASIC_AUTH_PASSWORD: '',
  }
})
