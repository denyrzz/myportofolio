<template>
    <div class="project-card">
        <div class="project-image">
            <img :src="project.image" :alt="project.title" />
            <div class="project-overlay">
                <div class="project-actions">
                    <a
                        v-if="project.githubUrl"
                        :href="project.githubUrl"
                        :class="[
                            'action-button',
                            project.buttonType || 'github',
                        ]"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        {{
                            project.buttonType === "figma" ? "Figma" : "GitHub"
                        }}
                    </a>
                </div>
            </div>
        </div>

        <div class="project-content">
            <div class="project-header">
                <h3 class="project-title">{{ project.title }}</h3>
                <span class="project-category">{{ project.category }}</span>
            </div>

            <p class="project-description">{{ project.description }}</p>

            <div class="technologies">
                <span
                    v-for="tech in project.technologies"
                    :key="tech"
                    class="tech-tag"
                >
                    {{ tech }}
                </span>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Project {
    id: number;
    title: string;
    description: string;
    image: string;
    githubUrl: string;
    technologies: string[];
    category: string;
    buttonType?: string;
}

interface Props {
    project: Project;
}

const props = defineProps<Props>();
</script>

<style scoped>
.project-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    overflow: hidden;
    transition: all 0.3s ease;
}

.project-card:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.project-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.project-card:hover .project-image img {
    transform: scale(1.05);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.7);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.project-actions {
    display: flex;
    gap: 1rem;
}

.action-button {
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
}

.live-demo {
    background: #6d9886;
    color: white;
}

.live-demo:hover {
    background: #5a826f;
}

.github {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.figma {
    background: rgba(255, 255, 255, 0.1);
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

.figma:hover {
    background: rgba(255, 255, 255, 0.2);
}

.github:hover {
    background: rgba(255, 255, 255, 0.2);
}

.project-content {
    padding: 1.5rem;
}

.project-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
}

.project-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
    margin: 0;
}

.project-category {
    background: rgba(109, 152, 134, 0.2);
    color: #6d9886;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 600;
    white-space: nowrap;
}

.project-description {
    color: #d1d5db;
    line-height: 1.6;
    margin-bottom: 1rem;
}

.technologies {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
}

.tech-tag {
    background: rgba(96, 165, 250, 0.2);
    color: #60a5fa;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;
}
</style>
