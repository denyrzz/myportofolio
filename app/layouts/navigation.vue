<template>
<nav class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-xs sm:max-w-lg px-4">
    <ClientOnly>
      <div class="hidden sm:flex items-center gap-0 bg-black/30 backdrop-blur-md rounded-xl p-1 border border-white/10">
        <a v-for="(item, index) in navItems" :key="index" :href="item.href"
          class="px-4 py-2 mx-1 rounded-lg transition-all duration-300 cursor-pointer text-sm font-medium" :class="{
            'text-white bg-white/20': isActive(item.href),
            'text-gray-400 hover:text-white hover:bg-white/10': !isActive(item.href)
          }">
          {{ item.label }}
        </a>
      </div>

      <div class="sm:hidden">
        <button 
          @click="toggleMobileMenu"
          class="w-full bg-black/30 backdrop-blur-md rounded-xl p-3 border border-white/10 flex items-center justify-center gap-2 text-white hover:bg-white/10 transition-all"
        >
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <span class="font-medium">Menu</span>
        </button>
        <div 
          v-if="isMobileMenuOpen"
          class="absolute top-full left-0 right-0 mt-2 bg-black/30 backdrop-blur-md rounded-xl border border-white/10 p-2"
        >
          <a 
            v-for="(item, index) in navItems" 
            :key="index" 
            :href="item.href"
            @click="closeMobileMenu"
            class="block px-4 py-2 rounded-lg text-sm font-medium mb-1 last:mb-0 transition-all" 
            :class="{
              'text-white bg-white/20': isActive(item.href),
              'text-gray-400 hover:text-white hover:bg-white/10': !isActive(item.href)
            }"
          >
            {{ item.label }}
          </a>
        </div>
      </div>
    </ClientOnly>

    <div 
      v-if="isMobileMenuOpen"
      class="fixed inset-0 z-40 sm:hidden"
      @click="closeMobileMenu"
    ></div>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();
const isMobileMenuOpen = ref(false);

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Collection", href: "/collection" },
  { label: "Contact", href: "/contact" },
];

const currentPageLabel = computed(() => {
  const currentItem = navItems.find(item => isActive(item.href));
  return currentItem?.label || 'Menu';
});

const isActive = (href: string) => {
  const currentPath = route.path;
  if (href === '/' && currentPath === '/') return true;
  if (href !== '/' && currentPath.startsWith(href)) return true;
  return false;
};

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
};

watch(() => route.path, () => {
  closeMobileMenu();
});

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeMobileMenu();
  }
};

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
});
</script>

<style scoped>
.rotate-180 {
  transform: rotate(180deg);
}

.fixed.inset-0 {
  z-index: 40;
}

nav {
  z-index: 50;
}

.absolute {
  animation: slideDown 0.2s ease-out;
}

@keyframes slideDown {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>