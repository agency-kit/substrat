<script>
export default defineComponent({
  setup(props, {slots}) {
    return () => h('section', null, [h(slots.default)])
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
}
</style>