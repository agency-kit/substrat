<template>
  <hr class="sub-hr">
</template>

<script setup>
const props = defineProps({
  content: String,
  double: Boolean,
  transparent: Boolean
});
// Non reactive, build only props
const content = `'${props.content}'`;
const double = props.double ? '3px double var(--surface-1)' : '1px solid var(--surface-1)'
const bg = props.transparent ? 'transparent' : `var(--surface-1)`
</script>

<style scoped>
@layer block {
  :where(hr) {
    background-color: unset;
    margin-block: var(--size-fluid-2);
  }

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
    background-color: v-bind("bg");
  }

  hr.sub-hr:after {
    background-color: v-bind("bg");
    content: v-bind("content");
    padding: 0 4px;
    position: relative;
    top: -13px;
  }
}
</style>