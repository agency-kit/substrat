<script lang="ts" setup>
const props = defineProps({intrinsic: Boolean, image: String})
</script>

<template>
  <div class="sub-block" :class="{intrinsic}">
    <slot/>
  </div>
</template>

<style scoped>
@layer block {
  .sub-block {
    background-color: var(--surface-2);
    background-image: v-bind(image);
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: var(--size-2);
    padding: var(--size-4);
    width: calc(100% - 2 * var(--size-2));
    border-radius: var(--radius-4);
    box-shadow: var(--default-shadow);
  }

  .intrinsic {
    width: auto;
  }
}
</style>

