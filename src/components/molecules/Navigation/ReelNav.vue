<template>
  <div class="reel-nav">
    <div class="title">
      <slot/>
    </div>
    <Reel class="links">
      <slot name="links"/>
    </Reel>
  </div>
</template>

<style scoped>
.reel-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.title {
  padding: var(--size-2);
}

.links {
  padding-block: var(--size-2);
}

.links:deep(.reel) {
  overflow-y: none;
}
</style>
