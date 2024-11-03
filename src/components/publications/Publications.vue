<template>
    <div class="publications-grid">
      <PublicationCard
        v-for="publication in publications"
        :key="publication.title"
        :title="publication.title"
        :description="publication.description"
        :link="publication.link"
        :abstract="publication.abstract"
      />
    </div>
</template>

<script setup>
import PublicationCard from './PublicationCard.vue'

const publications = [
  {
    title: 'ACM CHI 2023',
    description: 'Effective 2D Stroke-Based Gesture Augmentation for RNNs',
    link: 'https://dl.acm.org/doi/10.1145/3544548.3581358',
    abstract: 'Recurrent neural networks (RNN) require large training datasets from which they learn new class models. This limitation prohibits their use in custom gesture applications where only one or two end user samples are given per gesture class. One common way to enhance sparse datasets is to use data augmentation to synthesize new samples. Although there are numerous known techniques, they are often treated as standalone approaches when in reality they are often complementary. We show that by intelligently chaining augmentation techniques together that simulate different gesture production variability types, such as those affecting the temporal and spatial qualities of a gesture, we can significantly increase RNN accuracy without sacrificing training time. Through experimentation on four public stroke-based 2D gesture datasets, we show that RNNs trained with our data augmentation chaining technique achieves state-of-the-art recognition accuracy in both writer-dependent and writer-independent test scenarios.',
  },
  {
    title: 'IEEE HRI 2023',
    description: 'Human-Robot Interaction using VAHR',
    link: 'https://arxiv.org/abs/2303.17582',
    abstract: 'Robots have become ubiquitous tools in various industries and households, highlighting the importance of human-robot interaction (HRI). This has increased the need for easy and accessible communication between humans and robots. Recent research has focused on the intersection of virtual assistant technology, such as Amazon\'s Alexa, with robots and its effect on HRI. This paper presents the Virtual Assistant, Human, and Robots in the loop (VAHR) system, which utilizes bidirectional communication to control multiple robots through Alexa. VAHR\'s performance was evaluated through a human-subjects experiment, comparing objective and subjective metrics of traditional keyboard and mouse interfaces to VAHR. The results showed that VAHR required 41% less Robot Attention Demand and ensured 91% more Fan-out time compared to the standard method. Additionally, VAHR led to a 62.5% improvement in multi-tasking, highlighting the potential for efficient human-robot interaction in physically- and mentally-demanding scenarios. However, subjective metrics revealed a need for human operators to build confidence and trust with this new method of operation.',
  },
]
</script>

<style scoped>
.publications-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}
</style>