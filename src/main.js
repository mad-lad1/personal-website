import './assets/main.css'

import { createApp } from 'vue'
import { FaBookOpen } from 'oh-vue-icons/icons'
import { GiAchievement } from 'oh-vue-icons/icons'
import { CoExternalLink } from 'oh-vue-icons/icons'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import Tooltip from '@programic/vue3-tooltip'
import '@programic/vue3-tooltip/dist/index.css'

import InlineSvg from 'vue-inline-svg'
import App from './App.vue'
import router from './router'

const tooltipOptions = {
  type: 'light',
}

addIcons(FaBookOpen, GiAchievement, CoExternalLink)
const app = createApp(App)

app.component('v-icon', OhVueIcon)
app.component('inline-svg', InlineSvg)
app.use(router)
app.use(Tooltip, tooltipOptions)

app.mount('#app')
