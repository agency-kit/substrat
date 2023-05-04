
<template>
  <HUD>
    <template #left>
      <div></div>
      <div></div>
      <div class="boson i-carbon-3d-curve-manual"></div>
      <div class="boson i-carbon-3d-mpr-toggle"></div>
      <div class="boson i-carbon-3d-print-mesh"></div>
      <div class="boson i-carbon-3rd-party-connected"></div>
      <div class="boson i-carbon-3d-cursor"></div>
    </template>
  </HUD>
  <RouterView />
</template>


<style scoped>
.boson {
  opacity: 0.3;
}

.boson:hover {
  opacity: 1;
  transition: opacity var(--transition-duration) var(--transition-easing);
}
</style>
