<template>
  <ClientOnly>
    <ScrollSmoother>
      <section class="images">
        <img data-speed="0.8" src="../assets/images/koleksi6.jpg" alt="">
        <img data-speed="0.9" src="../assets/images/koleksi2.jpg" alt="">
        <img data-speed="1" src="../assets/images/koleksi3.jpg" alt="">
        <img data-speed="1.1" src="../assets/images/koleksi4.jpg" alt="">
        <img data-speed="0.9" src="../assets/images/koleksi5.jpg" alt="">
        <img data-speed="1.2" src="../assets/images/koleksi1.jpg" alt="">
        <img data-speed="0.8" src="../assets/images/koleksi7.jpg" alt="">
        <img data-speed="1" src="../assets/images/koleksi8.jpg" alt="">
      </section>
    </ScrollSmoother>
  </ClientOnly>
</template>

<script setup lang="ts">
import ScrollSmoother from '~/components/ScrollSmoother.vue'
</script>

<style scoped>
.images {
  padding-top: 60vh;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 150vh;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(20, 2%);
  grid-template-rows: repeat(30, 3%);
  justify-content: center;
  justify-items: center;
  align-items: center;
  z-index: 1;
}

.images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.images img:nth-child(1) {
  grid-area: 1/1/6/8;
}

.images img:nth-child(2) {
  grid-area: 3/12/8/20;
}

.images img:nth-child(3) {
  grid-area: 9/5/13/15;
}

.images img:nth-child(4) {
  grid-area: 14/1/18/8;
}

.images img:nth-child(5) {
  grid-area: 16/12/20/19;
}

.images img:nth-child(6) {
  grid-area: 20/2/25/9;
}

.images img:nth-child(7) {
  grid-area: 22/11/24/20;
}

.images img:nth-child(8) {
  grid-area: 26/5/30/15;
}
</style>

<style>
body {
  margin: 0;
  color: white;
  overscroll-behavior: none;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
  font-family: 'Poppins', sans-serif;
}
</style>