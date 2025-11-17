<template>
  <div 
    class="flip-photo-container"
    @mousedown="startDrag"
    @touchstart="startDrag"
    @mousemove="onDrag"
    @touchmove="onDrag"
    @mouseup="endDrag"
    @touchend="endDrag"
    @mouseleave="endDrag"
  >
    <div 
      class="flip-photo"
      :style="{
        transform: `rotateY(${rotationY}deg) rotateX(${rotationX}deg)`,
        transition: isDragging ? 'none' : 'transform 0.6s ease'
      }"
    >
      <!-- Front Side -->
      <div class="photo-side photo-front">
        <img 
          :src="frontImage" 
          :alt="frontAlt" 
          class="photo-image"
        />
        <div class="photo-overlay">
          <span class="flip-hint">Drag to flip</span>
        </div>
      </div>
      
      <!-- Back Side -->
      <div class="photo-side photo-back">
        <img 
          :src="backImage" 
          :alt="backAlt" 
          class="photo-image"
        />
        <div class="photo-overlay">
          <span class="flip-hint">Drag to flip back</span>
        </div>
      </div>
    </div>
    
    <!-- Drag Indicator -->
    <div 
      class="drag-indicator"
      :style="{ opacity: isDragging ? 0.7 : 0 }"
    >
      <div class="indicator-arrow">↔</div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  frontImage: string
  backImage: string
  frontAlt?: string
  backAlt?: string
  sensitivity?: number
  autoReturn?: boolean
  returnDelay?: number
}

const props = withDefaults(defineProps<Props>(), {
  frontAlt: 'Front photo',
  backAlt: 'Back photo',
  sensitivity: 2,
  autoReturn: true,
  returnDelay: 3000
})

// State untuk rotasi dan drag
const rotationY = ref(0)
const rotationX = ref(0)
const isDragging = ref(false)
const startX = ref(0)
const startY = ref(0)
const currentX = ref(0)
const currentY = ref(0)
let returnTimeout: NodeJS.Timeout | null = null

// Helper function untuk mendapatkan koordinat
const getClientCoordinates = (event: MouseEvent | TouchEvent): { clientX: number, clientY: number } | null => {
  if ('touches' in event) {
    // Untuk touch events
    if (event.touches && event.touches.length > 0) {
      return {
        clientX: event.touches[0].clientX,
        clientY: event.touches[0].clientY
      }
    }
    return null
  } else {
    // Untuk mouse events
    return {
      clientX: event.clientX,
      clientY: event.clientY
    }
  }
}

// Mulai drag
const startDrag = (event: MouseEvent | TouchEvent) => {
  const coords = getClientCoordinates(event)
  if (!coords) return
  
  isDragging.value = true
  
  // Clear return timeout jika ada
  if (returnTimeout) {
    clearTimeout(returnTimeout)
    returnTimeout = null
  }
  
  // Dapatkan posisi awal
  startX.value = coords.clientX
  startY.value = coords.clientY
  currentX.value = coords.clientX
  currentY.value = coords.clientY
}

// Saat drag
const onDrag = (event: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return
  
  const coords = getClientCoordinates(event)
  if (!coords) return
  
  currentX.value = coords.clientX
  currentY.value = coords.clientY
  
  // Hitung perbedaan posisi
  const deltaX = (currentX.value - startX.value) * props.sensitivity
  const deltaY = (currentY.value - startY.value) * props.sensitivity * 0.5
  
  // Terapkan rotasi dengan batasan
  rotationY.value = Math.max(-180, Math.min(180, deltaX))
  rotationX.value = Math.max(-30, Math.min(30, deltaY))
}

// Akhiri drag
const endDrag = () => {
  if (!isDragging.value) return
  
  isDragging.value = false
  
  // Tentukan apakah harus flip ke sisi lain
  const shouldFlip = Math.abs(rotationY.value) > 60
  
  if (shouldFlip) {
    // Flip ke sisi lain
    rotationY.value = rotationY.value > 0 ? 180 : -180
    rotationX.value = 0
  } else {
    // Kembali ke posisi semula
    resetRotation()
  }
  
  // Auto return setelah delay
  if (props.autoReturn && !shouldFlip) {
    returnTimeout = setTimeout(resetRotation, props.returnDelay)
  }
}

// Reset rotasi ke posisi awal
const resetRotation = () => {
  rotationY.value = 0
  rotationX.value = 0
}

// Reset ketika prop berubah
watch(() => props.frontImage, () => {
  resetRotation()
})

watch(() => props.backImage, () => {
  resetRotation()
})

// Cleanup
onUnmounted(() => {
  if (returnTimeout) {
    clearTimeout(returnTimeout)
  }
})
</script>

<style scoped>
.flip-photo-container {
  position: relative;
  width: 300px;
  height: 400px;
  perspective: 1000px;
  cursor: grab;
  user-select: none;
}

.flip-photo-container:active {
  cursor: grabbing;
}

.flip-photo {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.6s ease;
}

.photo-side {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.photo-front {
  background: transparent;
}

.photo-back {
  background: transparent;
  transform: rotateY(180deg);
}

.photo-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

.photo-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.4) 0%,
    transparent 20%,
    transparent 80%,
    rgba(0, 0, 0, 0.4) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.photo-side:hover .photo-overlay {
  opacity: 1;
}

.flip-hint {
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.5);
  padding: 0.5rem 1rem;
  background: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  backdrop-filter: blur(10px);
}

.drag-indicator {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: rgba(109, 152, 134, 0.9);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  font-weight: 600;
  backdrop-filter: blur(10px);
  transition: opacity 0.3s ease;
  pointer-events: none;
  z-index: 10;
}

.indicator-arrow {
  font-size: 1.2rem;
  animation: bounce 2s infinite;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
    transform: translateX(0);
  }
  40% {
    transform: translateX(-5px);
  }
  60% {
    transform: translateX(5px);
  }
}

/* Responsive */
@media (max-width: 768px) {
  .flip-photo-container {
    width: 250px;
    height: 350px;
  }
}

@media (max-width: 480px) {
  .flip-photo-container {
    width: 200px;
    height: 280px;
  }
  
  .flip-hint {
    font-size: 0.8rem;
    padding: 0.4rem 0.8rem;
  }
}
</style>