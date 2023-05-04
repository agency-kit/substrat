import { createApp } from 'vue'

import App from './App.vue'
import '@agency-kit/substrat/dist/substrat.css'
import './stable.theme.css'
import 'uno.css'
import routes from '~pages'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
