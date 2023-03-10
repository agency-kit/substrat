<template>
  <div class="drop-container">
    <SubButton 
      type="button" 
      aria-haspopup="true" 
      aria-expanded="true" 
      aria-controls="dropdown"
    >
      <slot/>
    </SubButton>
    <Dropdown class="dropdown">
      <template #default>
        <slot name="dropdown"/>
      </template>
    </Dropdown>
  </div>
</template>

<style scoped>
.drop-container {
  position: relative;
}

.dropdown {
  padding: var(--size-2);
  position: absolute;
  top: 0;
  opacity: 0;
  overflow: hidden;
  background: var(--surface-1);
  width: auto;
  z-index: -1;
  border-radius: var(--radius-2);
  transition: top var(--ease-squish-3) 0.2s, opacity var(--ease-squish-3) 0.2s;
  box-shadow: var(--default-shadow);
}

.drop-container:focus-within .dropdown {
  top: 100%;
  opacity: 1;
}
</style>