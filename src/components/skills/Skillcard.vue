<template>
  <div class="skill-card">
    <div class="skill-icons-wrapper">
      <div class="skill-icons">
        <div
          v-for="(icon, index) in icons"
          :key="index"
          class="skill-icon"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <component :is="icon" class="icon" />
          <div class="glow-effect"></div>
        </div>
      </div>
    </div>

    <h3 class="skill-title">{{ title }}</h3>

    <ul class="skill-list">
      <li
        class="skill-item"
        v-for="(skill, index) in skills"
        :key="index"
        :style="{ animationDelay: `${index * 0.1}s` }"
      >
        <span class="skill-bullet">▹</span>
        {{ skill }}
      </li>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  title: String,
  icons: {
    type: Array,
    required: true,
  },
  skills: Array,
})
</script>

<style scoped>
.skill-card {
  background: rgba(17, 34, 64, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  padding: 2.5rem;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  min-height: 320px; /* Add consistent height */
  display: flex;
  flex-direction: column;
}

.skill-card:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: var(--primary);
  box-shadow: 0 10px 30px -15px rgba(100, 255, 218, 0.2);
}

.skill-icons-wrapper {
  margin-bottom: 1.5rem;
}

.skill-icons {
  display: flex;
  align-items: center;
  gap: 1.5rem; /* Increased gap */
  flex-wrap: wrap;
  margin-bottom: 1rem;
}



.skill-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem; /* Increased size */
  height: 2.5rem;
  opacity: 0;
  transform: translateY(10px);
  animation: fadeInUp 0.5s ease forwards;
}

.icon {
  width: 100%;
  height: 100%;
  color: var(--primary);
  transition: transform 0.3s ease;
  position: relative;
  z-index: 1;
}

.skill-icon :deep(svg) {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.skill-card:hover .skill-icon .icon {
  transform: scale(1.1) rotate(5deg);
}

.glow-effect {
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--primary);
  filter: blur(20px);
  opacity: 0;
  transition: opacity 0.3s ease;
  z-index: 0;
}

.skill-card:hover .glow-effect {
  opacity: 0.15;
}

.skill-title {
  color: var(--primary);
  font-size: 1.6rem; /* Increased size */
  font-weight: 700; /* Bolder */
  margin-bottom: 1.5rem;
  letter-spacing: -0.5px; /* Added letter spacing */
  background: linear-gradient(90deg, var(--primary), #fff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.skill-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.skill-item {
  margin-bottom: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  color: #ccd6f6;
  font-size: 1rem;
  opacity: 0;
  transform: translateX(-10px);
  animation: slideIn 0.5s ease forwards;
  line-height: 1.4;
}

.skill-bullet {
  color: var(--primary);
  font-size: 1.2rem;
}

@keyframes slideIn {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.skill-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  border-radius: 16px;
  background: linear-gradient(
    45deg,
    transparent 0%,
    rgba(100, 255, 218, 0.03) 100%
  );
  opacity: 0;
  transition: opacity 0.3s ease;
}

.skill-card:hover::before {
  opacity: 1;
}

@media (max-width: 768px) {
  .skill-card {
    padding: 2rem;
    min-height: 280px; /* Adjusted for mobile */
  }

  .skill-icon {
    width: 2rem;
    height: 2rem;
  }

  .skill-title {
    font-size: 1.4rem;
  }
}
</style>
