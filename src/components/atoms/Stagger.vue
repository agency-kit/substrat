<script setup>
const props = defineProps(['maxWidth'])
const slots = useSlots();
const StaggerItems = defineComponent({
  render() {
    if (!slots.default) {
      return undefined;
    }
    return slots.default().map(vnode => h('div', {class: 'stag'}, [vnode]))
  }
})
</script>

<template>
  <div class="stagger">
    <StaggerItems/>
  </div>
</template>

<style scoped>
.stagger {
  width: v-bind(maxWidth+'px');
}

.stagger:deep(.stag) {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  white-space: nowrap;
}

.stagger:deep(.stag:nth-child(2)) {
  margin-left: 50px;
}


</style>