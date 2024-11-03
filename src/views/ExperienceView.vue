<template>
  <section id="experience">
    <h2 class="section-title">Experience</h2>
    <ExperienceCard :experience="experiences[0]" />
    <ExperienceCard :experience="experiences[1]" />
    <ExperienceCard :experience="experiences[2]" />
    <ExperienceCard :experience="experiences[3]" />
  </section>
</template>

<script setup>
import ExperienceCard from '@/components/experience/ExperienceCard.vue'
const experiences = [
  {
    title: 'Founding Engineer',
    company: 'Currus AI Inc',
    location: 'Orlando, FL',
    date: 'May 2023 - Present',
    description:
      'As a founding engineer, spearheaded the development of multiple mission-critical applications in computer vision, traffic analysis, and smart parking solutions, while establishing the technical infrastructure and best practices for the company.',
    story: `When I joined Currus AI as the founding engineer, we had a bold vision of revolutionizing urban mobility through AI. The journey began with me sitting at my desk, armed with React Native and a determination to build something extraordinary. Our first challenge? Creating a real-time surveillance system that could handle live video streams while being incredibly reliable. Those first few weeks were intense - coding during the day, debugging WebSocket connections at night, and learning that founding a tech startup means wearing many hats at once.
  
      As our system started taking shape, we faced our first major technical hurdle. Our Python-based computer vision backend wasn't scaling as we needed. Instead of taking the easy route, I dove deep into NVIDIA's DeepStream SDK, wrestling with C and GStreamer to rebuild our core engine. It was a make-or-break moment - and when we saw the 3x performance improvement, those countless hours of debugging memory leaks felt worth it. This migration opened up new possibilities, allowing us to deploy our solution on edge devices and scale in ways we couldn't before.
  
      The real game-changer came when we built our traffic analysis platform. I remember the excitement of combining Vue.js with Mapbox to create real-time visualizations that actually made traffic data beautiful. But the true magic happened when we integrated LLM capabilities - watching potential investors' faces light up as they saw our system not just displaying data, but understanding and analyzing it in natural language. That feature alone opened doors we hadn't imagined possible.
  
      Building the infrastructure to support all this wasn't just about following best practices - it was about creating something that could scale with our ambitions. From setting up Docker containers for seamless deployment to implementing reverse SSH tunnels for secure remote access, every technical decision was a balance between innovation and reliability. I found myself becoming not just a developer, but an architect of systems that would need to handle data from multiple cities seamlessly.
  
      One of my proudest achievements was developing a multimodal search system that combined image and text embeddings. It wasn't just about the technical implementation - it was about creating something unique in the market that solved real problems in an innovative way. Similarly, building a Qt desktop application for indoor tracking pushed me to blend complex C++ programming with intuitive user experience design.
  
      Throughout this journey, I've worn many hats - from developing cross-platform applications to setting up cloud infrastructure, from optimizing AI models to presenting at expos. But what really drives me is seeing our solutions deployed in real cities, making a tangible difference in how urban spaces operate.
  
      Looking back at the past year, it's amazing to see how far we've come - from initial concepts to deployed solutions that are actively shaping urban mobility. But what excites me most is what's ahead. In the world of AI and smart cities, we're just scratching the surface of what's possible.`,
    technologies: [
      'React Native',
      'Vue.js',
      'Node.js',
      'C/C++',
      'Python',
      'PostgreSQL',
      'InfluxDB',
      'Docker',
      'GCP',
      'AWS',
      'NVIDIA DeepStream',
      'Qt',
      'Electron',
      'WebSockets',
      'MQTT',
      'TypeScript',
      'Mapbox',
    ],
    achievements: [
      'Architected and implemented real-time surveillance system using React Native and WebSocket, integrating RTSP streams with cloud-based PostgreSQL database, reducing deployment time by 60%',

      'Led migration of core computer vision backend from Python to NVIDIA DeepStream (C/GStreamer), achieving 3x improvement in inference time and enabling edge computing capabilities on NVIDIA Jetson devices',

      'Developed sophisticated traffic analysis platform with Vue.js and Mapbox, featuring real-time visualization, heatmaps, and LLM-powered data analysis, directly contributing to new investment rounds',

      'Engineered cross-platform Qt/C++ desktop application for indoor object tracking, seamlessly integrating with cloud services and real-time MQTT communication',

      'Implemented innovative multimodal search system combining image and text embeddings in vector database, creating unique competitive advantage in market positioning',

      'Established robust cloud infrastructure utilizing GCP and AWS services, including IAM policies, S3 buckets, and serverless functions, ensuring scalable and secure operations',

      'Built and deployed production-ready Docker containers for microservices architecture, enabling seamless remote deployment and maintenance',

      'Designed and implemented secure remote access solutions using reverse SSH tunneling and ngrok for clients behind NAT, ensuring 99.9% system availability',

      'Created cross-platform installer using Electron, streamlining deployment process and reducing customer setup time by 80%',

      'Introduced and implemented Agile methodologies, leading to 40% improvement in team productivity and project delivery times',
    ],
  },
  {
    title: 'Graduate Research Assistant',
    company: 'Connected and Autonomous Vehicles Lab, UCF',
    location: 'Orlando, FL',
    date: 'August 2022 - May 2023',
    description:
      'Developed and implemented multi-vehicle automation systems using ROS2, focusing on precise positioning and computer vision integration for autonomous vehicle fleet management.',
    story: `My journey into autonomous vehicles began long before I stepped foot in UCF's Connected and Autonomous Vehicles Lab. Fresh from graduating at the American University of Beirut (AUB), I carried with me an unwavering passion for autonomous systems and a determination that would soon prove crucial.

    Dr. Yaser Fallah's work in connected and autonomous vehicles had caught my attention, and I knew I had to be part of his lab. Despite the silence that met my initial dozens of emails, I refused to give up. Instead of accepting defeat, I took a strategic approach - I enrolled in his course, determined to prove my worth through actions rather than words. This persistence, which would later become a defining trait in my entrepreneurial journey, paid off when I not only aced the course but also finally got the opportunity to join his lab.

    Working in the lab was a transformative experience. We were pushing the boundaries of multi-vehicle automation, tackling complex challenges in real-time coordination and precise positioning. I remember the breakthrough moment when we achieved sub-meter positioning accuracy - it wasn't just about the technical achievement, but about seeing months of persistent effort materialize into tangible results.

    The integration of April Tag Detection became my pet project. The challenge wasn't just in implementing the technology, but in making it robust enough to work in real-world conditions. Through countless iterations and tests under varying lighting conditions, we pushed the detection accuracy to 85% - a achievement that taught me valuable lessons about resilience and innovation.

    Looking back, this experience was more than just research; it was where my entrepreneurial spirit first truly manifested. The persistence that got me into the lab, the innovation mindset we applied to solving complex problems, and the leadership skills I developed while coordinating multi-vehicle systems - all these would prove invaluable when Dr. Fallah later recruited me to join Currus AI.

    The biggest lesson? Sometimes the most valuable opportunities come not from immediate success, but from the persistence to keep pushing forward when others might give up. This mindset has shaped not just my academic career, but my approach to every challenge since.`,
    technologies: [
      'ROS2',
      'Python',
      'C++',
      'Computer Vision',
      'April Tag Detection',
      'Robot Operating System',
      'Autonomous Systems',
      'Sensor Fusion',
    ],
    achievements: [
      'Developed and implemented multi-vehicle automation system using ROS2, achieving sub-meter positioning accuracy',
      'Integrated April Tag Detection system for precise localization of RC vehicle fleet, achieving 85% detection accuracy in varying lighting conditions',
      'Led research team in implementing real-time vehicle coordination algorithms',
      'Published findings in autonomous vehicle positioning and detection methodologies',
    ],
  },
  {
    title: 'Machine Learning Research Intern',
    company: 'Currus AI Inc',
    location: 'Orlando, FL',
    date: 'May 2022 - August 2022',
    description:
      'First industry experience working on cutting-edge computer vision and real-time processing systems, while learning invaluable lessons about startups, innovation, and life philosophy.',
    story: `My journey into the tech industry began in the most unexpected way - as an intern at a startup that would later become my professional home. Walking into Currus AI for the first time, I was immediately struck by the energy and vision of the team, Ehsan and Amir. Little did I know that this internship would not just shape my technical skills, but completely transform my perspective on life and innovation.

    Those first few weeks were a whirlwind of learning. I found myself diving deep into 3D YOLO detection optimization - a challenge that initially seemed daunting for an intern. But that's the beauty of startups - they believe in potential over experience. Working with the Jetson Nano became my daily companion, and each small improvement in accuracy felt like a personal victory. When we finally achieved 95% accuracy in bird's-eye view detection, I realized that what seemed impossible at first was actually within reach.

    The real game-changer wasn't just the technical work, though. It was the conversations with Ehsan and Amir that truly opened my mind. They weren't just technical mentors; they were philosophers in their own right. Our discussions would often start with code optimization but evolve into deep conversations about life, innovation, and the social impact of technology. Their approach to problem-solving went beyond algorithms - they taught me to see the bigger picture, to understand the 'why' behind the 'what'.

    Building the Android application for visualizing YOLO detections was my first taste of creating something end-to-end. When I saw my work actually being used, displaying real-time detections on Google Maps, it was more than just a technical achievement - it was proof that I could create something meaningful. The challenge of optimizing the RTSP processing system pushed me to learn C++ multithreading, increasing our throughput significantly. Each frame per second gained felt like a personal victory.

    Looking back, what stands out isn't just the technical skills I gained, but the mindset shift. Ehsan and Amir showed me that true innovation comes from questioning everything, from being unafraid to tackle big challenges, and from understanding that technology is ultimately about improving people's lives. Their mentorship went beyond code - they taught me to think bigger, to see opportunities where others see obstacles, and to approach problems with both analytical rigor and creative imagination.

    This internship wasn't just my first step into the industry - it was where I found my calling. The startup environment, the freedom to innovate - all of these elements came together to show me what I wanted to do with my career. This internship truly impacted my entire worldview and shaped the person I am today.`,
    technologies: [
      'TensorRT',
      'C++',
      'Python',
      'YOLO',
      'Android Development',
      'Computer Vision',
      'NVIDIA Jetson',
      'UDP',
      'Google Maps API',
      'Multithreading',
    ],
    achievements: [
      "Optimized 3D YOLO detection on Jetson Nano using TensorRT, achieving 95% accuracy in bird's-eye view detection",
      'Engineered high-performance RTSP processing system using C++ multithreading, increasing throughput from 15 to 25 FPS',
      'Developed Android application visualizing YOLO detections on Google Maps via UDP socket communication',
      'Contributed to core computer vision algorithms for traffic analysis and vehicle detection',
    ],
  },
  {
    title: 'Graduate Teaching Assistant',
    company: 'University of Central Florida',
    location: 'Orlando, FL',
    date: 'August 2021 - May 2023',
    description:
      'Guided and mentored undergraduate students through Linear Circuits courses, fostering an environment of practical learning while developing strong communication and leadership skills.',
    story: `Teaching was never just about circuits and components for me - it was about understanding and connecting with students on their unique journeys. As a Graduate Teaching Assistant at UCF, I found myself not just explaining the intricacies of resistors and capacitors, but also learning valuable lessons about empathy, communication, and the art of making complex concepts accessible.

    The lab sessions were where the real magic happened. Watching students' faces light up when their circuits finally worked, or seeing that moment of understanding when a concept clicked - these were the rewards that made every challenging moment worthwhile. I remember one particular student who was struggling with a breadboard setup; instead of just showing them the solution, we worked through it together, turning frustration into a learning opportunity.

    What struck me most was how many of my students were quietly harboring dreams of transitioning into software development. This realization shaped my teaching approach significantly. While ensuring they learned the fundamental electrical engineering concepts, I also helped them see how these problem-solving skills would translate into any technical field they might pursue. When grading, I found myself focusing more on their problem-solving approach and understanding rather than perfect circuit configurations.

    The experience taught me that effective teaching isn't just about knowledge transfer - it's about understanding where each student is coming from and where they want to go. Whether they were struggling with a complex circuit analysis or questioning their career path, I learned to listen first and guide second. This approach not only made me a better teacher but also helped me develop the communication skills that would prove invaluable in my later roles.

    Looking back, those hours in the lab, surrounded by breadboards, oscilloscopes, and eager minds, shaped me just as much as they shaped my students. I learned that technical expertise alone isn't enough - the ability to articulate complex ideas simply, to empathize with different perspectives, and to adapt your approach for different learning styles are skills that transcend any specific field.`,
    technologies: [
      'Linear Circuit Analysis',
      'Electronic Lab Equipment',
      'Circuit Simulation',
      'Technical Documentation',
      'Lab Safety Protocols',
      'Educational Technology',
      'Measurement Tools',
      'Circuit Design',
    ],
    achievements: [
      'Instructed over 200 students in Linear Circuits theory and laboratory courses',
      'Developed comprehensive lab guides and tutorial materials to enhance student understanding',
      'Maintained consistently high student satisfaction ratings through adaptive teaching methods',
      'Successfully mentored students through complex circuit design projects and troubleshooting',
    ],
  },
]
</script>

<style scoped>
.experience-section {
  padding: 4rem 0;
}

.section-title {
  margin-bottom: 3rem;
}

@media (max-width: 768px) {
  .experience-section {
    padding: 2rem 0;
  }

  .section-title {
    margin-bottom: 2rem;
  }
}
</style>
