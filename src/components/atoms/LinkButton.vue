<script setup>
const props = defineProps({primary: Boolean})
</script>

<template>
  <SubButton :primary="primary">
    <Link class="link-button">
      <slot/>
    </Link>
  </SubButton>
</template>