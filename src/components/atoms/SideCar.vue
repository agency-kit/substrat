<script>
export default defineComponent({
  props: {
    basis: Boolean
  },
  setup(props, {slots}) {
    return () => h('div', {class: 'sidecar'}, [
     h('div', {class: (props.basis ? 'basis' : '')}, h(slots.left)),
     h('div', null, h(slots.right))
    ])
  }
})
</script>

<!-- <template>
  <div class="sidecar">
    <div>
      <slot/>
    </div>
    <div>
      <slot/>
    </div>
  </div>
</template> -->

<style scoped>
.sidecar {
  display: flex;
  flex-wrap: wrap;
  gap: var(--space-s);
}

.sidecar:deep(> :first-child) {
  flex-grow: 1;
  flex-basis: unset;
}

.sidecar:deep(> .basis) {
  flex-basis: 48%;
}

.sidecar:deep(> :last-child) {
  flex-basis: 0;
  flex-grow: 999;
  min-inline-size: calc(50vw - var(--space-m));
}
</style>