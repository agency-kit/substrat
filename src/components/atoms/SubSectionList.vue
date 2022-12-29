<script>
import SubSection from './SubSection.vue';

const SectionItems = defineComponent({
  setup(props, {slots}) {
    if (!slots.default) {
      return undefined;
    }
    return () => slots.default()[0].children.map(vnode => h(SubSection, null, {default: () => vnode}))
  }
});

export default defineComponent({
  setup(props, {slots}) {
    return () => h('div', {class: 'flow'}, [h(SectionItems, slots.default)])
  }
})
</script>

<!-- <template>
  <div class="flow">
    <SectionItems/>
  </div>
</template>

<style scoped>

</style> -->