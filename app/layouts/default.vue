<template>
  <div class="relative min-h-screen">

    <div class="fixed inset-0 -z-10 pointer-events-none">
      <Particles :particle-count="200" :particle-spread="10" :speed="0.1" :particle-colors="['#ffffff']"
        :move-particles-on-hover="false" :particle-hover-factor="1" :alpha-particles="false" :particle-base-size="100"
        :size-randomness="1" :camera-distance="20" :disable-rotation="false" class="w-full h-full" />
    </div>

    <main>
      <slot />
    </main>
    <Navigation class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50" />
  </div>
</template>

<script setup lang="ts">
import Particles from "~/components/Particles.vue";
import Navigation from "~/layouts/navigation.vue";
</script>
