<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="text-center">
            <div class="flex items-center justify-center gap-4 mb-8">
                <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                    <RotatingText :texts="['Web', 'App']"
                        mainClassName="px-3 sm:px-4 bg-green-300 text-black overflow-hidden py-1 sm:py-2 justify-center rounded-lg font-bold"
                        staggerFrom="last" :initial="{ y: '100%' }" :animate="{ y: 0 }" :exit="{ y: '-100%' }"
                        :staggerDuration="0.025" splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                        :transition="{ type: 'spring', damping: 30, stiffness: 400 }" :rotationInterval="2000" />
                </h1>
                <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                    Developer
                </h1>
            </div>

            <p class="text-base sm:text-lg md:text-xl text-white mt-6">
                Let's build something great together.
            </p>
        </div>
    </div>
</template>

<script setup lang="ts">
import RotatingText from "~/components/RotatingText.vue";
</script>