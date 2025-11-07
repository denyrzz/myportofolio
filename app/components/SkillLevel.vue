<template>
  <div class="skill-level-item">
    <div class="skill-info">
      <span class="skill-name">{{ skill.name }}</span>
      <span class="skill-percentage">{{ skill.level }}%</span>
    </div>
    
    <div class="level-bar">
      <div 
        class="level-progress"
        :style="{ width: skill.level + '%' }"
        :class="getColorClass(skill.level)"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Skill {
  name: string
  level: number
}

interface Props {
  skill: Skill
}

const props = defineProps<Props>()

const getColorClass = (level: number) => {
  if (level >= 80) return 'progress-expert'
  if (level >= 60) return 'progress-advanced'
  return 'progress-intermediate'
}
</script>

<style scoped>
.skill-level-item {
  margin-bottom: 0.5rem;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.5rem;
}

.skill-name {
  color: white;
  font-weight: 500;
  font-size: 0.95rem;
}

.skill-percentage {
  color: #9CA3AF;
  font-size: 0.875rem;
  font-weight: 500;
}

.level-bar {
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 10px;
  overflow: hidden;
  position: relative;
}

.level-progress {
  height: 100%;
  border-radius: 10px;
  transition: all 1s ease-out;
  animation: fillProgress 1.5s ease-out;
}

/* Color classes untuk progress bar */
.progress-expert {
  background: linear-gradient(90deg, #10B981, #059669);
  box-shadow: 0 0 10px rgba(16, 185, 129, 0.3);
}

.progress-advanced {
  background: linear-gradient(90deg, #3B82F6, #0891B2);
  box-shadow: 0 0 10px rgba(59, 130, 246, 0.3);
}

.progress-intermediate {
  background: linear-gradient(90deg, #EAB308, #EA580C);
  box-shadow: 0 0 10px rgba(234, 179, 8, 0.3);
}

@keyframes fillProgress {
  from {
    width: 0%;
  }
  to {
    width: v-bind('skill.level + "%"');
  }
}

/* Hover effects */
.skill-level-item:hover .level-progress {
  transform: scaleY(1.1);
  transition: transform 0.2s ease;
}

.skill-level-item:hover .skill-percentage {
  color: white;
  transition: color 0.3s ease;
}
</style>