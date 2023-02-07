<script setup>
const props = defineProps({secondary: Boolean})
</script>

<template>
  <Link class="link-button">
    <SubButton :secondary="secondary">
      <slot/>
    </SubButton>
  </Link>
</template>