<template>
    <div class="container py-8">
    <!-- Titre et Date -->
    <div class="mb-8">
      <h1>Tableau de Bord</h1>
      <p class="text-soft">Aujourd'hui : <strong>{{ formattedDate }}</strong></p>
    </div>

    <!-- Onglets Navigation -->
    <div class="tabs-wrapper mb-6">
      <div class="tabs-header flex gap-2 border-b border-color-border">
        <button
          v-for="tab in tabs"
          :key="tab.id"
          @click="activeTab = tab.id"
          :class="['tab-button', { active: activeTab === tab.id }]"
        >
          {{ tab.label }}
        </button>
      </div>
    </div>
</template>

<script lang="ts" setup>

</script>

<style>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.py-8 {
  padding-top: 2rem;
  padding-bottom: 2rem;
}

/* Onglets */
.tabs-wrapper {
  border-bottom: 1px solid var(--color-border);
}

.tabs-header {
  display: flex;
  gap: 0.5rem;
  border-bottom: 1px solid var(--color-border);
}

.tab-button {
  flex: 1;
  padding: 0.75rem 1rem;
  background: transparent;
  border: none;
  border-bottom: 3px solid transparent;
  color: var(--color-text-soft);
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition);
}

.tab-button:hover {
  color: var(--color-text);
  background-color: var(--color-bg-soft);
}

.tab-button.active {
  color: var(--color-primary);
  border-bottom-color: var(--color-primary);
}

.tab-pane {
  animation: fadeIn 200ms ease-in;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Grille */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.stat-card {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1rem;
}

.stat-card h4 {
  font-size: 0.875rem;
  color: var(--color-text-soft);
  margin-bottom: 0.5rem;
}

.stat-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--color-primary);
  margin: 0;
}

/* Statistiques */
.stats-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.stat-item {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.stat-item span {
  font-size: 0.875rem;
  color: var(--color-text-soft);
}

.stat-item strong {
  font-size: 1.75rem;
  color: var(--color-primary);
}

/* Paramètres */
.settings-list {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.setting-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
}

.setting-item label {
  font-weight: 500;
  color: var(--color-text);
}

.setting-item input[type="checkbox"] {
  width: 1.25rem;
  height: 1.25rem;
  cursor: pointer;
}

.text-soft {
  color: var(--color-text-soft);
}

/* Météo */
.weather-container {
  margin-top: 1.5rem;
}

.weather-main {
  display: flex;
  gap: 3rem;
  align-items: flex-start;
}

.temperature-section {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.temperature {
  font-size: 3.5rem;
  font-weight: 700;
  color: var(--color-primary);
  line-height: 1;
}

.condition {
  font-size: 1.25rem;
  color: var(--color-text);
  font-weight: 500;
}

.location {
  font-size: 0.875rem;
  color: var(--color-text-soft);
}

.weather-details-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-top: 1.5rem;
  min-width: 300px;
}

.weather-detail {
  background-color: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: var(--radius-md);
  padding: 0.75rem 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}

.weather-detail .label {
  font-size: 0.75rem;
  color: var(--color-text-soft);
  text-transform: uppercase;
  font-weight: 600;
}

.weather-detail .value {
  font-size: 1.25rem;
  color: var(--color-primary);
  font-weight: 600;
}
</style>