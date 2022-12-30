<script>

</script>

<template>
  <div class="trifold">
    <div>
      <slot name="left"/>
    </div>
    <div class="content">
      <slot/>
    </div>
    <div>
      <slot name="right"/>
    </div>
  </div>
</template>

<style scoped>
.trifold {
  display: flex;
  flex-wrap: nowrap;
  gap: var(--space-s);
}

.trifold:deep(> :first-child) {
  flex-grow: 3;
  flex-shrink: 0;
  flex-basis: unset;
  padding: var(--space-xs);
}

.trifold:deep(> .content) {
  flex-grow: 9;
  flex-basis: unset;
}

.trifold:deep(> :last-child) {
  flex-grow: 3;
  flex-shrink: 1;
  flex-basis: unset;
  padding: var(--space-xs);
}
</style>
