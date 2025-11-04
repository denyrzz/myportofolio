// plugins/gsap.client.ts
import { gsap } from 'gsap'
import { ScrollSmoother } from 'gsap/ScrollSmoother'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
  }

  return {
    provide: {
      gsap,
      ScrollSmoother,
      ScrollTrigger
    }
  }
})