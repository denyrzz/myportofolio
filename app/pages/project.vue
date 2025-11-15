<template>
    <div class="certificates-page">
        <div class="container">
            <div class="header">
                <h1 class="title">
                    My <span class="accent">Certificates</span> &
                    <span class="accent">Projects</span>
                </h1>
            </div>

            <section class="section">
                <h2 class="section-title">Certificates</h2>
                <div class="certificates-grid">
                    <CertificateCard
                        v-for="certificate in certificates"
                        :key="certificate.id"
                        :certificate="certificate"
                    />
                </div>
            </section>

            <section class="section">
                <h2 class="section-title">Projects</h2>
                <div class="projects-grid">
                    <ProjectCard
                        v-for="project in projects"
                        :key="project.id"
                        :project="project"
                    />
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
definePageMeta({
    title: "Certificates & Projects - Deni Ramadhan",
});

const certificates = [
    {
        id: 1,
        title: "Certificate Member",
        issuer: "Cybertech PNP",
        date: "2025",
        image: "/images/certificates/cybertech.jpg",
        credentialUrl: "#",
        skills: ["Public Speaking", "Networking"],
        buttonType: "",
    },
    {
        id: 2,
        title: "Cloud Developing",
        issuer: "AWS Academy",
        date: "2023",
        image: "/images/certificates/aws.jpg",
        credentialUrl:
            "https://www.credly.com/badges/6005d752-ceef-4224-b82b-323af4b273e1",
        skills: ["S3", "EC2", "RDS"],
    },
    {
        id: 3,
        title: "Management Fundamentals",
        issuer: "Oracle Academy",
        date: "2024",
        image: "/images/certificates/oracle.jpg",
        credentialUrl: "",
        skills: ["Primavera"],
        buttonType: "",
    },
];

const projects = [
    {
        id: 1,
        title: "Project Base Learning KBK",
        description:
            "Management Project for KBK that Provides features for managing RPS and UAS",
        image: "/images/projects/simakti.jpg",
        liveUrl: "#",
        githubUrl: "https://github.com/simakti/pblkbk",
        technologies: ["Laravel", "Chart JS", "MySQL"],
        category: "Full Stack",
    },
    {
        id: 2,
        title: "Project Sistem Tugas Akhir",
        description:
            "Providing scheduling and guidance features for Intership, Seminar Proposal, and Final Project",
        image: "/images/projects/sistemta.png",
        githubUrl: "https://github.com/denyrzz/sistemta.git",
        technologies: ["Laravel", "MySQL"],
        category: "Full Stack",
    },
    {
        id: 3,
        title: "Project Management Library",
        description:
            "This project provides library management system with features for borrowing books from various categories using QR scans, returning books, handling fines, and allowing admins to manage books, categories, and users",
        image: "/images/projects/library.png",
        githubUrl: "https://github.com/denyrzz/AdminLibrary.git",
        technologies: ["Vue JS", "Node JS", "MySQL", "Docker"],
        category: "Frontend",
    },
    {
        id: 4,
        title: "Prototype EcoPlast",
        description:
            "A prototype app that enables users to buy and sell recyclable materials easily - encouraging waste recycling and sustainable trade",
        image: "/images/projects/ecoplast.png",
        githubUrl:
            "https://www.figma.com/design/cD4k22fg5HlMPnKEW5UkNB/Prototype-EcoPlast?node-id=0-1&t=qZmG9j0xproBj7OX-1",
        technologies: ["Figma"],
        category: "UI",
        buttonType: "figma",
    },
    {
        id: 5,
        title: "Portfolio Website",
        description:
            "A modern portfolio website that highlights my work, technical skills, and passion for building web and mobile applications",
        image: "/images/projects/porto.png",
        githubUrl: "https://github.com/denyrzz/myportofolio.git",
        technologies: ["Nuxt JS", "GSAP", "Vue Bits"],
        category: "Frontend",
    },
    {
        id: 6,
        title: "Rose Leaf Diseases Detection",
        description:
            "This project detecting diseases in rose leaves using Convolutional Neural Networks. The system is designed to identify and classify leaf diseases from image, helping to support early diagnosis and improve plant health management",
        image: "/images/projects/rose.png",
        githubUrl: "https://github.com/denyrzz/FE-RoseLeafDetection.git",
        technologies: ["React", "Flutter", "Express JS", "Tensorflow"],
        category: "Mobile",
    },
];
</script>

<style scoped>
.certificates-page {
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
    margin-top: 1.5rem;
}

.accent {
    color: #6d9886;
}

.subtitle {
    font-size: 1.25rem;
    color: #d1d5db;
    max-width: 500px;
    margin: 0 auto;
}

.section {
    margin-bottom: 4rem;
}

.section-title {
    font-size: 2.5rem;
    font-weight: 700;
    color: white;
    text-align: center;
    margin-bottom: 2rem;
}

.certificates-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

.projects-grid {
    display: grid;
    grid-template-columns: 1fr;
    gap: 2rem;
}

@media (min-width: 768px) {
    .certificates-grid {
        grid-template-columns: 1fr 1fr;
    }

    .projects-grid {
        grid-template-columns: 1fr 1fr;
    }
}

@media (min-width: 1024px) {
    .certificates-grid {
        grid-template-columns: 1fr 1fr 1fr;
    }

    .projects-grid {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
</style>
