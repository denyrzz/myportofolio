<template>
    <div class="min-h-screen flex items-center justify-center">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4">
            <div class="text-center lg:text-left">
                <div class="flex items-center justify-center lg:justify-start gap-3 mb-2 relative">
                    <div class="relative w-32 sm:w-40 md:w-48 lg:w-56 h-16 sm:h-20 md:h-24 lg:h-28">
                        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
                            <RotatingText :texts="['Web', 'App']"
                                mainClassName="px-3 sm:px-4 bg-white text-black overflow-hidden py-1 sm:py-2 justify-center rounded-lg font-bold w-full h-full"
                                staggerFrom="last" :initial="{ y: '100%' }" :animate="{ y: 0 }" :exit="{ y: '-100%' }"
                                :staggerDuration="0.025" splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                                :transition="{ type: 'spring', damping: 30, stiffness: 400 }"
                                :rotationInterval="2000" />
                        </h1>
                    </div>
                    <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white">
                        Developer
                    </h1>
                </div>

                <p class="text-base sm:text-lg md:text-xl text-white mt-6">
                    Let's build something great together.
                </p>
            </div>

            <ElectricBorder :color="'#ffffff'" :speed="1" :chaos="0.5" :thickness="2" :style="{ borderRadius: '16px' }">
                <div class="flex flex-col p-6 max-w-sm">
                    <div class="mb-6">
                        <div
                            class="inline-flex items-center px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 mb-4">
                            <span class="text-xs font-semibold text-blue-400 tracking-wide">FEATURED</span>
                        </div>
                        <p class="text-gray-300 text-sm leading-relaxed">
                            Life teaches us lessons through the <br>
                            unexpected.
                        </p>
                    </div>

                    <div class="flex justify-center mb-6">
                        <img src="../assets/images/foto2.jpg" alt="Your Name - Developer"
                            class="w-40 h-40 rounded-lg object-cover " />
                    </div>

                    <div class="text-center mb-6">
                        <div class="text-sm text-gray-400 mb-2">Live v1.0</div>
                        <div class="text-xs text-gray-500">Latest update: Today</div>
                    </div>

                    <div class="flex flex-col gap-3">
                        <a href="https://github.com/denyrzz" target="_blank" rel="noopener noreferrer" class="block">
                            <button
                                class="w-full bg-white text-black py-3 px-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm">
                                View GitHub
                            </button>
                        </a>
                        <a href="https://instagram.com/deny_rzz" target="_blank" rel="noopener noreferrer"
                            class="block">
                            <button
                                class="w-full bg-transparent border border-gray-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-white/5 transition-colors text-sm">
                                Instagram
                            </button>
                        </a>
                    </div>
                </div>
            </ElectricBorder>
        </div>
    </div>
</template>

<script setup lang="ts">
import RotatingText from "~/components/RotatingText.vue";
import ElectricBorder from "~/components/ElectricBorder.vue";
</script>