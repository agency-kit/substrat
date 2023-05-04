<script setup>
import SubSection from './SubSection.vue';
const slots = useSlots()
const SectionItems = defineComponent({
  render() {
    if (!slots.default) {
      return undefined;
    }
    let slot = slots.default()[0]
    if (slot.key === '_sections') {
      slot = slot.children[0]
    }
    let counter = 0;
    return slot.children.map(vnode => {
      const render = h(SubSection, {id: `subsec-${counter}`}, {default: () => vnode})
      counter++;
      return render
    })
  }
});


</script>

<template>
  <div class="flow">
    <SectionItems/>
  </div>
</template>

<style scoped>

</style>