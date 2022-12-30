<script>
export default defineComponent({
  setup(props, {slots}) {
    return () => h('section', {class: 'sub-section'}, [h(slots.default)])
  }
})
</script>

<!-- <template>
  <section>
    <slot/>
  </section>
</template> -->

<style scoped>
section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  --flow-space: var(--space-s);
  margin: auto;
  padding: var(--space-s);
}
</style>