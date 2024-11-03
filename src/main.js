import './assets/main.css'

import { createApp } from 'vue'
import InlineSvg from 'vue-inline-svg'
import App from './App.vue'
import router from './router'

const app = createApp(App)


app.component('inline-svg', InlineSvg)
app.use(router)

app.mount('#app')
