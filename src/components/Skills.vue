<template lang="">
    <div class="skills-grid">
        <Skillcard :title="'AI/ML'" 
        :skills="ai_ml_skills"
        :icons="[Pytorch,  Langchain]"
        />
        <Skillcard :title="'Frontend'" 
        :skills="frontend_skills"
        :icons="[VueIcon, ReactIcon, ElectronIcon]"
        />
        <Skillcard :title="'Backend'" 
        :skills="backend_skills"
        :icons="[NodeJs]"
        />
    </div>
</template>
<script setup>
import Skillcard from './Skillcard.vue';
import Pytorch from './icons/Pytorch.vue';
import VueIcon from './icons/VueIcon.vue';
import ReactIcon from './icons/ReactIcon.vue';
import Langchain from './icons/Langchain.vue';
import ElectronIcon from './icons/ElectronIcon.vue';
import NodeJs from './icons/NodeJs.vue';
const ai_ml_skills = [
    'LLM Fine-tuning & Deployment',
    'RAG Systems',
    'Knowledge Distillation',
    'Computer Vision',
    'Transformers'
]

const frontend_skills = [
    'React Native', 
    'Vue.js', 
    'Qt Framework',
    'Electron'
]

const backend_skills = [
    'Node.js',
    'Express.js',
    'PostgreSQL', 
    'Serverless', 
    'Docker', 
    'GCP',
]



</script>
<style scoped>
.skills-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);  /* Changed from auto-fit to 2 columns */
    gap: 2rem;
    margin-bottom: 4rem;
}
</style>
