<script setup>

</script>

<template>
  <nav>
    <DoubleCluster>
      <template #default>
        <slot name="title"/>
      </template>
      <template #innerContent>
        <slot name="links"/>
      </template>
    </DoubleCluster>
  </nav>
</template>

<style scoped>

</style>