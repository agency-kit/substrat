<script setup>
const props = defineProps(['numerator','denominator', 'ratio', 'filter'])
const aspect = ref(null)
aspect.value = props.ratio ? props.ratio : 'var(--n) / var(--d)';
console.log(aspect.value, 'ASPECT')
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
    max-height: calc(100vh - var(--space-s));
    --n: v-bind("props.numerator");
    --d: v-bind("props.denominator");
    aspect-ratio: v-bind("aspect");
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
    background-color: var(--color-primary-α);
  }
}
</style>