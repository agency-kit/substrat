<!-- <script>
export default defineComponent({
  props: {
    basis: Boolean
  },
  setup(props, {slots}) {
    return () => h('div', {class: 'sidebar'}, [
     h('div', {class: (props.basis ? 'basis' : '')}, h(slots.left)),
     h('div', null, h(slots.right))
    ])
  }
})
</script> -->

<script setup>
const props = defineProps({
  sticky: Boolean,
  full: Boolean
})

const bar = $ref(null)
const open = $ref(true)
const width = $ref(0)
const offset = '10'
const toggle = () => {
  if (open) {
    open = !open
    width = bar.clientWidth
    bar.style.minWidth = `${offset}px`
  } else {
    bar.style.minWidth = `${width}px`
    bar.style.position = 'relative'
    setTimeout(()=>open = !open, 300)
  }
}
</script>


<template>
  <div class="sidebar" :class="{full: props.full}">
    <div class="bar" ref="bar" :class="{hide: !open, sticky: props.sticky}">
      <slot name="bar" :toggle="toggle" :open="open"/>
    </div>
    <div class="content">
      <slot/>
    </div>
  </div>
</template>

<style scoped>
@layer block {
  .sidebar {
    display: flex;
    flex-shrink: 0;
    flex-wrap: nowrap;
    gap: var(--space-s);
  }

  .sidebar:deep(> :first-child) {
    flex-grow: 1;
    flex-basis: unset;
  }

  .sidebar:deep(> :last-child) {
    flex-basis: 0;
    flex-grow: 999;
  }

  .sidebar.full {
    max-height: 100vh;
  }

  .sticky.bar {
    position: sticky;
    top: 0;
  }

  .bar {
    align-self: flex-start;
    min-width: 6rem;
  }

  .bar.hide:deep(> *:not(.toggle-tab)) {
    display: none;
  }

  .content {
    overflow-y: auto;
  }
}
</style>