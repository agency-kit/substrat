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
    background: var(--surface-2);
    color: var(--text-1);
    border-radius: var(--radius-3);
    max-width: unset;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.244);
    height: 100%;
  }

.card ::selection {
    color: var(--text-1);
    background: var(--surface-2);
  }
}
</style>