<script setup>
const props = defineProps({
  sticky: Boolean
})
</script>

<template>
  <nav :class="{sticky: props.sticky}">
    <slot>
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
    </slot>
  </nav>
</template>

<style scoped>
.links {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-block: var(--size-1);
}

.links:deep(> *) {
  margin-left: 1rem;
  display: inline-flex;
}

nav {
  background-color: var(--surface-2);
  z-index: 1;
  padding: var(--size-2);
  box-shadow: var(--default-shadow);
}

nav.sticky {
  position: sticky;
  top: 0;
}
</style>