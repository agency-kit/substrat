<script setup>
defineProps({href: String})
</script>

<template>
  <a class="sub-link" :href="href">
    <slot />
  </a>
</template>