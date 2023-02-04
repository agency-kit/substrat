<script setup>
const nav = $ref(null)
const bar = $ref(null)
const navHeight = $ref('')
onMounted(()=>{
  navHeight = nav.$el.clientHeight + 'px'
})
</script>

<template>
  <div class="chalcedony">
    <Navbar sticky ref="nav">
      <template #title>
        <slot name="nav-title"/>
      </template>
      <template #links>
        <slot name="nav-links"/>
      </template>
    </Navbar>
    <Sidebar sticky ref="bar">
      <template #bar="{toggle, open}">
        <slot name="sidebar"/>
        <div @click="toggle" class="toggle-tab">
          <div :class="{
            'i-carbon-direction-loop-left': open,
            'i-carbon-direction-loop-right': !open }"/>
        </div>
      </template>
      <template #default>
        <div class="scroller">
          <slot name="content"/>
          <Footer>
            <template #copyright>
              <slot name="footer-copyright"/>
            </template>
          </Footer>
        </div>
      </template>
    </Sidebar>
  </div>
</template>

<style scoped>
.chalcedony {
  position: relative;
  max-height: 100vh;
  overflow: hidden;
}

.chalcedony:deep(.sidebar) {
  transition: min-width 0.5s ease-in-out;
  gap: 0;
}

.chalcedony:deep(.bar) {
  position: relative;
  padding: var(--space-s);
  height: 100vh;
  background: var(--color-secondary);
  transition: min-width 0.5s ease-in-out;
}

.dark .chalcedony:deep(.bar), .dark .toggle-tab {
  background: var(--color-secondary-dark);
}

.toggle-tab {
  position: absolute;
  right: -1rem;
  top: 2rem;
  border-radius: var(--border-radius);
  background-color: var(--color-secondary);
}

.chalcedony .scroller {
  padding-bottom: v-bind("navHeight");
}
</style>