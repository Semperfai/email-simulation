import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import components from '@/components/UI'
import vue3GoogleLogin from 'vue3-google-login'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'

const pinia = createPinia()
pinia.use(piniaPluginPersistedstate)
const app = createApp(App)

components.forEach((c) => {
  app.component(c.name, c.component)
})

app.use(pinia)
app.use(router)
app.use(vue3GoogleLogin, {
  clientId: '565535016155-qcvpltqcqm7l8fl6f5puo9gmmsaqqm0r.apps.googleusercontent.com'
})

app.mount('#app')
