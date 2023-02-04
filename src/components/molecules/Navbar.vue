<script setup>
const props = defineProps({
  sticky: Boolean
})
</script>

<template>
  <nav :class="{sticky: props.sticky}">
    <DoubleCluster>
      <template #default>
        <slot name="title"/>
      </template>
      <template #innerContent>
        <div class="links">
          <slot name="links"/>
        </div>
      </template>
    </DoubleCluster>
  </nav>
</template>

<style scoped>
.links:deep(> *) {
  margin-left: 1rem;
  display: inline-flex;
}

nav {
  background-color: var(--color-primary);
  z-index: 1;
  padding: var(--space-s);
}

.dark nav {
  background-color: var(--color-dark);
}

nav.sticky {
  position: sticky;
  top: 0;
}
</style>