<script setup>
const navHeight = $ref(0)
const nav = $ref(null)
// Need this to compensate for navbar position in the scroll height so that footer shows
onMounted(() => {
  navHeight = nav.$el.clientHeight + 'px'
  const updateNavHeight = debounce((event) => {
    navHeight = nav.$el.clientHeight + 'px'
  }, 50)
  addEventListener("resize", updateNavHeight);
})
</script>

<template>
  <div class="feldspar">
    <Navbar sticky ref="nav">
      <template #title>
        <slot name="nav-title"/>
      </template>
      <template #links>
        <slot name="nav-links"/>
      </template>
    </Navbar>
    <div class="feldspar-scroll">
      <SubSectionList>
        <slot name="sections"/>
      </SubSectionList>
      <Footer>
        <template #copyright>
          <slot name="copyright"/>
        </template>
      </Footer>
    </div>
  </div>
</template>

<style scoped>
.feldspar {
  max-height: 100vh;
  overflow: hidden;
}

.feldspar-scroll {
  overflow-y: auto;
  /* want to fall back to this if possible */
  height: 100vh; 
  height: calc(100vh - v-bind("navHeight"));
}
</style>