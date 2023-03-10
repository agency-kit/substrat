<template>
  <div class="cluster">
    <slot/>
  </div>
</template>

<style scoped>
.cluster {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
}
</style>