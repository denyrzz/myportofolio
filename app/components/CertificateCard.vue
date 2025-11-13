<template>
    <div class="certificate-card">
        <div class="certificate-image">
            <img :src="certificate.image" :alt="certificate.title" />
        </div>

        <div class="certificate-content">
            <h3 class="certificate-title">{{ certificate.title }}</h3>
            <p class="certificate-issuer">{{ certificate.issuer }}</p>
            <p class="certificate-date">{{ certificate.date }}</p>

            <div class="skills-tags">
                <span
                    v-for="skill in certificate.skills"
                    :key="skill"
                    class="skill-tag"
                >
                    {{ skill }}
                </span>
            </div>

            <a
                :href="certificate.credentialUrl"
                class="credential-link"
                target="_blank"
                rel="noopener noreferrer"
            >
            {{ certificate.buttonType === "" ? "" : "View Credential" }}
            </a>
        </div>
    </div>
</template>

<script setup lang="ts">
interface Certificate {
    id: number;
    title: string;
    issuer: string;
    date: string;
    image: string;
    credentialUrl: string;
    skills: string[];
    buttonType?: string;
}

interface Props {
    certificate: Certificate;
}

const props = defineProps<Props>();
</script>

<style scoped>
.certificate-card {
    background: rgba(255, 255, 255, 0.05);
    backdrop-filter: blur(20px);
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-radius: 1rem;
    overflow: hidden;
    transition: all 0.3s ease;
}

.certificate-card:hover {
    transform: translateY(-5px);
    border-color: rgba(255, 255, 255, 0.2);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.certificate-image {
    position: relative;
    height: 200px;
    overflow: hidden;
}

.certificate-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
}

.certificate-card:hover .certificate-image img {
    transform: scale(1.05);
}

.certificate-overlay {
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

.certificate-card:hover .certificate-overlay {
    opacity: 1;
}

.view-button {
    background: #6d9886;
    color: white;
    border: none;
    padding: 0.75rem 1.5rem;
    border-radius: 0.5rem;
    font-weight: 600;
    cursor: pointer;
    transition: background 0.3s ease;
}

.view-button:hover {
    background: #5a826f;
}

.certificate-content {
    padding: 1.5rem;
}

.certificate-title {
    font-size: 1.25rem;
    font-weight: 700;
    color: white;
    margin-bottom: 0.5rem;
}

.certificate-issuer {
    color: #6d9886;
    font-weight: 600;
    margin-bottom: 0.25rem;
}

.certificate-date {
    color: #9ca3af;
    font-size: 0.875rem;
    margin-bottom: 1rem;
}

.skills-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
    margin-bottom: 1rem;
}

.skill-tag {
    background: rgba(109, 152, 134, 0.2);
    color: #6d9886;
    padding: 0.25rem 0.75rem;
    border-radius: 1rem;
    font-size: 0.75rem;
    font-weight: 500;
}

.credential-link {
    color: #60a5fa;
    text-decoration: none;
    font-size: 0.875rem;
    font-weight: 500;
    transition: color 0.3s ease;
}

.credential-link:hover {
    color: #3b82f6;
    text-decoration: underline;
}
</style>
