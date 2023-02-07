<script setup>
const props = defineProps({basis: {Number}, minSize: {Number}, switch: Boolean, ratio: Number, filter: Boolean})
</script>


<template>
  <SideCar :basis="basis" :minSize="minSize" :class="{ switch: props.switch}">
    <template #left>
      <Frame numerator="9" denominator="16" :ratio="ratio" :filter="filter">
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