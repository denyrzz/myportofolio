<!-- layouts/default.vue -->
<template>
  <div class="relative min-h-screen">
    <!-- Splash Screen - hanya tampil saat pertama kali -->
    <SplashScreen 
      v-if="showSplash && !hasSeenSplash" 
      @complete="handleSplashComplete" 
    />
    
    <!-- Konten Utama -->
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

// Cek apakah sudah pernah melihat splash screen di session ini
const checkSplashStatus = () => {
  if (process.client) {
    return sessionStorage.getItem('splashShown') === 'true';
  }
  return false;
};

const handleSplashComplete = () => {
  showSplash.value = false;
  // Tandai sudah melihat splash screen
  if (process.client) {
    sessionStorage.setItem('splashShown', 'true');
  }
};

onMounted(() => {
  // Cek status saat component mounted
  hasSeenSplash.value = checkSplashStatus();
  
  // Jika sudah pernah melihat, langsung sembunyikan splash
  if (hasSeenSplash.value) {
    showSplash.value = false;
  }
});
</script>

<style>
.main-content {
  opacity: 1;
}

/* Hanya apply animation jika splash screen ditampilkan */
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