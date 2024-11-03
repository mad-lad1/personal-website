<template>
  <section class="contact-section">
    <h2 class="section-title">Get In Touch</h2>
    <div class="contact-content">
      <p class="contact-text">
        I'm always looking for new opportunities and collaborations. My inbox is
        always open.
      </p>
      <div class="email-container">
        <a
          href="mailto:aldilatimostafa@gmail.com"
          class="email-link"
          @mouseover="isHovered = true"
          @mouseleave="isHovered = false"
        >
          <span class="email-text">aldilatimostafa@gmail.com</span>
          <span class="email-icon" :class="{ 'icon-hover': isHovered }">
            <v-icon name="co-external-link" />
          </span>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const isHovered = ref(false)
</script>

<style scoped>
.contact-section {
  min-height: 60vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 15%;
  margin-bottom: 4rem;
}

.section-title {
  color: var(--heading);
  font-size: 2rem;
  margin-bottom: 2rem;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background: var(--primary);
}

.contact-content {
  max-width: 600px;
  text-align: center;
}

.contact-text {
  font-size: 1.5rem;
  line-height: 1.8;
  margin-bottom: 2rem;
  color: var(--text);
}

.email-container {
  display: inline-block;
  padding: 1rem 2rem;
  background: var(--card-bg);
  border-radius: 8px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  transition:
    transform 0.3s ease,
    border-color 0.3s ease;
}

.email-container:hover {
  transform: translateY(-5px);
  border-color: var(--primary);
}

.email-link {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  color: var(--primary);
  text-decoration: none;
  font-family: 'Ubuntu Mono', monospace;
  font-size: 1.2rem;
}

.email-icon {
  display: inline-flex;
  transition: transform 0.3s ease;
}

.icon-hover {
  transform: rotate(45deg);
}

@media (max-width: 768px) {
  .contact-section {
    padding: 0 5%;
  }

  .contact-text {
    font-size: 1rem;
  }

  .email-link {
    font-size: 1rem;
  }
}
</style>
