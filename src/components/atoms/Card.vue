<script setup>

</script>

<template>
  <div class="card flow">
    <slot/>
  </div>
</template>

<style scoped>
@layer block {
  .card {
    background: var(--color-light);
    color: var(--color-dark);
    border-radius: var(--border-radius);
    max-width: unset;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.244);
    height: 100%;
  }

.card ::selection {
    color: var(--color-dark);
    background: var(--color-secondary);
  }

.dark .card {
  background: var(--color-dark);
  color: var(--color-light);
}
}
</style>