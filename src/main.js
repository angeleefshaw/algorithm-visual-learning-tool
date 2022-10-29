import { createApp } from 'vue'
import pinia from './store/store' // importing Pinia
import App from './App.vue'
import router from './router'
import './styles/app.css'
import './assets/main.css'

const app = createApp(App)

app.use(pinia);
app.use(router)
app.mount('#app')
