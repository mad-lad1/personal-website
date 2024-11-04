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
      'As a founding engineer, I led the development of multiple mission-critical applications in computer vision, traffic analysis, and smart parking solutions, while establishing the technical infrastructure and best practices for the company.',
    story: `When I joined Currus AI as one of their early founding engineers, I did not really grasp a set vision for the startup. I don't think there really was a set vision.  It's almost as if we had a blank canvas to paint on. I was first tasked with building a mobile app and at that time, the only mobile app development tool I got my hands on was Android Studio. However, I was fascinated with cross-platform tools so I pitched scaling this to a solution using React Native and a determination to build something extraordinary. Our first challenge? Creating a facility monitoring system that could handle live video streams while being incredibly reliable. Those first few weeks were intense - coding during the day, debugging WebSocket connections at night, and learning that founding a tech startup means wearing many hats at once.
  
      As our system started taking shape, we faced our first major technical hurdle. Our Python-based computer vision backend wasn't performing as we needed. Instead of taking the easy route, I dove deep into NVIDIA's DeepStream SDK, wrestling with C and GStreamer to rebuild our core engine. It was a make-or-break moment - and when we saw the 3x performance improvement, those countless hours of debugging memory leaks felt worth it. A few weeks after this, the painting was taking shape. A vision was manifesting. The CTO at the time, Ehsan, blew me away with his proposition: "Let's build a digital twin engine that powers all city sensors". This would give cities unprecedented insights into their infrastructure and operations, like they never had before.
  
      The real game-changer came when we built our traffic analysis platform. I remember the excitement of combining Vue.js with Mapbox to create real-time visualizations that actually made traffic data beautiful. But the true magic happened when we integrated LLM capabilities - watching potential investors' faces light up as they saw our system not just displaying data, but understanding and analyzing it in natural language. That feature alone opened doors we hadn't imagined possible.
  
      You can imagine the infrastrucutre for scaling such as system would be immense. We pondered greatly about how to design a system that could handle data from multiple cities seamlessly. From setting up Docker containers for seamless deployment to implementing reverse SSH tunnels for secure remote access, every technical decision was a balance between innovation and reliability. This is was my first encounter with a genuine system design problem at scale.
  
      One of my proudest achievements was developing a multimodal search system that combined image and text embeddings for parking lots. Another applicaiton that the team and I had worked on, Parkie, involved real-time parking spot detection and analytics. This would allow users to find parking spots in real-time, similar to how people use Waze for traffic. The multimodal search system was a unique competitive advantage in the market for the city, especially police. They could now search for parking lots based on their description of a suspect vehicle. In parallel with this, I was also building a Qt desktop application for indoor facility management, a desktop extension of the aforementioned mobile app, pushing me to blend complex C++ programming with intuitive user experience design.
      
      You can see from this wild journey that I have worn so many hats (sometimes too many hats) - developing cross-platform applications to setting up cloud infrastructure, from optimizing AI models to presenting at expos. But beyond the technical achievements, the most valuable lessons came from working closely with the founding team. Ehsan taught me the intricate balance of technical excellence and practical delivery, while Amir showed me how to think strategically about product-market fit. Their contrasting approaches to leadership and problem-solving gave me invaluable insights into team dynamics and startup psychology.

      The experience also opened my eyes to the business development aspect of startups. To be quite frank, I definitely learned what to do and what not do in terms of product promotion, stakeholder engagement, and business development. You can have sexy product, but it's also about building the right team, understanding market dynamics, and executing with both vision and pragmatism.`,
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
      'Architected and implemented real-time facility monitoring system using React Native and WebSocket, integrating RTSP streams with cloud-based PostgreSQL database and firebase for authentication, reducing deployment time by 60%',

      'Led migration of core computer vision backend from Python to NVIDIA DeepStream (C/GStreamer), achieving 3x improvement in inference time and enabling edge computing capabilities on NVIDIA Jetson devices',

      'Developed sophisticated traffic analysis and monitoring platform with Vue.js and Mapbox, featuring real-time visualization, heatmaps, and LLM-powered data analysis, directly contributing to new investment rounds',

      'Engineered cross-platform Qt/C++ desktop application for indoor facility management, seamlessly integrating with cloud services and real-time MQTT communication',

      'Implemented innovative multimodal search system combining image and text embeddings in vector database, creating unique competitive advantage in market positioning',

      'Established robust cloud infrastructure utilizing GCP and AWS services, including IAM policies, S3 buckets, and serverless functions, ensuring scalable and secure operations',

      'Built and deployed production-ready Docker containers for microservices architecture, enabling seamless remote deployment and maintenance',

      'Introduced auto-annotation and auto-labeling capabilities using LLMs to reduce manual labeling efforts by 90%',

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
    story: `My journey into autonomous vehicles began long before I stepped foot in UCF's Connected and Autonomous Vehicles Lab. Fresh from graduating at the American University of Beirut (AUB), I carried with me a passion for autonomous systems and a determination that would soon prove crucial. I was very fascinated by the multidisciplnary nature of these systems, and I truly wanted to be part of this.

    Dr. Yaser Fallah's work in connected and autonomous vehicles had caught my attention. Despite the silence that met my initial dozens of emails, I was too stubborn to give up. Instead, I took a strategic approach - I enrolled in his course, determined to prove my worth through actions rather than words. This persistence, which would later become a defining trait in my entrepreneurial journey, paid off when I not only aced the course but also finally got the opportunity to join his lab.

    Working in the lab was a transformative experience. We were pushing the boundaries of multi-vehicle automation, tackling complex challenges in real-time coordination and precise positioning.

    I integrated April Tag Detection into our multi-RC vehicle fleet. We pushed the detection accuracy to 85% - a achievement that taught me valuable lessons about resilience and innovation.

    Looking back, this experience was more than just research; it was where my entrepreneurial spirit first truly manifested. The persistence that got me into the lab, the innovation mindset we applied to solving complex problems, and the leadership skills I developed while coordinating multi-vehicle systems - all these would prove invaluable when Dr. Fallah later recruited me to join Currus AI as an intern, the result of which led me to actually master out of my PhD program and join full-time as a founding engineer (check out my intern position below).

    The biggest lesson from all this experience? Sometimes the most valuable opportunities come not from immediate success, but from the persistence to keep pushing forward when others might give up. This mindset has shaped not just my academic career, but my approach to every challenge since.`,
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

    Those first few weeks were a whirlwind of learning. I learned about the RANSAC algorithm, vanishing point detection, the horizon line in an image, manual and auto-calibration of cameras, and more. I was tasked with auto-calibrating CARLA-based intersection cameras,  a challenge that initially seemed daunting for an intern. But that's the beauty of startups - they believe in potential over experience. Me and Ehsan would have long discussions about auto-calibration, life, and most importanatly to him, humanity.

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
      "Optimized YOLO detection on Jetson Nano using TensorRT, achieving 95% accuracy in bird's-eye view detection",
      'Employed RANSAC and vanishing point detection for auto-calibration of intersection cameras',
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
    story: `Teaching was never just about circuits and components for me (I was actually never interested in that 😃) - it was about understanding and connecting with students on their unique journeys. As a Graduate Teaching Assistant at UCF, I was not only explaining the intricacies of resistors and capacitors, but also learning valuable lessons about empathy, communication, articulation, and the art of making complex concepts accessible.

    The lab sessions were where the magic happened. Watching students' faces light up when their circuits finally worked, or seeing that moment of understanding when a concept clicked- it was truly rewarding for me on a personal level being able to convey a concept in a way that made sense to them. I remember one particular student who was struggling with a breadboard setup; instead of just showing them the solution, we worked through it together, turning frustration into a learning opportunity.

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
