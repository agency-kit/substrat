<template>
  <div class="double-cluster">
    <slot/>
    <Cluster>
      <template #default>
        <slot name="innerContent"/>
      </template>
    </Cluster>
  </div>
</template>

<style scoped>
.double-cluster {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}
</style>