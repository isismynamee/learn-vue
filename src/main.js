import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import './assets/main.css'
import route from './route'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.use(route)
// createApp(App).mount('#app')
app.mount('#app')