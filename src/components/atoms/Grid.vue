<script setup>
import GridItem from './GridItem.vue';
const slots = useSlots();

const GridItems = defineComponent({
  render() {
    if (!slots.default) {
      return undefined;
    }
    return slots.default()[0].children.map(vnode => h(GridItem, null, {default: () => vnode}))
  }
})
</script>

<template>
  <div class="grid">
    <GridItems/>
  </div>
</template>

<style scoped>
@layer block {
  .grid {
    width: 100%;
    padding-left: var(--size-2);
    padding-right: var(--size-2);
    display: grid;
    grid-template-columns: repeat(
      auto-fill,
      minmax(var(--size-13, 16rem), 1fr)
    );
    gap: var(--gutter, var(--size-2));
  }

  .grid[data-rows='masonry'] {
    grid-template-rows: masonry;
    align-items: start;
  }

  .grid[data-layout='50-50'] {
    --grid-min-item-size: var(--size-fluid-7);
  }
}
</style>