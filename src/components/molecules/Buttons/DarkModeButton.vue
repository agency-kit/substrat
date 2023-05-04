<script setup>
const handleDark = ()=>{
  if (document) {
    const html = document.documentElement
    if (html.getAttribute('color-scheme') === 'dark') {
      localStorage.setItem('dark', 'false');
      html.setAttribute('color-scheme', 'light')
    } else {
      localStorage.setItem('dark', 'true');
      html.setAttribute('color-scheme', 'dark')
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
    background-color: var(--surface-2);
    color: var(--text-1);
  }
}
</style>