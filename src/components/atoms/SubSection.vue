<script setup>

const props = defineProps({text: Boolean})
</script>

<template>
  <section class="sub-section" :class="{text}">
    <slot/>
  </section>
</template>

<style scoped>
section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  --flow-space: var(--space-s);
  margin: auto;
  padding: var(--space-s);
}

section.text {
  align-items: flex-start;
  justify-content: flex-start;
}
</style>