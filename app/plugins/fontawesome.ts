// plugins/fontawesome.ts
import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import icons yang dibutuhkan
import {
  faCode,
  faPalette,
  faMobile,
  faBrush,
  faShoppingCart,
  faRocket
} from '@fortawesome/free-solid-svg-icons'

import {
  faGithub,
  faTwitter,
  faLinkedin,
  faInstagram,
  faFacebook,
  faVuejs,
  faReact,
  faJs,
  faHtml5,
  faCss3
} from '@fortawesome/free-brands-svg-icons'

// Tambahkan icons ke library
library.add(
  faCode, faPalette, faMobile, faBrush, faShoppingCart, faRocket,
  faGithub, faTwitter, faLinkedin, faInstagram, faFacebook,
  faVuejs, faReact, faJs, faHtml5, faCss3
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})