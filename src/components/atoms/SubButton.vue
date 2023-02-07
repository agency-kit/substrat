<script setup>
const props = defineProps({secondary: Boolean})
</script>

<template>
  <button class="sub-button" :class="{secondary}">
    <slot/>
  </button>
</template>

<style scoped>
@layer block {
  .sub-button {
    background-color: var(--color-secondary);
    color: var(--color-dark);
    margin-bottom: var(--space-s);
  }
  html.dark .sub-button {
    background-color: var(--color-secondary-dark);
    color: var(--color-light);
  }
}
</style>