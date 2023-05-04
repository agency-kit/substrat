<template>
  <DoubleCluster>
    <template #default>
      <slot name="title"/>
    </template>
    <template #innerContent>
      <div class="links">
        <slot name="links"/>
      </div>
    </template>
  </DoubleCluster>
</template>
