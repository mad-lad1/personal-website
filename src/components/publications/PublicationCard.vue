<template>
  <div class="publication-card">
    <h3 class="experience-title">{{ title }}</h3>
    <a
      :href="link"
      class="publication-link"
      target="_blank"
      rel="noopener noreferrer"
    >
      {{ description }}
      <v-icon name="co-external-link" scale="0.5" class="external-link-icon" />
    </a>
    <p class="publication-abstract" :class="{ expanded: isExpanded }">
      {{ abstract }}
    </p>
    <button class="abstract-toggle" @click="toggleAbstract">
      {{ isExpanded ? 'Show Less' : 'Read More' }}
    </button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  title: String,
  description: String,
  abstract: String,
  link: String,
})

const isExpanded = ref(false)

const toggleAbstract = () => {
  isExpanded.value = !isExpanded.value
}
</script>

<style scoped>
.publication-card {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 2rem;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: transform 0.3s ease;
  position: relative;
  overflow: hidden;
}

.publication-card::after {
  content: '';
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    45deg,
    transparent,
    rgba(100, 255, 218, 0.1),
    transparent
  );
  transform: rotate(45deg);
  transition: transform 0.5s ease;
}

.publication-card:hover {
  transform: translateY(-5px);
}

.publication-card:hover::after {
  transform: rotate(45deg) translate(50%, 50%);
}

.publication-link {
  color: var(--primary);
  text-decoration: none;
  font-weight: 500;
  font-size: 1.1rem;
  margin: 0.5rem 0;
  display: inline-block;
  transition: opacity 0.3s ease;
}

.publication-link:hover {
  opacity: 0.8;
}

.publication-abstract {
  margin-top: 1rem;
  font-size: 0.9rem;
  line-height: 1.6;
  opacity: 0.9;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  transition: all 0.3s ease;
}

.publication-abstract.expanded {
  -webkit-line-clamp: none; /* Change from 'unset' to 'none' */
  display: -webkit-box; /* Change from 'block' to '-webkit-box' */
}

.publication-abstract.expanded {
  -webkit-line-clamp: unset;
  display: block;
}

.abstract-toggle {
  background: none;
  border: 1px solid var(--primary);
  color: var(--primary);
  padding: 0.5rem 1rem;
  border-radius: 4px;
  margin-top: 1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 10;
}

.abstract-toggle:hover {
  background: rgba(100, 255, 218, 0.1);
}
.external-link-icon {
  color: var(--primary);
  opacity: 0.8;
}
</style>
