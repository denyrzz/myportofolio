<template>
  <div 
    class="skill-card"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="skill-icon">
      {{ skill.icon }}
    </div>
    
    <div class="skill-content">
      <h4 class="skill-name">{{ skill.name }}</h4>
      
      <div class="skill-level-bar">
        <div 
          class="skill-level-fill"
          :class="getProgressColor(skill.level)"
          :style="{ width: isHovered ? skill.level + '%' : '0%' }"
        ></div>
      </div>
      
      <div class="skill-percentage" :class="{ 'show-percentage': isHovered }">
        {{ skill.level }}%
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Skill {
  name: string
  level: number
  icon: string
  color: string
}

interface Props {
  skill: Skill
}

const props = defineProps<Props>()
const isHovered = ref(false)

const getProgressColor = (level: number) => {
  if (level >= 80) return 'progress-fill-expert'
  if (level >= 60) return 'progress-fill-advanced'
  return 'progress-fill-intermediate'
}
</script>

<style scoped>
.skill-card {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 1rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.5s ease;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.skill-card:hover {
  transform: scale(1.05);
  border-color: rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
}

.skill-icon {
  font-size: 1.5rem;
  padding: 0.5rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.1);
}

.skill-content {
  flex: 1;
}

.skill-name {
  color: white;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.skill-level-bar {
  width: 100%;
  height: 4px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  overflow: hidden;
}

.skill-level-fill {
  height: 100%;
  border-radius: 4px;
  transition: width 1s cubic-bezier(0.34, 1.56, 0.64, 1);
}

.progress-fill-expert {
  background: linear-gradient(90deg, #10B981, #059669);
}

.progress-fill-advanced {
  background: linear-gradient(90deg, #3B82F6, #0891B2);
}

.progress-fill-intermediate {
  background: linear-gradient(90deg, #EAB308, #EA580C);
}

.skill-percentage {
  color: #9CA3AF;
  font-size: 0.75rem;
  margin-top: 0.25rem;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.show-percentage {
  opacity: 1;
}
</style>