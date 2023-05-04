<script setup>
defineProps({primary: Boolean, href: String})
</script>

<template>
  <Link class="button link-button" :href="href">
    <slot/>
  </Link>
</template>

<style scoped>
  .link-button {
    background-color: var(--surface-2);
    color: var(--text-1);
  }
</style>