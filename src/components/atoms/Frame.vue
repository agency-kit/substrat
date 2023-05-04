<script setup>
const props = defineProps(['numerator','denominator', 'ratio', 'filter'])
const aspect = ref(null)
aspect.value = props.ratio ? props.ratio : 'var(--n) / var(--d)';
</script>

<template>
  <div class="frame">
    <div :class="{filter: filter}">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
@layer block {
  .frame {
    max-height: calc(100vh - var(--size-2));
    aspect-ratio: var(--ratio-landscape);
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
  }

  .frame > img,
  .frame > video {
    inline-size: 100%;
    block-size: 100%;
    object-fit: cover;
  }

  .filter {
    position: relative;
  }

  .filter::after {
    content: '';
    position: absolute;
    inset: 0;
    background-color: var(--surface-2);
    opacity: 0.5;
  }
}
</style>