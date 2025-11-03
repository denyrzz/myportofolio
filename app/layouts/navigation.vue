<template>
  <GooeyNav
    :items="navItems"
    :animation-time="1000"
    :particle-count="15"
    :particle-distances="[90, 10]"
    :particle-r="100"
    :time-variance="300"
    :colors="[1, 2, 3, 1, 2, 3, 1, 4]"
    :initial-active-index="0"
  />
</template>

<script setup lang="ts">
  import GooeyNav from "~/components/GooeyNav.vue";

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ];
</script>

<style>
  :root {
    --color-1: #ff6b6b;
    --color-2: #4ecdc4;
    --color-3: #45b7d1;
    --color-4: #f9ca24;
  }

  /* Style untuk tab active */
  .gooey-nav-item.active {
    color: white !important;
  }

  .gooey-nav-item.active .gooey-nav-label {
    color: white !important;
  }

  /* Atau jika komponen menggunakan class berbeda */
  [data-active="true"] {
    color: white !important;
  }
</style>