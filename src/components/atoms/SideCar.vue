<script setup>
const props = defineProps({basis: {type: Number, default: 0}, minSize: {type: Number, default: 50}}) // in em
</script>

<template>
  <div class="sidecar">
    <div :class="{basis: props.basis}">
      <slot name="left"/>
    </div>
    <div>
      <slot name="right"/>
    </div>
  </div>
</template>

<style scoped>
.sidecar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-s);
  align-items: center;
}

.sidecar:deep(> :first-child) {
  flex-grow: 1;
  flex-basis: unset;
}

.sidecar .basis {
  flex-basis: v-bind(basis +'em');
}

.sidecar:deep(> :last-child) {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: calc(v-bind(minSize+'vw') - var(--space-m));
}
</style>