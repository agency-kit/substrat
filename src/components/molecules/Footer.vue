<script setup>

</script>

<template>
  <footer>
    <Cluster class="footer-cluster">
      <div>
        <slot name="left">
          <div class="placeholder"></div>
        </slot>
      </div>
      <div>
        ©<slot name="copyright"/>
      </div>
      <div>
        <slot name="right">
          <div class="placeholder"></div>
        </slot>
      </div>
    </Cluster>
  </footer>
</template>

<style scoped>
.footer-cluster {
  padding: var(--space-s);
  background-color: var(--surface-2);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.placeholder {
  height: 1px;
  min-width: var(--size-4);
}
</style>