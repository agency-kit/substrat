<script setup>
const props = defineProps({switch: Boolean, ratio: Number})
</script>


<template>
  <SideCar basis :class="{ switch: props.switch}">
    <template #left>
      <Frame numerator="16" denominator="9" :ratio="ratio">
        <slot name="img"/>
      </Frame>
    </template>
    <template #right>
      <slot/>
    </template>
  </SideCar>
</template>

<style scoped>
.switch.sidecar {
  flex-direction: row-reverse;
}
</style>