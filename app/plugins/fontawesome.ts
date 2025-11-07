// plugins/fontawesome.ts
import { defineNuxtPlugin } from '#app'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Import icons
import { 
  faVuejs,
  faReact,
  faJs,
  faHtml5,
  faCss3,
  faGithub,
  faFigma,
  faNodeJs,
  faPython,
  faDocker
} from '@fortawesome/free-brands-svg-icons'

// Add icons to library
library.add(
  faVuejs, faReact, faJs, faHtml5, faCss3,
  faGithub, faFigma, faNodeJs, faPython, faDocker
)

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.component('FontAwesomeIcon', FontAwesomeIcon)
})