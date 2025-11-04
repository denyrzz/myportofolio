<template>
  <div class="min-h-screen bg-black text-white py-16 px-4">
    <div class="max-w-4xl mx-auto">
      <!-- Header Section -->
      <div class="text-center mb-16">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
          About <span class="text-green-400">Me</span>
        </h1>
        <div class="w-24 h-1 bg-green-400 mx-auto"></div>
      </div>

      <!-- Main Content -->
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Text Content -->
        <div class="space-y-6">
          <div class="space-y-4">
            <h2 class="text-2xl sm:text-3xl font-semibold text-green-400">
              Hello! I'm Deni Ramadhan
            </h2>
            <p class="text-lg text-gray-300 leading-relaxed">
              I am a Software Engineering Student at Padang State Polytechnic. 
              I have an interest in software and technology. More specifically, 
              mobile applications, machine learning, and others.
            </p>
          </div>

          <!-- Additional Information -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-white">What I Do</h3>
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div class="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <div class="text-green-400 text-lg mb-2">📱</div>
                <h4 class="font-semibold mb-2">Mobile Development</h4>
                <p class="text-sm text-gray-400">Creating modern mobile applications</p>
              </div>
              <div class="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <div class="text-green-400 text-lg mb-2">🤖</div>
                <h4 class="font-semibold mb-2">Machine Learning</h4>
                <p class="text-sm text-gray-400">Building intelligent systems</p>
              </div>
              <div class="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <div class="text-green-400 text-lg mb-2">🌐</div>
                <h4 class="font-semibold mb-2">Web Development</h4>
                <p class="text-sm text-gray-400">Developing responsive websites</p>
              </div>
              <div class="bg-gray-900 p-4 rounded-lg border border-gray-800">
                <div class="text-green-400 text-lg mb-2">🔧</div>
                <h4 class="font-semibold mb-2">Problem Solving</h4>
                <p class="text-sm text-gray-400">Solving complex challenges</p>
              </div>
            </div>
          </div>

          <!-- Skills -->
          <div class="space-y-4">
            <h3 class="text-xl font-semibold text-white">Technologies I Use</h3>
            <div class="flex flex-wrap gap-3">
              <span class="px-3 py-1 bg-green-400/20 text-green-400 rounded-full text-sm border border-green-400/30">JavaScript</span>
              <span class="px-3 py-1 bg-blue-400/20 text-blue-400 rounded-full text-sm border border-blue-400/30">TypeScript</span>
              <span class="px-3 py-1 bg-vue-green/20 text-vue-green rounded-full text-sm border border-vue-green/30">Vue.js</span>
              <span class="px-3 py-1 bg-react-blue/20 text-react-blue rounded-full text-sm border border-react-blue/30">React</span>
              <span class="px-3 py-1 bg-node-green/20 text-node-green rounded-full text-sm border border-node-green/30">Node.js</span>
              <span class="px-3 py-1 bg-python-yellow/20 text-python-yellow rounded-full text-sm border border-python-yellow/30">Python</span>
            </div>
          </div>
        </div>

        <!-- Profile Image & Stats -->
        <div class="space-y-8">
          <!-- Profile Image -->
          <div class="flex justify-center">
            <div class="relative">
              <img 
                src="/images/foto2.jpg" 
                alt="Deni Ramadhan"
                class="w-64 h-64 rounded-2xl object-cover border-4 border-green-400 shadow-2xl"
              />
              <div class="absolute -inset-4 border-2 border-green-400/30 rounded-2xl -z-10"></div>
            </div>
          </div>

          <!-- Quick Stats -->
          <div class="grid grid-cols-2 gap-6 text-center">
            <div class="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div class="text-2xl font-bold text-green-400 mb-2">2+</div>
              <div class="text-sm text-gray-400">Years Learning</div>
            </div>
            <div class="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div class="text-2xl font-bold text-green-400 mb-2">10+</div>
              <div class="text-sm text-gray-400">Projects Done</div>
            </div>
            <div class="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div class="text-2xl font-bold text-green-400 mb-2">5+</div>
              <div class="text-sm text-gray-400">Technologies</div>
            </div>
            <div class="bg-gray-900 p-6 rounded-xl border border-gray-800">
              <div class="text-2xl font-bold text-green-400 mb-2">∞</div>
              <div class="text-sm text-gray-400">Passion</div>
            </div>
          </div>

          <!-- Call to Action -->
          <div class="text-center">
            <a 
              href="/contact" 
              class="inline-flex items-center gap-2 bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-green-300 transition-colors"
            >
              Get In Touch
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'About - Deni Ramadhan'
})
</script>

<style scoped>
.text-vue-green {
  color: #42b883;
}
.bg-vue-green\/20 {
  background-color: rgba(66, 184, 131, 0.2);
}
.border-vue-green\/30 {
  border-color: rgba(66, 184, 131, 0.3);
}

.text-react-blue {
  color: #61dafb;
}
.bg-react-blue\/20 {
  background-color: rgba(97, 218, 251, 0.2);
}
.border-react-blue\/30 {
  border-color: rgba(97, 218, 251, 0.3);
}

.text-node-green {
  color: #68a063;
}
.bg-node-green\/20 {
  background-color: rgba(104, 160, 99, 0.2);
}
.border-node-green\/30 {
  border-color: rgba(104, 160, 99, 0.3);
}

.text-python-yellow {
  color: #ffd43b;
}
.bg-python-yellow\/20 {
  background-color: rgba(255, 212, 59, 0.2);
}
.border-python-yellow\/30 {
  border-color: rgba(255, 212, 59, 0.3);
}
</style>