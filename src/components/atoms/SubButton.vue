<script>
import { defineComponent, h } from 'vue';

export default defineComponent({
  setup(props, {slots}) {
    return () => h('button', {
      class: 'sub-button',
    }, [h(slots.default)])
  }
})
</script>

<!-- <template>
  <button class="sub-button">
    <slot/>
  </button>
</template> -->

<style scoped>
@layer block {
  .sub-button {
    background-color: var(--color-secondary);
    color: var(--color-dark);
    margin-bottom: var(--space-s);
  }
  html.dark .sub-button {
    background-color: var(--color-secondary-dark);
    color: var(--color-light);
  }
}
</style>