<template>
  <main>
    <Hero />
    <ExperienceView />
    <AboutView />
    <PublicationsView />
    <section id="contact">
      <ContactView />
    </section>
  </main>
</template>

<script setup>
import Hero from '@/components/Hero.vue'
import AboutView from './AboutView.vue'
import ExperienceView from '@/views/ExperienceView.vue'
import PublicationsView from '@/views/PublicationsView.vue'
import ContactView from '@/views/ContactView.vue'
</script>
