<template>
  <div class="splash-screen">
    <CountUp
      :from="0"
      :to="100"
      separator=","
      direction="up"
      :duration="2"
      :delay="0.5"
      :start-when="true"
      class-name="splash-countup"
      @start="handleStart"
      @end="handleEnd"
    />
  </div>
</template>

<script setup lang="ts">
import CountUp from './CountUp.vue';

const emit = defineEmits<{
  complete: [];
}>();

const handleStart = () => {
  console.log("Splash screen countup started");
};

const handleEnd = () => {
  console.log("Splash screen countup completed");

  setTimeout(() => {
    emit('complete');
  }, 500);
};
</script>

<style scoped>
.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

:deep(.splash-countup) {
  font-size: 5rem;
  font-weight: bold;
  color: white !important;
  text-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
}
</style>