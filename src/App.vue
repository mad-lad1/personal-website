<template>
  <Transition name="splash">
    <SplashScreen v-if="showSplash" />
  </Transition>

  <Transition name="fade">
    <div class="main-content" v-if="!showSplash">
      <nav class="nav">
        <RouterLink to="/" class="logo">MA</RouterLink>
        <div class="nav-links">
          <RouterLink to="/#experience" class="nav-link">Experience</RouterLink>
          <RouterLink to="/#about" class="nav-link">Skills</RouterLink>
          <RouterLink to="/#publications" class="nav-link"
            >Publications</RouterLink
          >
          <RouterLink to="/#contact" class="nav-link">Contact</RouterLink>
        </div>
      </nav>
      <FloatingNav />
      <RouterView />
    </div>
  </Transition>
</template>

<script setup>
import FloatingNav from './components/FloatingNav.vue'
import SplashScreen from './views/SplashScreen.vue'
import { onMounted, ref } from 'vue'

const showSplash = ref(true)

onMounted(() => {
  setTimeout(() => {
    showSplash.value = false
  }, 8000)
})
</script>

<style scoped>
/* Splash transition */
.splash-enter-active,
.splash-leave-active {
  transition: opacity 0.5s ease;
}

.splash-enter-from,
.splash-leave-to {
  opacity: 0;
}

/* Main content transition */
.fade-enter-active {
  transition: all 0.6s ease-out;
}

.fade-leave-active {
  transition: all 0.6s ease-in;
}

.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.fade-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Navigation styles */
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1.5rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
  background: rgba(10, 16, 33, 0.8);
  backdrop-filter: blur(12px);
}

.logo {
  font-size: 2rem;
  font-weight: 700;
  color: var(--primary);
  text-decoration: none;
  position: relative;
}

.logo::after {
  content: '_';
  animation: blink 1s infinite;
}

@keyframes blink {
  50% {
    opacity: 0;
  }
}

.nav-links {
  display: flex;
  gap: 3rem;
}

.nav-link {
  color: var(--heading);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 0.5rem 0;
  position: relative;
  transition: color 0.3s ease;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--primary);
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link:hover::after {
  width: 100%;
}

@media (max-width: 768px) {
  .nav-links {
    display: none;
  }
}

.main-content {
  min-height: 100vh;
  width: 100%;
}
</style>
