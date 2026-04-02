<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-section">
        <h3>Siboulot</h3>
        <p>Votre tableau de bord personnel pour rester productive.</p>
      </div>
      <div class="footer-section">
        <h4>Liens rapides</h4>
        <ul class="footer-links">
          <li><a href="#">Accueil</a></li>
          <li><a href="#">À propos</a></li>
          <li><a href="#">Blog</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Ressources</h4>
        <ul class="footer-links">
          <li><a href="#">Documentation</a></li>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Support</a></li>
          <li><a href="#">Politique de confidentialité</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h4>Me contacter</h4>
        <p>
          Email: <a href="mailto:contact@example.com">contact@example.com</a>
        </p>
        <p>
          Tél: <a href="tel:+33612345678">+33 6 12 34 56 78</a>
        </p>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Siboulot. Tous droits réservés.</p>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--color-bg-soft);
  border-top: 1px solid var(--color-border);
  margin-top: 4rem;
}

.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 2rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.25rem;
  color: var(--color-primary);
}

.footer-section h4 {
  margin: 0 0 1rem 0;
  font-size: 1rem;
  color: var(--color-text);
}

.footer-section p {
  margin: 0 0 0.5rem 0;
  color: var(--color-text-soft);
  line-height: 1.6;
}

.footer-links {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.footer-links a {
  color: var(--color-text-soft);
  text-decoration: none;
  transition: color var(--transition);
}

.footer-links a:hover {
  color: var(--color-primary);
}

.footer-section a {
  color: var(--color-primary);
  text-decoration: none;
  transition: opacity var(--transition);
}

.footer-section a:hover {
  opacity: 0.8;
}

.footer-bottom {
  border-top: 1px solid var(--color-border);
  padding: 1.5rem 2rem;
  text-align: center;
  color: var(--color-text-soft);
  font-size: 0.875rem;
}

.footer-bottom p {
  margin: 0;
}
</style>
