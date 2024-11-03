<template>
  <div class="splash-screen">
    <div class="terminal">
      <div class="terminal-header">
        <div class="terminal-button red"></div>
        <div class="terminal-button yellow"></div>
        <div class="terminal-button green"></div>
      </div>
      <div class="terminal-content">
        <div class="command-line">
          <span class="prompt">visitor@aldilati:~$</span>
          <span class="command">{{ currentCommand }}</span>
          <span class="cursor" v-if="isTyping">_</span>
        </div>
        <div v-if="showProgress" class="progress-container">
          <div class="progress-bar" :style="{ width: `${progress}%` }"></div>
          <div class="progress-text">
            Loading Server... {{ Math.floor(progress) }}%
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const currentCommand = ref('')
const isTyping = ref(true)
const showProgress = ref(false)
const progress = ref(0)

const commands = ['cd portfolio/', 'ls -la', './start_aldilati_server.sh']

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const typeCommand = async command => {
  currentCommand.value = ''
  for (const char of command) {
    currentCommand.value += char
    await sleep(Math.random() * 100 + 50)
  }
  await sleep(500)
}

const simulateProgress = async () => {
  showProgress.value = true
  while (progress.value < 100) {
    progress.value += Math.random() * 10
    if (progress.value > 100) progress.value = 100
    await sleep(100)
  }
  await sleep(500)
}

onMounted(async () => {
  for (const command of commands) {
    await typeCommand(command)
    if (command === './start_aldilati_server.sh') {
      await simulateProgress()
    }
  }
})
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');

.splash-screen {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--background);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.terminal {
  width: 600px;
  background: #1a1a1a;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
}

.terminal-header {
  background: #2d2d2d;
  padding: 10px;
  display: flex;
  gap: 8px;
}

.terminal-button {
  width: 12px;
  height: 12px;
  border-radius: 50%;
}

.red {
  background: #ff5f56;
}
.yellow {
  background: #ffbd2e;
}
.green {
  background: #27c93f;
}

.terminal :deep(.terminal-content) {
  padding: 20px;
  font-family: 'Ubuntu Mono', monospace !important;
  font-size: 1.1rem;
  color: #fff;
  min-height: 200px;
  line-height: 1.6;
}

.terminal :deep(.command-line) {
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  font-family: 'Ubuntu Mono', monospace !important;
}

.terminal :deep(.prompt) {
  color: var(--primary);
  margin-right: 10px;
  user-select: none;
  font-family: 'Ubuntu Mono', monospace !important;
}

.terminal :deep(.command) {
  color: #fff;
  white-space: pre;
  font-family: 'Ubuntu Mono', monospace !important;
}

.terminal :deep(.cursor) {
  animation: blink 1s infinite;
  font-family: 'Ubuntu Mono', monospace !important;
}

.terminal :deep(.progress-container) {
  margin-top: 20px;
  background: #2d2d2d;
  border-radius: 4px;
  overflow: hidden;
  padding: 2px;
}

.terminal :deep(.progress-bar) {
  height: 4px;
  background: var(--primary);
  transition: width 0.2s ease;
  border-radius: 2px;
}

.terminal :deep(.progress-text) {
  font-size: 14px;
  margin-top: 8px;
  color: var(--primary);
  font-family: 'Ubuntu Mono', monospace !important;
}

@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}

@media (max-width: 768px) {
  .terminal {
    width: 90%;
    margin: 0 20px;
  }

  .terminal :deep(.terminal-content) {
    font-size: 1rem;
  }
}
</style>
