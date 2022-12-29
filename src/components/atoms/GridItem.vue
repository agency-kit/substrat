<script>
import { h } from 'vue';

export default defineComponent({
  setup(props, {slots}) {
    return () => h('li', {class: 'grid-item'}, [h(slots.default)])
  }
})
</script>

<!-- 
<template>
  <li class="grid-item">
    <slot/>
  </li>
</template> -->

<style scoped>
.grid-item {
    display: block;
}
</style>