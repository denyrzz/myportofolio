<template>
    <div class="min-h-screen flex items-center justify-center py-8 pt-20 sm:pt-8">
        <div class="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 px-4">
            <div class="text-center lg:text-left">
                <div class="flex items-center justify-center lg:justify-start gap-3 mb-2 relative">
                    <div class="relative w-32 sm:w-40 md:w-48 lg:w-56 h-16 sm:h-20 md:h-24 lg:h-28 flex items-center">
                        <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold w-full">
                            <ClientOnly>
                                <RotatingText :texts="['Web', 'App']"
                                    mainClassName="px-3 sm:px-4 bg-white text-black overflow-hidden py-1 sm:py-2 justify-center rounded-lg font-bold w-full h-full flex items-center"
                                    staggerFrom="last" :initial="{ y: '100%' }" :animate="{ y: 0 }"
                                    :exit="{ y: '-100%' }" :staggerDuration="0.025"
                                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1"
                                    :transition="{ type: 'spring', damping: 30, stiffness: 400 }"
                                    :rotationInterval="2000" />
                                <template #fallback>
                                    <div
                                        class="px-3 sm:px-4 bg-white text-black rounded-lg font-bold w-full h-full flex items-center justify-center">
                                        Web
                                    </div>
                                </template>
                            </ClientOnly>
                        </h1>
                    </div>
                    <h1
                        class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white flex items-center h-16 sm:h-20 md:h-24 lg:h-28">
                        Developer
                    </h1>
                </div>

                <DecryptedText text="Let's build something great together" :speed="80" :max-iterations="10"
                    :sequential="false" reveal-direction="start" :use-original-chars-only="false" animate-on="hover"
                    class="text-base sm:text-lg md:text-xl text-white mt-6" encrypted-class-name="text-white-500" />
            </div>

            <div class="flex flex-col items-center gap-6">
                <FlipPhoto front-image="/images/collection/cyber2.png" back-image="/images/collection/koleksi5.jpg"
                    front-alt="Professional Photo" back-alt="Creative Work" :sensitivity="1.5" :auto-return="true"
                    :return-delay="3000" />

                <div class="flex gap-3">
                    <a href="https://github.com/denyrzz" target="_blank" rel="noopener noreferrer">
                        <button
                            class="bg-white text-black py-3 px-6 rounded-lg font-semibold hover:bg-gray-100 transition-colors text-sm flex items-center justify-center gap-2 min-w-[120px]">
                            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            GitHub
                        </button>
                    </a>
                    <a href="https://drive.google.com/file/d/1fmkjgtyJjlg5uP59P73LGE_TjujWpT3Y/view?usp=sharing"
                        target="_blank" rel="noopener noreferrer">
                        <button
                            class="bg-transparent border border-gray-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-white/5 transition-colors text-sm flex items-center justify-center gap-2 min-w-[120px]">
                            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                            </svg>
                            CV
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import RotatingText from "~/components/RotatingText.vue";
import DecryptedText from "~/components/DecryptedText.vue";
import FlipPhoto from "~/components/FlipPhoto.vue";

const isMounted = ref(false);

onMounted(() => {
    isMounted.value = true;
});
</script>

<style scoped>
.min-h-screen {
    background: transparent;
}

@media (max-width: 768px) {
    .min-h-screen {
        padding-top: 5rem;
    }
}

@media (max-width: 1024px) {
    .flex-col {
        gap: 3rem;
    }
}

@media (max-width: 768px) {
    .flex-col {
        gap: 2rem;
    }

    .flex.gap-3 {
        gap: 0.75rem;
    }
}

@media (max-width: 480px) {
    .flex.gap-3 {
        flex-direction: column;
        gap: 0.5rem;
    }
    
    .min-h-screen {
        padding-top: 6rem;
    }
}
</style>