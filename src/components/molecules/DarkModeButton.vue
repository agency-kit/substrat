<script setup>
const handleDark = ()=>{
  if (document) {
    const html = document.documentElement
    if (html.classList.contains('dark')) {
      localStorage.setItem('dark', 'false');
      html.classList.remove('dark')
    } 
    else {
      localStorage.setItem('dark', 'true');
      html.classList.add('dark')
    }
  }
}
</script>

<template>
  <button class="sub-button dark-toggle" @click="handleDark">
    <slot/>
  </button>
</template>

<style scoped>
@layer block {
  .sub-button {
    background-color: var(--color-secondary);
    color: var(--color-dark);
  }
  html.dark .sub-button {
    background-color: var(--color-secondary-dark);
    color: var(--color-light);
  }
}
</style>