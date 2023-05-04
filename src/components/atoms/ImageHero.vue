<template>
  <div class="backdrop-shell">
    <div class="backdrop">
        <slot name="backdrop"/>
    </div>
    <slot/>
  </div>
</template>

<style scoped>
.backdrop {
    position: absolute;
    inset: 0;
    z-index: -1;
    overflow: hidden;
}
:slotted(.custom-hero-image) {
    width: 100%;
    object-fit: cover;
    height: 100%;
}
.backdrop-shell {
    min-height: 100vh;
    width: 100%;
    position: relative;
}
</style>