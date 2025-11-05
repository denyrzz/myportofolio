<template>

  <NuxtLayout>
    <NuxtLoadingIndicator />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const isLoading = ref(true);

onMounted(() => {
  isLoading.value = false;
});

</script>
<style>
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.page-enter-from {
  opacity: 0;
  transform: translateX(-30px);
}

.page-leave-to {
  opacity: 0;
  transform: translateX(30px);
}

/* Smooth scrolling */
html {
  scroll-behavior: smooth;
}

/* Optional: Smooth loading */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>