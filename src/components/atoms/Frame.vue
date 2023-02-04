<script setup>
const props = defineProps(['numerator','denominator', 'ratio'])
const aspect = ref(null)
aspect.value = props.ratio ? props.ratio : 'var(--n) / var(--d)';
console.log(aspect.value, 'ASPECT')
</script>

<template>
  <div class="frame">
    <slot/>
  </div>
</template>

<style scoped>
.frame {
  --n: v-bind("props.numerator");
  --d: v-bind("props.denominator");
  aspect-ratio: v-bind("aspect");
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

.frame > img,
.frame > video {
  inline-size: 100%;
  block-size: 100%;
  object-fit: cover;
}
</style>