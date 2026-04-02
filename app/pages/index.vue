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

    <!-- Contenu des Onglets -->
    <div class="tabs-content">
      <!-- Onglet 1: Aperçu -->
      <div v-if="activeTab === 'overview'" class="tab-pane">
        <!-- Météo -->
        <div class="card mb-4">
          <h2>Météo</h2>
          <div class="weather-container">
            <div class="weather-main">
              <div class="temperature-section">
                <div class="temperature">{{ weather.temperature }}°C</div>
                <div class="condition">{{ weather.condition }}</div>
                <div class="location">📍 {{ weather.location }}</div>
              </div>
              <div class="weather-details-grid">
                <div class="weather-detail">
                  <span class="label">Ressenti</span>
                  <span class="value">{{ weather.feelsLike }}°C</span>
                </div>
                <div class="weather-detail">
                  <span class="label">Humidité</span>
                  <span class="value">{{ weather.humidity }}%</span>
                </div>
                <div class="weather-detail">
                  <span class="label">Vent</span>
                  <span class="value">{{ weather.windSpeed }} km/h</span>
                </div>
                <div class="weather-detail">
                  <span class="label">Indice UV</span>
                  <span class="value">{{ weather.uvIndex }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Aperçu Général -->
        <div class="card mb-4">
          <h2>Aperçu Général</h2>
          <div class="grid-2">
            <div class="stat-card">
              <h4>Date du Jour</h4>
              <p class="stat-value">{{ fullDate }}</p>
            </div>
            <div class="stat-card">
              <h4>Heure Actuelle</h4>
              <p class="stat-value">{{ currentTime }}</p>
            </div>
            <div class="stat-card">
              <h4>Jour de la Semaine</h4>
              <p class="stat-value">{{ dayOfWeek }}</p>
            </div>
            <div class="stat-card">
              <h4>Semaine de</h4>
              <p class="stat-value">{{ weekNumber }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Onglet 2: Statistiques -->
      <div v-if="activeTab === 'stats'" class="tab-pane">
        <div class="card mb-4">
          <h2>Statistiques</h2>
          <div class="stats-list">
            <div class="stat-item">
              <span>Caractères générés</span>
              <strong>{{ stats.charactersGenerated }}</strong>
            </div>
            <div class="stat-item">
              <span>Pages consultées</span>
              <strong>{{ stats.pagesViewed }}</strong>
            </div>
            <div class="stat-item">
              <span>Tempo moyen</span>
              <strong>{{ stats.averageTime }}ms</strong>
            </div>
            <div class="stat-item">
              <span>Actions utilisateur</span>
              <strong>{{ stats.userActions }}</strong>
            </div>
          </div>
        </div>
      </div>

      <!-- Onglet 3: Paramètres -->
      <div v-if="activeTab === 'settings'" class="tab-pane">
        <div class="card">
          <h2>Paramètres</h2>
          <div class="settings-list">
            <div class="setting-item">
              <label>Affichage du format 24h</label>
              <input type="checkbox" v-model="settings.format24h" />
            </div>
            <div class="setting-item">
              <label>Notifications activées</label>
              <input type="checkbox" v-model="settings.notificationsEnabled" />
            </div>
            <div class="setting-item">
              <label>Thème sombre</label>
              <button @click="toggleTheme" class="btn btn-secondary btn-sm">
                {{ isDark ? '☀️ Clair' : '🌙 Sombre' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { tabs, initialStats, initialSettings, weatherData } from '~/data/mockData'

defineProps({
  isDark: { type: Boolean, required: false, default: false },
  toggleTheme: { type: Function, required: false }
})

const activeTab = ref('overview')
const currentDate = ref(new Date())
const settings = ref(initialSettings)
const stats = ref(initialStats)
const weather = ref(weatherData)

const formattedDate = computed(() => {
  return currentDate.value.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

const fullDate = computed(() => {
  return currentDate.value.toLocaleDateString('fr-FR', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
})

const currentTime = computed(() => {
  const hours = String(currentDate.value.getHours()).padStart(2, '0')
  const minutes = String(currentDate.value.getMinutes()).padStart(2, '0')
  const seconds = String(currentDate.value.getSeconds()).padStart(2, '0')
  return `${hours}:${minutes}:${seconds}`
})

const dayOfWeek = computed(() => {
  const days = ['Dimanche', 'Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi']
  return days[currentDate.value.getDay()]
})

const weekNumber = computed(() => {
  const d = new Date(Date.UTC(currentDate.value.getFullYear(), currentDate.value.getMonth(), currentDate.value.getDate()))
  const dayNum = d.getUTCDay() || 7
  d.setUTCDate(d.getUTCDate() + 4 - dayNum)
  const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1))
  return Math.ceil(((d.getTime() - yearStart.getTime()) / 86400000 + 1) / 7)
})

onMounted(() => {
  // Mettre à jour l'heure chaque seconde
  setInterval(() => {
    currentDate.value = new Date()
  }, 1000)
})

definePageMeta({
  layout: 'default'
})
</script>

<style scoped>
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
