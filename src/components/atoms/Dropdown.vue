<script>
export default defineComponent({
  setup(props, {slots}) {
    if (!slots.default) {
      return undefined;
    }
    return () => h('ul', slots.default()[0].children.map(vnode => h('li', [vnode])))
  }
})
</script>