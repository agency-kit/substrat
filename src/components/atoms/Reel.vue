<script>
import { defineComponent, h } from 'vue';

const ReelItems = defineComponent({
  setup(props, {slots}) {
    if (!slots.default) {
      return undefined;
    }
    return () => slots.default()[0].children.map(vnode => h('div', {
      class: 'reel-item',
      onClick(event) {
        // scroll by current element 
      }
  }, vnode))
  }
})
export default defineComponent({
  setup(props, {slots}) {
    return () => h('div',{class:'reel-wrapper'}, [
      h('div', {class: 'shroud'}),
      h('div', {class: 'reel'}, [h(ReelItems, slots.default)])
    ])
  }
})
</script>

<!-- <template>
  <div class="reel">
    <ReelItems/>
  </div>
</template> -->

<style scoped>
.reel {
  display: flex;
  block-size: auto;
  overflow-x: auto;
  overflow-y: hidden;
  scrollbar-color: #fff #000;
  max-width: 90vw;
  padding-bottom: var(--space-s);
  scroll-snap-type: x mandatory;
}

.reel-wrapper { 
  position: relative;
}
.shroud {
  position: absolute;
  inset: 0;
  bottom: var(--space-s);
  pointer-events: none;
  background: linear-gradient(90deg, var(--color-light) 0%, rgba(255,255,255,0) 10%, rgba(255,255,255,0) 90%, var(--color-light) 100%);
}

.dark .shroud {
  background: linear-gradient(90deg, var(--color-dark) 0%, rgba(255,255,255,0) 10%, rgba(255,255,255,0) 90%, var(--color-dark) 100%);
}

.reel::-webkit-scrollbar {
  block-size: 1rem;
}

.reel::-webkit-scrollbar-track {
  background-color: var(--color-light);
}

.reel::-webkit-scrollbar-thumb {
  background-color: var(--surface-2);
}

.reel:deep(.reel-item) {
  max-width: 90vw;
  scroll-snap-align: center;
}

.reel:deep(> *) {
  flex: 0 0 auto;
}

.reel:deep( > img ){
  block-size: 100%;
  flex-basis: auto;
  width: auto;
}

.reel:deep( > * + *) {
  margin-inline-start: 1rem;
}

.reel.overflowing {
  padding-block-end: 1rem;
}
</style>