<script>
export default defineComponent({
  setup(props, {slots}) {
    return () => h('div', {class: 'center'}, [h(slots.default)])
  }
})
</script>

<!-- <template>
  <div class="center">
    <slot/>
  </div>
</template> -->

<style scoped>
@layer block {
  .center {
    display: flex;
    align-items: center;
    box-sizing: content-box;
    margin-left: auto;
    margin-right: auto;
    padding: var(--space-s);
    max-width: var(--measure);
  }
}
</style>