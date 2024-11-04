import './assets/main.css'

import { createApp } from 'vue'
import { FaBookOpen } from 'oh-vue-icons/icons'
import { GiAchievement } from 'oh-vue-icons/icons'
import { CoExternalLink } from 'oh-vue-icons/icons'
import { addIcons, OhVueIcon } from 'oh-vue-icons'
import { inject } from '@vercel/analytics'
import { injectSpeedInsights } from '@vercel/speed-insights'

import VueTippy from 'vue-tippy'
import './assets/custom_tippy.css'

import InlineSvg from 'vue-inline-svg'
import App from './App.vue'
import router from './router'
const dev = process.env.NODE_ENV !== 'production'
addIcons(FaBookOpen, GiAchievement, CoExternalLink)
const app = createApp(App)
inject({
  mode: dev ? 'development' : 'production',
})
injectSpeedInsights()

app.component('v-icon', OhVueIcon)
app.component('inline-svg', InlineSvg)
app.use(router)
app.use(
  VueTippy,
  // optional
  {
    directive: 'tippy',
    component: 'tippy',
    theme: 'custom',
    componentSingleton: 'tippy-singleton',
    defaultProps: {
      placement: 'auto-end',
      allowHTML: true,
    },
  },
)

app.mount('#app')
