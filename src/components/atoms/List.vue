<script setup>
import { defineComponent, h } from 'vue';

const outerSlots = useSlots()

const ListItems = defineComponent({
  render() {
    if (!outerSlots.default) {
      return;
    }
    return outerSlots.default().map(vnode => h(ListItem, {class: 'list-item'}, {
      default: () => vnode
    }))
  }
})

const ListItem = defineComponent({
  setup(props, {slots}) {
    return () => h('li', null, [slots.default()])
  }
})
</script>

<template>
  <div>
    <ul>
      <ListItems/>
    </ul>
  </div>
</template>

<style scoped>

</style>