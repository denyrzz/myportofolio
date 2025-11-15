<template>
  <div class="min-h-screen flex items-center justify-center py-16 px-4">
    <div class="backdrop-blur-lg bg-white/5 rounded-3xl border border-white/20 p-8 md:p-12 max-w-4xl">
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12 items-center">
        <div class="flex justify-center lg:justify-start">
          <div class="relative">
            <img src="/images/collection/artjog.jpg" alt="Deni Ramadhan"
              class="w-64 h-64 md:w-80 md:h-80 rounded-2xl object-cover border-4 border-white/50 shadow-2xl" />
            <div class="absolute -inset-4 border-2 border-white/30 rounded-2xl -z-10"></div>
          </div>
        </div>

        <div class="lg:col-span-2">
          <div class="space-y-6">
            <h2 class="text-3xl md:text-4xl font-bold text-white">
              Hello! I'm <span class="text-[#6D9886]">Deni Ramadhan</span>
            </h2>

            <p class="text-lg md:text-sm text-gray-300 leading-relaxed mb-2">
              A Software Engineering student at Padang State Polytechnic. I enjoy building digital products and
              exploring how technology solves real problems. My main interests include mobile application development,
              machine learning, and modern software engineering practices. I also enjoy casual photography, especially
              capturing random and spontaneous moments.
            </p>

            <div class="flex gap-6 pt-1 pb-2">
              <div class="text-center">
                <div class="text-2xl font-bold text-[#6D9886]">5+</div>
                <div class="text-sm text-gray-400">Years Learning</div>
              </div>
              <div class="text-center">
                <div class="text-2xl font-bold text-[#6D9886]">7+</div>
                <div class="text-sm text-gray-400">Projects Done</div>
              </div>
            </div>
          </div>
          <div class="lg:col-span-1">
            <InfiniteScroll :items="techStack" :item-width="60" :item-height="60" :speed="0.8" direction="left"
              :pause-on-hover="true" />
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