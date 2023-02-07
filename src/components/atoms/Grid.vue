<script>
import GridItem from './GridItem.vue';

const GridItems = defineComponent({
  setup(props, {slots}) {
    if (!slots.default) {
      return undefined;
    }
    return () => slots.default()[0].children.map(vnode => h(GridItem, null, {default: ()=>vnode}))
  }
})

export default defineComponent({
  setup(props, {slots}) {
    return () => h('div', {class: 'grid'}, [h(GridItems, slots.default)])
  }
})
</script>

<style scoped>
@layer block {
  .grid {
    width: 100%;
    padding-left: var(--space-s);
    padding-right: var(--space-s);
    display: grid;
    grid-template-columns: repeat(
      var(--grid-placement, auto-fill),
      minmax(var(--grid-min-item-size, 16rem), 1fr)
    );
    gap: var(--gutter, var(--space-s-l));
  }

  .grid[data-rows='masonry'] {
    grid-template-rows: masonry;
    align-items: start;
  }

  .grid[data-layout='50-50'] {
    --grid-placement: auto-fit;
    --grid-min-item-size: clamp(4rem,50vw,10rem);
  }
}
</style>