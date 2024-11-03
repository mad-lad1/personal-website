<template lang="">
  <div class="skills-grid">
    <Skillcard
      :title="'AI/ML'"
      :skills="ai_ml_skills"
      :icons="[Pytorch, Langchain, HuggingFace]"
    />
    <Skillcard
      :title="'Frontend'"
      :skills="frontend_skills"
      :icons="[VueIcon, ReactIcon, ElectronIcon, Qt]"
    />
    <Skillcard
      :title="'Backend'"
      :skills="backend_skills"
      :icons="[NodeJs, PostgreSql, Docker, GCP]"
    />
    <Skillcard
      :title="'Tools & Collaboration'"
      :skills="tools_skills"
      :icons="[GitHub, Notion, JIRA, Jest]"
    />
  </div>
</template>
<script setup>
import Skillcard from './Skillcard.vue'
import Pytorch from '../icons/Pytorch.vue'
import VueIcon from '../icons/VueIcon.vue'
import ReactIcon from '../icons/ReactIcon.vue'
import Langchain from '../icons/Langchain.vue'
import ElectronIcon from '../icons/ElectronIcon.vue'
import NodeJs from '../icons/NodeJs.vue'
import PostgreSql from '../icons/PostgreSql.vue'
import Docker from '../icons/Docker.vue'
import Qt from '../icons/Qt.vue'
import HuggingFace from '../icons/HuggingFace.vue'
import GCP from '../icons/GCP.vue'
import GitHub from '../icons/GitHub.vue'
import Jest from '../icons/Jest.vue'
import Confluence from '../icons/Confluence.vue'
import JIRA from '../icons/JIRA.vue'
import Notion from '../icons/Notion.vue'

const ai_ml_skills = [
  'LLM Fine-tuning & Deployment',
  'RAG Systems',
  'Knowledge Distillation',
  'Computer Vision',
  'Transformers',
]

const frontend_skills = ['React Native', 'Vue.js', 'Qt Framework', 'Electron']

const backend_skills = [
  'Node.js',
  'Express.js',
  'PostgreSQL',
  'Serverless',
  'Docker',
  'GCP',
]

const tools_skills = [
  'Git/GitHub',
  'API Documentation',
  'Jest Testing',
  'Confluence & Notion',
  'Technical Documentation',
]
</script>
<style scoped>
.skills-grid {
  display: grid;
  grid-template-columns: repeat(
    2,
    1fr
  ); /* Changed from auto-fit to 2 columns */
  gap: 2rem;
  margin-bottom: 4rem;
}
</style>
