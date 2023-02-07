<script setup>
const props = defineProps({intrinsic: Boolean})
</script>

<template>
  <div class="sub-block" :class="{intrinsic}">
    <slot/>
  </div>
</template>

<style scoped>
@layer block {
  .sub-block {
    background-color: var(--color-secondary);
    background-image: v-bind(image);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: var(--space-s-m);
    padding: var(--space-s-m);
    width: calc(100% - 2*var(--space-s-m));
    border-radius: var(--border-radius);
  }

  .intrinsic {
  width: auto;
  }

  html.dark .sub-block {
    background-color: var(--color-secondary-dark);
  }
}
</style>

