<template lang="">
    <div class="skills-grid">
        <Skillcard :title="'AI/ML'" 
        :skills="ai_ml_skills"
        :icons="[Pytorch, LlamaIndex, Langchain]"
        />
        <Skillcard :title="'Frontend'" 
        :skills="frontend_skills"
        :icons="[VueIcon, ReactIcon]"
        />
    </div>
</template>
<script setup>
import Skillcard from './Skillcard.vue';
import Pytorch from './icons/Pytorch.vue';
import VueIcon from './icons/VueIcon.vue';
import LlamaIndex from './icons/LlamaIndex.vue';
import ReactIcon from './icons/ReactIcon.vue';
import Langchain from './icons/Langchain.vue';
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



</script>
<style scoped>
.skills-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-bottom: 4rem;
}
</style>
