<template>
  <div class="pyroxene">
    <Sidebar>
      <template #bar>
        <slot name="bar"/>
      </template>
      <template #default>
        <Feldspar>
          <template #nav-title>
            <slot name="nav-title"/>
          </template>
          <template #nav-links>
            <slot name="nav-links"/>
          </template>
          <template #sections>
            <slot name="sections"/>
          </template>
          <template #copyright>
            <slot name="copyright"/>
          </template>
        </Feldspar>
      </template>
    </Sidebar>
  </div>
</template>

<style scoped>
@layer composition {
  .pyroxene:deep(.bar) {
    background-color: var(--surface-2);
    height: 100vh;
  }

  .pyroxene:deep(.sidebar) {
    gap: 0;
  }
}
</style>