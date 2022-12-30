<script setup>
const props = defineProps(['numerator','denominator', 'ratio'])

const aspect = props.ratio ? props.ratio : 'var(--n) / var(--d)';
</script>

<!-- <script>
export default defineComponent({
  setup(props, {slots}) {
    const num = props.numerator
    const denom = props.denominator

    return () => h()
  }
})
</script> -->

<template>
  <div class="frame">
    <slot/>
  </div>
</template>

<style scoped>
.frame {
  --n: v-bind(numerator);
  --d: v-bind(denominator);
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