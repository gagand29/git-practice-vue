export default defineNuxtConfig({
  modules: ['vuetify-nuxt-module'],

  vuetify: {
    moduleOptions: {
      styles: { configFile: 'app/styles/settings.scss' }
    }
  }
})