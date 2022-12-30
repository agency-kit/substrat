import { createApp } from 'vue'

import App from './App.vue'
import 'uno.css'
import './styles/main.css'
import './styles/themes/stable.theme.css'
import routes from '~pages'
import {createRouter, createWebHistory} from 'vue-router'
const router = createRouter({
  history: createWebHistory(),
  routes,
})

const app = createApp(App)
app.use(router)
app.mount('#app')
