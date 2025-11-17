<template>
  <div class="min-h-screen flex items-center justify-center py-16 px-4 pt-20 sm:pt-16">
    <div class="backdrop-blur-lg bg-white/5 rounded-3xl border border-white/20 p-6 md:p-12 max-w-4xl w-full mx-4">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-12 items-center">
        <div class="flex justify-center lg:justify-start order-1 lg:order-2">
          <div class="relative">
            <img src="/images/collection/cyber2.png" alt="Deni Ramadhan"
              class="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-2xl object-cover border-4 border-white/50 shadow-2xl" />
            <div class="absolute -inset-3 sm:-inset-4 border-2 border-white/30 rounded-2xl -z-10"></div>
          </div>
        </div>
        <div class="lg:col-span-2 order-1 lg:order-2">
          <div class="space-y-4 md:space-y-6">
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-bold text-white text-center lg:text-left">
              Hello! I'm <span class="text-[#6D9886]">Deni Ramadhan</span>
            </h2>

            <p class="text-sm sm:text-base md:text-lg text-gray-300 leading-relaxed text-center lg:text-left">
              A Software Engineering student at Padang State Polytechnic. I enjoy building digital products and
              exploring how technology solves real problems. My main interests include mobile application development,
              machine learning, and modern software engineering practices. I also enjoy casual photography, especially
              capturing random and spontaneous moments.
            </p>

            <div class="flex justify-center lg:justify-start gap-4 sm:gap-6 pt-2">
              <div class="text-center">
                <div class="text-xl sm:text-2xl font-bold text-[#6D9886]">5+</div>
                <div class="text-xs sm:text-sm text-gray-400">Years Learning</div>
              </div>
              <div class="text-center">
                <div class="text-xl sm:text-2xl font-bold text-[#6D9886]">7+</div>
                <div class="text-xs sm:text-sm text-gray-400">Projects Done</div>
              </div>
            </div>
          </div>
          
          <div class="mt-6 md:mt-8">
            <InfiniteScroll 
              :items="techStack" 
              :item-width="40" 
              :item-height="40" 
              :speed="0.6" 
              direction="left"
              :pause-on-hover="true" 
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'About - Deni Ramadhan'
})

import InfiniteScroll from '~/components/InfiniteScroll.vue'

import {
  faVuejs,
  faJs,
  faHtml5,
  faCss3,
  faGithub,
  faFigma,
  faNodeJs,
  faPython,
  faDocker
} from '@fortawesome/free-brands-svg-icons'

const techStack = [
  {
    icon: faVuejs,
    color: "text-green-400",
    alt: "Vue.js"
  },
  {
    icon: faJs,
    color: "text-yellow-400",
    alt: "JavaScript"
  },
  {
    icon: faHtml5,
    color: "text-orange-500",
    alt: "HTML5"
  },
  {
    icon: faCss3,
    color: "text-blue-500",
    alt: "CSS3"
  },
  {
    icon: faGithub,
    color: "text-gray-300",
    alt: "GitHub"
  },
  {
    icon: faFigma,
    color: "text-purple-400",
    alt: "Figma"
  },
  {
    icon: faNodeJs,
    color: "text-green-500",
    alt: "Node.js"
  },
  {
    icon: faPython,
    color: "text-blue-300",
    alt: "Python"
  },
  {
    icon: faDocker,
    color: "text-blue-400",
    alt: "Docker"
  }
]
</script>

<style scoped>
@media (max-width: 768px) {
  .min-h-screen {
    padding-top: 6rem; 
  }
}

@media (max-width: 480px) {
  .min-h-screen {
    padding-top: 5rem;
  }
}
</style>