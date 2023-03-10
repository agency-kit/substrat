<script setup>
const props = defineProps({primary: Boolean})
</script>

<template>
  <button class="sub-button" :class="{primary}">
    <slot/>
  </button>
</template>

<style scoped>
@layer block {
  .sub-button {
    background-color: var(--surface-2);
    color: var(--text-1);
  }

  .sub-button.primary {
    background-color: var(--brand);
  }
}
</style>