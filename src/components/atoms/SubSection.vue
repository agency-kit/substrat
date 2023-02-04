<script>
export default defineComponent({
  props: {
    text: Boolean
  },
  setup(props, {slots}) {
    return () => h('section', {class: [
      'sub-section', 
      props.text ? 'text': '']}, [h(slots.default)])
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

section.text {
  align-items: flex-start;
  justify-content: flex-start;
}
</style>