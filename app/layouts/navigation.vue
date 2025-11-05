<!-- components/NavigationBar.vue -->
<template>
  <nav class="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
    <ClientOnly>
      <div class="flex items-center gap-0 bg-black/30 backdrop-blur-md rounded-xl p-1 border border-white/10">
        <a v-for="(item, index) in navItems" :key="index" :href="item.href"
          class="px-4 py-2 mx-1 rounded-lg transition-all duration-300 cursor-pointer text-sm font-medium" :class="{
            'text-white bg-white/20': isActive(item.href),
            'text-gray-400 hover:text-white hover:bg-white/10': !isActive(item.href)
          }">
          {{ item.label }}
        </a>
      </div>
    </ClientOnly>
  </nav>
</template>

<script setup lang="ts">
const route = useRoute();

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Project", href: "/project" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const isActive = (href: string) => {
  // Hanya jalankan di client side
  if (process.client) {
    const currentPath = route.path;
    if (href === '/' && currentPath === '/') return true;
    if (href !== '/' && currentPath === href) return true;
  }
  return false;
};
</script>