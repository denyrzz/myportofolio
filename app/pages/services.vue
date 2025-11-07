<template>
  <div class="skills-page">
    <div class="container">
      <!-- Header -->
      <div class="header">
        <h1 class="title">
          My <span class="accent">Skills</span>
        </h1>
        <p class="subtitle">
          Technologies and tools I use to bring ideas to life
        </p>
      </div>

      <!-- Main Skills Grid -->
      <div class="skills-grid">
        <!-- Frontend Skills -->
        <div class="skill-category">
          <div class="category-header">
            <div class="icon-wrapper frontend-icon">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 class="category-title">Frontend Development</h3>
          </div>
          <div class="skills-container">
            <SkillCard 
              v-for="skill in frontendSkills" 
              :key="skill.name"
              :skill="skill"
            />
          </div>
        </div>

        <!-- Backend Skills -->
        <div class="skill-category">
          <div class="category-header">
            <div class="icon-wrapper backend-icon">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
              </svg>
            </div>
            <h3 class="category-title">Backend Development</h3>
          </div>
          <div class="skills-container">
            <SkillCard 
              v-for="skill in backendSkills" 
              :key="skill.name"
              :skill="skill"
            />
          </div>
        </div>

        <!-- Tools & Others -->
        <div class="skill-category full-width">
          <div class="category-header">
            <div class="icon-wrapper tools-icon">
              <svg class="icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 class="category-title">Tools & Others</h3>
          </div>
          <div class="skills-container">
            <SkillCard 
              v-for="skill in toolsSkills" 
              :key="skill.name"
              :skill="skill"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'Skills - Deni Ramadhan'
})

// Skill Data
const frontendSkills = [
  { name: 'Vue.js', level: 85, icon: '⚡' },
  { name: 'React', level: 78, icon: '⚛️' },
  { name: 'JavaScript', level: 90, icon: '🟨' },
  { name: 'TypeScript', level: 75, icon: '🔷' },
  { name: 'HTML5', level: 95, icon: '🌐' },
  { name: 'CSS3', level: 88, icon: '🎨' }
]

const backendSkills = [
  { name: 'Node.js', level: 80, icon: '🟢' },
  { name: 'Python', level: 70, icon: '🐍' },
  { name: 'Express.js', level: 75, icon: '🚂' },
  { name: 'MongoDB', level: 65, icon: '🍃' },
  { name: 'MySQL', level: 70, icon: '🐬' },
  { name: 'REST API', level: 85, icon: '🔗' }
]

const toolsSkills = [
  { name: 'Git/GitHub', level: 88, icon: '📚' },
  { name: 'Docker', level: 60, icon: '🐳' },
  { name: 'Figma', level: 75, icon: '🎯' },
  { name: 'VS Code', level: 92, icon: '💻' },
  { name: 'Postman', level: 80, icon: '📬' },
  { name: 'Linux', level: 70, icon: '🐧' }
]

const featuredSkills = [
  { name: 'Vue.js & Nuxt.js', level: 85 },
  { name: 'JavaScript/TypeScript', level: 90 },
  { name: 'React Ecosystem', level: 78 },
  { name: 'Node.js & Backend', level: 80 },
  { name: 'UI/UX Design', level: 75 },
  { name: 'Database Management', level: 70 }
]
</script>

<style scoped>
.skills-page {
  min-height: 100vh;
  background: transparent;
  padding: 4rem 1rem;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.header {
  text-align: center;
  margin-bottom: 4rem;
}

.title {
  font-size: 3rem;
  font-weight: 700;
  color: white;
  margin-bottom: 1.5rem;
}

.accent {
  color: #6D9886;
}

.subtitle {
  font-size: 1.25rem;
  color: #D1D5DB;
  max-width: 500px;
  margin: 0 auto;
}

.skills-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
}

@media (min-width: 1024px) {
  .skills-grid {
    grid-template-columns: 1fr 1fr;
  }
  
  .full-width {
    grid-column: 1 / -1;
  }
}

.skill-category {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 1.5rem;
}

.category-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
}

.icon-wrapper {
  padding: 0.75rem;
  border-radius: 1rem;
}

.frontend-icon {
  background: rgba(59, 130, 246, 0.2);
}

.backend-icon {
  background: rgba(34, 197, 94, 0.2);
}

.tools-icon {
  background: rgba(168, 85, 247, 0.2);
}

.icon {
  width: 1.5rem;
  height: 1.5rem;
}

.frontend-icon .icon {
  color: #60A5FA;
}

.backend-icon .icon {
  color: #4ADE80;
}

.tools-icon .icon {
  color: #A855F7;
}

.category-title {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.skills-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
}

@media (min-width: 768px) {
  .skills-container {
    grid-template-columns: 1fr 1fr 1fr;
  }
}

.skill-overview {
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 1.5rem;
  padding: 2rem;
  margin-bottom: 4rem;
}

.overview-title {
  font-size: 1.875rem;
  font-weight: 700;
  color: white;
  text-align: center;
  margin-bottom: 2rem;
}

.skills-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}
</style>