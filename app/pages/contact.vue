<template>
    <div class="container py-8">
        
        <div class="mb-8">
            <h1>Contact</h1>
            <p class="text-soft">
                Pour nous contacter
            </p>
        </div>

        <div class="card mb-4">
            <h2>Via mail</h2>
            <p>siboulot@outlook.fr</p>
            <a href="mailto:siboulot@outlook.fr">
                  <button>Lien</button>
            </a>
        </div>
    </div>
</template>

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

.card {
    background-color: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 1.5rem;
    margin-bottom: 1.5rem;
}

.card h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

button {
    background-color: var(--color-primary);
    color: white;
    border: none;
    border-radius: var(--radius-sm);
    padding: 0.5rem 1rem;
    cursor: pointer;
    font-weight: 500;
}

button:hover {
    background-color: var(--color-primary-dark);
}

.text-soft {
    color: var(--color-text-soft);
}
</style>