<template>
    <div class="infinite-scroll-horizontal">
        <div class="scroll-container" ref="containerRef">
            <div 
                v-for="(item, index) in displayItems" 
                :key="index"
                class="scroll-item"
                :style="{
                    width: itemWidth + 'px',
                    height: itemHeight + 'px'
                }"
            >
                <!-- Gambar -->
                <img 
                    v-if="item.image" 
                    :src="item.image" 
                    :alt="item.alt || 'Icon'" 
                    class="item-image"
                />
                
                <!-- Font Awesome Icon -->
                <FontAwesomeIcon 
                    v-else-if="item.icon" 
                    :icon="item.icon" 
                    :class="['item-icon', item.color || 'text-white']"
                />
                
                <!-- Teks (opsional) -->
                <span v-if="item.content && showContent" class="item-text">
                    {{ item.content }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue'

interface InfiniteScrollItem {
    content?: string
    image?: string
    icon?: any
    color?: string
    alt?: string
}

interface Props {
    items?: InfiniteScrollItem[]
    itemWidth?: number
    itemHeight?: number
    speed?: number
    direction?: 'left' | 'right'
    pauseOnHover?: boolean
    showContent?: boolean
}

const props = withDefaults(defineProps<Props>(), {
    items: () => [],
    itemWidth: 50,
    itemHeight: 50,
    speed: 1,
    direction: 'left',
    pauseOnHover: true,
    showContent: false
})

const containerRef = ref<HTMLDivElement>()
let animationFrame: number | null = null
let isPaused = false

// Duplicate items untuk infinite effect
const displayItems = computed(() => {
    return [...props.items, ...props.items, ...props.items]
})

const scroll = () => {
    if (!containerRef.value || isPaused) return
    
    const direction = props.direction === 'left' ? -1 : 1
    containerRef.value.scrollLeft += props.speed * direction
    
    // Reset scroll position ketika mencapai akhir
    if (containerRef.value.scrollLeft >= containerRef.value.scrollWidth / 3) {
        containerRef.value.scrollLeft = 0
    } else if (containerRef.value.scrollLeft <= 0) {
        containerRef.value.scrollLeft = containerRef.value.scrollWidth / 3
    }
    
    animationFrame = requestAnimationFrame(scroll)
}

const startScroll = () => {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame)
    }
    scroll()
}

const stopScroll = () => {
    if (animationFrame) {
        cancelAnimationFrame(animationFrame)
        animationFrame = null
    }
}

onMounted(() => {
    if (containerRef.value && props.items.length > 0) {
        startScroll()
        
        if (props.pauseOnHover) {
            containerRef.value.addEventListener('mouseenter', () => {
                isPaused = true
            })
            
            containerRef.value.addEventListener('mouseleave', () => {
                isPaused = false
                startScroll()
            })
        }
    }
})

onUnmounted(() => {
    stopScroll()
    
    if (containerRef.value && props.pauseOnHover) {
        containerRef.value.removeEventListener('mouseenter', () => {})
        containerRef.value.removeEventListener('mouseleave', () => {})
    }
})
</script>

<style scoped>
.infinite-scroll-horizontal {
    width: 100%;
    overflow: hidden;
    position: relative;
}

.scroll-container {
    display: flex;
    gap: 1rem;
    padding: 0.5rem;
    width: max-content;
    animation: scroll-horizontal 20s linear infinite;
}

.scroll-item {
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(30, 30, 30, 0.3);
    border: 1px solid rgba(75, 85, 99, 0.5);
    border-radius: 0.75rem;
    padding: 0.5rem;
    backdrop-filter: blur(8px);
    transition: all 0.3s ease;
}

.scroll-item:hover {
    background: rgba(50, 50, 50, 0.5);
    transform: scale(1.05);
}

.item-image {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.5rem;
}

.item-icon {
    font-size: 1.25rem;
}

.item-text {
    font-size: 0.75rem;
    font-weight: 500;
    margin-left: 0.25rem;
    color: white;
}

/* Animation untuk auto scroll */
@keyframes scroll-horizontal {
    0% {
        transform: translateX(0);
    }
    100% {
        transform: translateX(calc(-33.333%));
    }
}

/* Untuk browser yang mendukung */
.scroll-container {
    animation: scroll-horizontal 20s linear infinite;
}

/* Pause animation on hover */
.infinite-scroll-horizontal:hover .scroll-container {
    animation-play-state: paused;
}
</style>