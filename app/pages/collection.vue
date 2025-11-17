<template>
  <ClientOnly>
    <ScrollSmoother>
      <section class="images">
        <img data-speed="0.8" src="/images/collection/koleksi6.jpg" alt="">
        <img data-speed="0.9" src="/images/collection/koleksi2.jpg" alt="">
        <img data-speed="1" src="/images/collection/koleksi3.jpg" alt="">
        <img data-speed="1.1" src="/images/collection/koleksi4.jpg" alt="">
        <img data-speed="0.9" src="/images/collection/koleksi5.jpg" alt="">
        <img data-speed="1.2" src="/images/collection/koleksi1.jpg" alt="">
        <img data-speed="0.8" src="/images/collection/koleksi7.jpg" alt="">
        <img data-speed="1" src="/images/collection/koleksi8.jpg" alt="">
        <img data-speed="0.9" src="/images/collection/koleksi9.jpg" alt="">
        <img data-speed="0.8" src="/images/collection/koleksi10.jpg" alt="">
      </section>
    </ScrollSmoother>
  </ClientOnly>
</template>

<script setup lang="ts">
import ScrollSmoother from '~/components/ScrollSmoother.vue'
</script>

<style scoped>
.images {
  padding-top: 40vh;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  min-height: 180vh;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(20, 2%);
  grid-template-rows: repeat(38, 2.7%);
  justify-content: center;
  justify-items: center;
  align-items: center;
  z-index: 1;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.images img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.1);
}

.images img:nth-child(1) {
  grid-area: 1/1/6/10;
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

.images img:nth-child(9) {
  grid-area: 31/2/35/10; 
}

.images img:nth-child(10) {
  grid-area: 33/13/38/20;
}

@media (min-width: 768px) {
  .images {
    padding-top: 50vh;
    min-height: 160vh;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .images img {
    transform: scale(1.05);
  }
}

@media (min-width: 1024px) {
  .images {
    padding-top: 60vh;
    min-height: 150vh;
    padding-left: 0;
    padding-right: 0;
  }
  
  .images img {
    transform: scale(1);
  }
}

@media (max-width: 360px) {
  .images {
    transform: scale(1.15);
    padding-left: 0.25rem;
    padding-right: 0.25rem;
  }
}

@media (max-width: 768px) and (orientation: landscape) {
  .images {
    transform: scale(1.3); 
    min-height: 200vh;
  }
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
  background: #000;
}

html {
  -webkit-overflow-scrolling: touch;
}

* {
  box-sizing: border-box;
}

img {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
</style>