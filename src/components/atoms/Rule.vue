<template>
  <hr class="sub-hr">
</template>

<script setup>
const props = defineProps({
  content: String,
  double: Boolean,
});
const content = `'${props.content}'`;
const double = props.double ? '3px double var(--color-primary)' : '1px solid var(--color-primary)'
</script>

<style scoped>
@layer block {
  hr.sub-hr {
      width: 90%;
      border: none;
      border-top: v-bind("double");
      color: inherit;
      overflow: visible;
      text-align: center;
      height: 5px;
  }

  .sub-block hr.sub-hr::after {
    background-color: var(--color-secondary);
  }

  html.dark hr.sub-hr::after {
    background-color: var(--color-dark);
  }

  html.dark .sub-block hr.sub-hr::after {
    background-color: var(--color-secondary-dark);
  }

  hr.sub-hr:after {
      background-color: var(--color-light);
      content: v-bind("content");
      padding: 0 4px;
      position: relative;
      top: -1rem;
  }
}
</style>