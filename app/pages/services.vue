<template>
  <div class="min-h-screen bg-black text-white py-16 px-4">
    <div class="max-w-3xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl sm:text-5xl font-bold mb-4">
          About <span class="text-green-400">Me</span>
        </h1>
        <p class="text-gray-400 text-lg">Get to know more about my journey</p>
      </div>

      <!-- Content -->
      <div class="space-y-8">
        <!-- Main Description -->
        <div class="bg-gray-900 rounded-2xl p-8 border border-gray-800">
          <p class="text-xl leading-relaxed text-gray-300">
            I am a Software Engineering Student at Padang State Polytechnic. 
            I have an interest in software and technology. More specifically, 
            mobile applications, machine learning, and others.
          </p>
        </div>

        <!-- Interests -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div class="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <div class="text-4xl mb-4">📱</div>
            <h3 class="text-lg font-semibold mb-2">Mobile Apps</h3>
            <p class="text-gray-400 text-sm">Developing modern mobile applications</p>
          </div>
          <div class="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <div class="text-4xl mb-4">🤖</div>
            <h3 class="text-lg font-semibold mb-2">AI & ML</h3>
            <p class="text-gray-400 text-sm">Building intelligent systems</p>
          </div>
          <div class="bg-gray-900 p-6 rounded-xl border border-gray-800 text-center">
            <div class="text-4xl mb-4">💻</div>
            <h3 class="text-lg font-semibold mb-2">Web Tech</h3>
            <p class="text-gray-400 text-sm">Creating web solutions</p>
          </div>
        </div>

        <!-- Education -->
        <div class="bg-gray-900 rounded-2xl p-6 border border-gray-800">
          <h3 class="text-xl font-semibold text-green-400 mb-4">Education</h3>
          <div class="flex items-center gap-4">
            <div class="w-16 h-16 bg-green-400 rounded-full flex items-center justify-center">
              <span class="text-black font-bold">PNP</span>
            </div>
            <div>
              <h4 class="text-lg font-semibold">Padang State Polytechnic</h4>
              <p class="text-gray-400">Software Engineering Student</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  title: 'About'
})
</script>