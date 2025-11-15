<template>
  <div id="wrapper">
    <h1 class="text">Collectio Images</h1>
    <h1 aria-hidden="true" class="text outline-text">Collectio Images</h1>
    <h1 aria-hidden="true" class="text filter-text">Collectio Images</h1>
    <section id="content">
      <slot />
    </section>
  </div>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, nextTick } from 'vue'

const { $gsap, $ScrollSmoother, $ScrollTrigger } = useNuxtApp()

let smoother: any = null
let skewSetter: any = null
let clamp: any = null

onMounted(() => {
  if (typeof window !== 'undefined') {
    nextTick(() => {
      try {
        // Tunggu sedikit lebih lama untuk memastikan DOM siap
        setTimeout(() => {
          const wrapper = document.getElementById('wrapper')
          const content = document.getElementById('content')
          
          if (!wrapper || !content) {
            console.warn('ScrollSmoother: Wrapper or content element not found')
            return
          }

          // Pastikan ada images sebelum setup skew effect
          const images = document.querySelectorAll('img')
          if (images.length > 0) {
            skewSetter = $gsap.quickTo("img", "skewY")
            clamp = $gsap.utils.clamp(-20, 20)
          }

          smoother = $ScrollSmoother.create({
            wrapper: "#wrapper",
            content: "#content", 
            smooth: 2,
            speed: 3,
            effects: true,
            onUpdate: (self: any) => {
              // Only apply skew if we have images and skewSetter is initialized
              if (skewSetter && images.length > 0) {
                skewSetter(clamp(self.getVelocity() / -50))
              }
            },
            onStop: () => {
              if (skewSetter) {
                skewSetter(0)
              }
            }
          })

          console.log('ScrollSmoother initialized successfully with', images.length, 'images')
        }, 200) // Increased timeout for better DOM readiness
      } catch (error) {
        console.error('ScrollSmoother initialization error:', error)
      }
    })
  }
})

onUnmounted(() => {
  if (smoother) {
    smoother.kill()
  }
  if (skewSetter) {
    skewSetter(0) // Reset skew on unmount
  }
})
</script>

<style scoped>
#wrapper {
  overflow: hidden;
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

#content {
  overflow: visible;
  width: 100%;
}

.text {
  position: fixed;
  top: 50vh;
  font-family: 'Arial', sans-serif;
  font-weight: 900;
  font-size: 5vw;
  text-align: center;
  width: 100%;
  transform: translateY(-100%);
  z-index: -2;
  color: white;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: white;
  margin: 0;
  pointer-events: none;
}

.outline-text {
  color: transparent;
  -webkit-text-stroke-width: 1.5px;
  -webkit-text-stroke-color: white;
  z-index: 2; 
}

.filter-text {
  mix-blend-mode: screen;
  color: #804691;
  z-index: 2; 
}

/* Optional: Add some responsive improvements */
@media (max-width: 768px) {
  .text {
    font-size: 8vw;
    -webkit-text-stroke-width: 1px;
  }
  
  .outline-text {
    -webkit-text-stroke-width: 1px;
  }
}
</style>