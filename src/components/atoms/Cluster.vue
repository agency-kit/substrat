<script>
export default defineComponent({
  setup(props, {slots}) {
    return () => h('div', {class: 'cluster'}, [h(slots.default)])
  }
})
</script>

<!-- <template>
  <div class="cluster">
    <slot/>
  </div>
</template> -->

<style scoped>
.cluster {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
</style>