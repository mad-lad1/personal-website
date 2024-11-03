<template>
  <div class="experience-card" ref="card">
    <div class="experience-card-header">
      <h3 class="experience-title">{{ experience.title }}</h3>
      <p class="experience-company">{{ experience.company }}</p>
      <span class="experience-date">{{ experience.date }}</span>
    </div>

    <div class="mode-toggle" @click="toggleMode" ref="toggleSwitch">
      <div class="toggle-track" :class="{ 'story-mode': isStoryMode }">
        <div class="toggle-indicator">
          <v-icon name="fa-book-open"  v-if="isStoryMode" animation="pulse" fill="#000"/>
          <v-icon name="gi-achievement" v-else animation="pulse" fill="#fff" scale="1.5"/>
          
        </div>
      </div>
    </div>

    <div class="experience-content" ref="content">
      <transition name="fade" mode="out-in">
        <div v-if="isStoryMode" class="story-content" key="story">
            <div class="story-paragraphs">
          <p
            v-for="(paragraph, index) in storyParagraphs"
            :key="index"
            class="story-paragraph"
            :class="{ 'first-paragraph': index === 0 }"
            :style="{ '--delay': `${index * 0.1}s` }"
          >
            {{ paragraph }}
            </p>
          </div>
        </div>
        <div v-else key="achievements" class="achievements-content">
          <div
            class="experience-description"
            v-html="experience.description"
          ></div>
          <div class="tech-stack">
            <span
              v-for="tech in experience.technologies"
              :key="tech"
              class="tech-badge"
            >
              {{ tech }}
            </span>
          </div>
          <ul class="achievement-list">
            <li
              v-for="achievement in experience.achievements"
              :key="achievement"
              class="achievement-item"
            >
              {{ achievement }}
            </li>
          </ul>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { FaBookOpen } from 'oh-vue-icons/icons'
import { GiAchievement } from 'oh-vue-icons/icons'
import gsap from 'gsap'

const props = defineProps({
  experience: {
    type: Object,
    required: true,
  },
})

const card = ref(null)
const content = ref(null)
const toggleSwitch = ref(null)
const isStoryMode = ref(true)

const storyParagraphs = computed(() => {
  return props.experience.story.split('\n\n').filter(p => p.trim())
})

const toggleMode = () => {
  isStoryMode.value = !isStoryMode.value

  // Update to use refs instead of class selectors
  gsap.to(toggleSwitch.value.querySelector('.toggle-indicator'), {
    scale: 0.9,
    duration: 0.2,
    yoyo: true,
    repeat: 1,
    ease: 'power2.inOut',
  })

  gsap.from(content.value, {
    opacity: 0,
    duration: 0.3,
    ease: 'power2.out',
  })
}



const onMouseEnter = () => {
  gsap.to(card.value, {
    y: -10,
    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.2)',
    duration: 0.3,
    ease: 'power2.out',
  })
}

const onMouseLeave = () => {
  gsap.to(card.value, {
    y: 0,
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    duration: 0.3,
    ease: 'power2.in',
  })
}


</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Crimson+Text:ital,wght@0,400;0,600;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600&display=swap');


.experience-card {
  background: var(--card-bg);
  border-radius: 16px;
  padding: 2rem;
  margin-bottom: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.experience-card-header {
  margin-bottom: 1.5rem;
}

.experience-title {
  color: var(--primary);
  font-size: 2rem;
  margin-bottom: 0.5rem;
  font-weight: 600;
}

.experience-company {
  color: #fff;
  font-size: 1.2rem;
  margin-bottom: 0.25rem;
  font-weight: 500;
}

.experience-date {
  color: var(--accent);
  font-size: 0.9rem;
  opacity: 0.8;
}

.mode-toggle {
  position: absolute;
  top: 2rem;
  right: 2rem;
  cursor: pointer;
  z-index: 2;
}

.toggle-track {
  background: var(--secondary);
  padding: 0.5rem 1rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: background 0.3s ease;
}

.toggle-track.story-mode {
  background: var(--primary);
}

.toggle-indicator {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background: var(--accent);
  color: var(--background);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  transition: transform 0.6s ease;
}

.toggle-label {
  color: #a239ca;
  font-size: 1rem;
  font-weight: 500;
}

.experience-content {
  margin-top: 1rem;
}

.story-content,
.achievements-content {
  font-family: 'Crimson Text';
  font-size: 1.3rem;
  line-height: 1.8;
  color: #fff;
}

.first-paragraph::first-letter {
  initial-letter: 2;
  -webkit-initial-letter: 2;
  color: var(--primary);
  font-family: 'Playfair Display', serif !important;
  font-size: 3.5em;
  float: left;
  line-height: 0.8;
  padding-right: 0.1em;
  margin-right: 0.1em;
  font-weight: bold;
}

.story-content,
.achievements-content {
  padding-top: 1rem;
}

.story-paragraph {
  margin-bottom: 1rem;
  line-height: 1.8;
  animation: fadeInUp 0.5s forwards;
  animation-delay: var(--delay);
  opacity: 0;
  transform: translateY(20px);
}

.experience-description {
  margin-bottom: 1.5rem;
  line-height: 1.8;
}

.tech-stack {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;
}

.tech-badge {
  background: var(--secondary);
  color: var(--accent);
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 500;
  transition: background 0.3s ease;
}

.tech-badge:hover {
  background: var(--primary);
}

.achievement-list {
  list-style: none;
  margin: 0;
  padding: 0;
}

.achievement-item {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.6;
}

.achievement-item::before {
  content: '➤';
  position: absolute;
  left: 0;
  color: var(--primary);
  font-size: 1rem;
}



.arrow-icon {
  transition: transform 0.3s ease;
}

.arrow-icon.rotated {
  transform: rotate(180deg);
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-enter-active,
.fade-leave-active {
  transition:
    opacity 0.3s ease,
    transform 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: translateY(10px);
}

@media (max-width: 768px) {
  .experience-card {
    padding: 1.5rem;
  }

  .experience-title {
    font-size: 1.5rem;
  }

  .mode-toggle {
    top: 1rem;
    right: 1rem;
  }
}
</style>
