<template>
  <a class="sub-link">
    <slot />
  </a>
</template>
<style scoped>

</style>
<script lang="ts" setup>
// From VPS
// import { useAttrs, computed } from 'vue'
// import { usePageContext } from './usePageContext'
// const pageContext = usePageContext()
// const { href } = useAttrs()
// const isActive = computed(() => {
//   const { urlPathname } = pageContext
//   return href === '/' ? urlPathname === href : urlPathname.startsWith(href)
// })
</script>