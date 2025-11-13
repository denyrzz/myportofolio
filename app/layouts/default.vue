<template>
  <div class="relative min-h-screen">
    <SplashScreen 
      v-if="showSplash && !hasSeenSplash" 
      @complete="handleSplashComplete" 
    />

    <div class="main-content">
      <div class="fixed inset-0 -z-10 pointer-events-none">
        <Particles 
          :particle-count="200" 
          :particle-spread="10" 
          :speed="0.1" 
          :particle-colors="['#ffffff']"
          :move-particles-on-hover="false" 
          :particle-hover-factor="1" 
          :alpha-particles="false" 
          :particle-base-size="100"
          :size-randomness="1" 
          :camera-distance="20" 
          :disable-rotation="false" 
          class="w-full h-full" 
        />
      </div>

      <main>
        <slot />
      </main>
      
      <Navigation class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import Particles from "~/components/Particles.vue";
import Navigation from "~/layouts/navigation.vue";
import SplashScreen from "~/components/SplashScreen.vue";

const showSplash = ref(true);
const hasSeenSplash = ref(false);

const checkSplashStatus = () => {
  if (process.client) {
    return sessionStorage.getItem('splashShown') === 'true';
  }
  return false;
};

const handleSplashComplete = () => {
  showSplash.value = false;
  if (process.client) {
    sessionStorage.setItem('splashShown', 'true');
  }
};

onMounted(() => {
  hasSeenSplash.value = checkSplashStatus();
  if (hasSeenSplash.value) {
    showSplash.value = false;
  }
});
</script>

<style>
.main-content {
  opacity: 1;
}

.splash-screen-shown .main-content {
  opacity: 0;
  animation: fadeIn 0.5s ease forwards;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}
</style>