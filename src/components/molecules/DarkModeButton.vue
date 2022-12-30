<script>
// Should inherit SubButton

export default defineComponent({
  setup(props, {slots}) {
    return () => h('button', {
      class: 'sub-button',
      onClick(event) {
        const html = document.documentElement
        if (html.classList.contains('dark')) {
          html.classList.remove('dark')
        } 
        else {
          html.classList.add('dark')
        }
    }
    }, [h(slots.default)])
  }
})
</script>

<!-- <template>
  <button class="sub-button dark-toggle">
    <slot/>
  </button>
</template> -->

<style scoped>
@layer block {
  .sub-button {
    background-color: var(--color-secondary);
    color: var(--color-dark);
  }
  html.dark .sub-button {
    background-color: var(--color-secondary-dark);
    color: var(--color-light);
  }
}
</style>