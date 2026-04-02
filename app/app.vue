<template>
  <div class="app-wrapper">
    <Header :isDark="isDark" @toggle-theme="toggleTheme" />
    
    <main class="app-main">
      <NuxtPage :isDark="isDark" :toggleTheme="toggleTheme" />
    </main>

    <Footer />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

const isDark = ref(false)

const toggleTheme = () => {
  isDark.value = !isDark.value
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
  document.documentElement.classList.toggle('dark', isDark.value)
}

onMounted(() => {
  // Récupérer le thème depuis localStorage ou la préférence système
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme) {
    isDark.value = savedTheme === 'dark'
  } else {
    isDark.value = window.matchMedia('(prefers-color-scheme: dark)').matches
  }
  document.documentElement.classList.toggle('dark', isDark.value)
})
</script>

<style scoped>
/* Structure générale */
.app-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-main {
  flex: 1;
}
</style>