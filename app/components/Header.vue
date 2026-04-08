<template>
  <header class="header">
    <div class="header-container">
      <div class="header-logo">
        <h1>Siboulot</h1>
        <p class="tagline">Tableau de Bord</p>
      </div>
      <nav class="header-nav">
        <a href="index" class="nav-link">Accueil</a>
        <a href="application" class="nav-link">Application</a>
        <a href="#" class="nav-link">Contact</a>
      </nav>
      <button @click="$emit('toggle-theme')" class="theme-toggle">
        {{ isDark ? '☀️' : '🌙' }}
      </button>
    </div>
  </header>
</template>

<script setup lang="ts">
defineProps({
  isDark: {
    type: Boolean,
    required: true
  }
})

defineEmits(['toggle-theme'])
</script>

<style scoped>
.header {
  background-color: var(--color-bg-soft);
  border-bottom: 1px solid var(--color-border);
  position: sticky;
  top: 0;
  z-index: 100;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
}

.header-logo {
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.header-logo h1 {
  margin: 0;
  font-size: 1.5rem;
  color: var(--color-primary);
  font-weight: 700;
}

.tagline {
  margin: 0;
  font-size: 0.875rem;
  color: var(--color-text-soft);
}

.header-nav {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: var(--color-text);
  text-decoration: none;
  font-weight: 500;
  transition: color var(--transition);
}

.nav-link:hover {
  color: var(--color-primary);
}

.theme-toggle {
  background: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  padding: 0.5rem;
  transition: transform var(--transition);
}

.theme-toggle:hover {
  transform: scale(1.1);
}

@media (max-width: 768px) {
  .header-container {
    flex-direction: column;
    gap: 1rem;
  }

  .header-nav {
    flex-direction: column;
    gap: 0.5rem;
  }
}
</style>
