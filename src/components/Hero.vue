<template>
  <div class="canvas-container">
    <canvas ref="canvas"></canvas>
  </div>
  <section class="hero">
    <h1 class="hero-title">
      Hi there, I'm <span>Mostafa</span>
      <br />
      I build AI systems.
    </h1>
    <p class="hero-subtitle">
      ML Engineer & Full Stack Developer specializing in LLMs, Computer Vision,
      and Distributed Systems. Currently building the future of AI digital twins
      at Currus AI.
    </p>
  </section>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';
import * as THREE from 'three';

const canvas = ref(null);
let scene, camera, renderer, points, lines;
let mouseX = 0;
let mouseY = 0;


const init = () => {
  // Scene setup
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 50;
  

  renderer = new THREE.WebGLRenderer({
    canvas: canvas.value,
    alpha: true,
    antialias: true
  });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  const nodesGeometry = new THREE.BufferGeometry();
  const nodeCount = 75;
  const positions = new Float32Array(nodeCount * 3);
  const nodePositions = [];

  for(let i = 0; i < nodeCount * 3; i += 3) {
    const x = (Math.random() - 0.5) * 100;
    const y = (Math.random() - 0.5) * 50;
    const z = (Math.random() - 0.5) * 50;
    
    positions[i] = x;
    positions[i + 1] = y;
    positions[i + 2] = z;
    
    nodePositions.push(new THREE.Vector3(x, y, z));
  }

  nodesGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

  // Create node material
  const nodesMaterial = new THREE.PointsMaterial({
    size: 0.5,
    color: new THREE.Color(0x646cff),
    transparent: true,
    opacity: 0.8,
    sizeAttenuation: true
  });

  points = new THREE.Points(nodesGeometry, nodesMaterial);
  scene.add(points);

  // Create connections between nearby nodes
  const lineGeometry = new THREE.BufferGeometry();
  const linePositions = [];
  const lineColors = [];

  const connectionDistance = 20; // Maximum distance for connection
  
  for(let i = 0; i < nodePositions.length; i++) {
    for(let j = i + 1; j < nodePositions.length; j++) {
      const distance = nodePositions[i].distanceTo(nodePositions[j]);
      
      if(distance < connectionDistance) {
        linePositions.push(nodePositions[i].x, nodePositions[i].y, nodePositions[i].z);
        linePositions.push(nodePositions[j].x, nodePositions[j].y, nodePositions[j].z);
        
        // Gradient color based on distance
        const alpha = 1 - (distance / connectionDistance);
        lineColors.push(0.4, 0.4, 1, alpha);
        lineColors.push(0.4, 0.4, 1, alpha);
      }
    }
  }

  lineGeometry.setAttribute('position', new THREE.Float32BufferAttribute(linePositions, 3));
  lineGeometry.setAttribute('color', new THREE.Float32BufferAttribute(lineColors, 4));

  const lineMaterial = new THREE.LineBasicMaterial({
    vertexColors: true,
    transparent: true,
    opacity: 0.2
  });

  lines = new THREE.LineSegments(lineGeometry, lineMaterial);
  scene.add(lines);
};

const animate = () => {
  requestAnimationFrame(animate);

  // Subtle rotation based on mouse position
  const rotationSpeed = 0.00001;
  points.rotation.y += rotationSpeed * mouseX;
  points.rotation.x += rotationSpeed * mouseY;
  lines.rotation.y += rotationSpeed * mouseX;
  lines.rotation.x += rotationSpeed * mouseY;

  // Gentle floating motion
  const time = Date.now() * 0.0001;
  points.position.y = Math.sin(time) * 2;
  lines.position.y = Math.sin(time) * 2;

  renderer.render(scene, camera);
};

const handleMouseMove = (event) => {
  mouseX = (event.clientX - window.innerWidth / 2);
  mouseY = (event.clientY - window.innerHeight / 2);
};

const handleResize = () => {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
};

onMounted(() => {
  init();
  animate();
  window.addEventListener('mousemove', handleMouseMove);
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('mousemove', handleMouseMove);
  window.removeEventListener('resize', handleResize);
  
  // Cleanup
  scene.remove(points);
  scene.remove(lines);
  points.geometry.dispose();
  points.material.dispose();
  lines.geometry.dispose();
  lines.material.dispose();
  renderer.dispose();
});
</script>


<style scoped>
.canvas-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: -1;
}

canvas {
  width: 100%;
  height: 100%;
}

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 15%;
  position: relative;
  background: transparent;
}

.hero-title {
  font-size: 5rem;
  font-weight: 800;
  color: var(--heading);
  line-height: 1.1;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.hero-title span {
  color: var(--primary);
  position: relative;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text);
  margin-bottom: 2rem;
  max-width: 600px;
  position: relative;
  z-index: 1;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

@media (max-width: 768px) {
  .hero {
    padding: 0 5%;
  }

  .hero-title {
    font-size: 3rem;
  }

  .hero-subtitle {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .hero-title {
    font-size: 2.5rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }
}
</style>