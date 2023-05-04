<template>
  <div class="center">
    <slot/>
  </div>
</template>

<style scoped>
@layer block {
  .center {
    display: flex;
    align-items: center;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    padding: var(--size-2);
    max-width: var(--size-content-3);
  }
}
</style>